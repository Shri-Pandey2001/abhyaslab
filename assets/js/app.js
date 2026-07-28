/* ==========================================================================
   AbhyasLab — application
   ========================================================================== */
(() => {
"use strict";

/* ---------------------------------------------------------------- helpers */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/* trailing spaces and blank end-lines shouldn't fail a student */
const tidy = (s) => String(s == null ? "" : s)
  .replace(/\r\n/g, "\n")
  .split("\n").map(l => l.replace(/\s+$/, "")).join("\n")
  .replace(/\n+$/, "").replace(/^\n+/, "");

const pad = (n) => String(n).padStart(2, "0");

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3600);
}

function credit() {
  return `<footer class="credit">
    <span>Created by <strong>${esc(CONFIG.author)}</strong></span>
    <a href="${esc(CONFIG.authorGithub)}" target="_blank" rel="noopener">GitHub</a>
    <a href="${esc(CONFIG.authorInstagram)}" target="_blank" rel="noopener">Instagram</a>
  </footer>`;
}

function guardNote(what) {
  if (!CONFIG.focusGuard || isFaculty()) return "";
  return `<div class="guard">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 L22 20 H2 Z M11 9h2v6h-2z m0 8h2v2h-2z"/></svg>
    <span>Stay on this tab. If you switch away, minimise, or open another window,
    ${what}. <b>Finish here first.</b></span>
  </div>`;
}

/* ---------------------------------------------------------------- content */
/* Every screen a student can reach, in the order they unlock. */
const STEPS = [];
COURSE.forEach((u, ui) => {
  u.topics.forEach((t, ti) => STEPS.push({
    kind: "topic", unitIdx: ui, unit: u.unit, unitTitle: u.unitTitle,
    no: ti + 1, id: t.id, title: t.title, summary: t.summary, data: t
  }));
  if (u.test) STEPS.push({
    kind: "test", unitIdx: ui, unit: u.unit, unitTitle: u.unitTitle,
    id: "test:" + u.unit, title: u.test.title || (u.unit + " Test"),
    summary: `${u.test.questions.length} questions · ${u.test.questions.length * u.test.marksPerQuestion} marks · ${u.test.durationMinutes} minutes`,
    data: u.test
  });
  if (u.project) STEPS.push({
    kind: "project", unitIdx: ui, unit: u.unit, unitTitle: u.unitTitle,
    id: "proj:" + u.unit, title: u.project.title, summary: u.project.summary, data: u.project
  });
});

const stepAt   = (i) => STEPS[i];
const indexOf_ = (id) => STEPS.findIndex(s => s.id === id);
const totalMarks = (test) => test.questions.length * test.marksPerQuestion;

/* ------------------------------------------------------------------ state */
const KEY_STUDENT = "abhyaslab.student";
const keyProgress = (id) => "abhyaslab.progress." + id;

let student  = null;
let progress = {};
let view     = { name: "dashboard", step: 0 };
const chat   = [];

function loadStudent() {
  try { return JSON.parse(localStorage.getItem(KEY_STUDENT) || "null"); }
  catch { return null; }
}
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(keyProgress(student.id)) || "{}"); }
  catch { return {}; }
}
function saveProgress() {
  if (isFaculty()) return;                      // preview only — nothing is kept
  try { localStorage.setItem(keyProgress(student.id), JSON.stringify(progress)); } catch {}
}
function rec(id) {
  if (!progress[id]) progress[id] = { done: false, tasks: {}, mcqScore: 0, mcqTotal: 0, mcqPassed: false };
  if (!progress[id].tasks) progress[id].tasks = {};
  return progress[id];
}

/* ----------------------------------------------------------------------
   WHO IS THIS?
   Roll numbers beginning with S are students: locked in sequence, and
   everything they do is written to the Sheet.
   IDs beginning with F are faculty: every unit open from the start, and
   nothing is recorded anywhere.
   ---------------------------------------------------------------------- */
const isFaculty = () => !!student && /^f/i.test(String(student.id).trim());

/* Faculty calls quietly go nowhere. One wrapper, so no call site can forget. */
const SYNC = (() => {
  const skip = () => Promise.resolve({ ok: false, faculty: true });
  const w = {};
  ["register", "logProgress", "logTest", "logProject", "heartbeat", "flag", "checkStudent"]
    .forEach(fn => { w[fn] = (...args) => isFaculty() ? skip() : API[fn](...args); });
  w.beacon = (...args) => isFaculty() ? false : API.beacon(...args);
  w.isLive = () => API.isLive();
  return w;
})();

function isUnlocked(i) {
  if (isFaculty()) return true;                 // faculty see every unit at once
  if (!CONFIG.lockingEnabled || i === 0) return true;
  const prev = progress[STEPS[i - 1].id];
  return !!(prev && prev.done);
}
const doneCount = () => STEPS.filter(s => progress[s.id] && progress[s.id].done).length;

/* ======================================================================
   SESSION CLOCK
   Counts only the time the tab is actually in front, and reports it to the
   Session_Log tab so faculty see real time on task, not time since login.
   ====================================================================== */
const SESSION = { id: null, active: 0, lastTick: 0, lastSent: 0, timer: null };

function currentScreen() {
  if (view.name === "dashboard") return "Home";
  const s = stepAt(view.step);
  return s ? s.title : "Home";
}

function beginSession() {
  if (isFaculty()) return;                      // no time tracking for faculty
  SESSION.id = String(student.id).replace(/\s+/g, "") + "-" + Date.now().toString(36);
  SESSION.active = 0;
  SESSION.lastTick = Date.now();
  SESSION.lastSent = 0;
  beat();
  SESSION.timer = setInterval(tickSession, 15000);
}

function tickSession() {
  const now = Date.now();
  if (document.visibilityState === "visible") SESSION.active += now - SESSION.lastTick;
  SESSION.lastTick = now;
  if (now - SESSION.lastSent >= (CONFIG.heartbeatSeconds || 120) * 1000) beat();
}

function beat() {
  if (!SESSION.id) return;
  SESSION.lastSent = Date.now();
  SYNC.heartbeat(student, { sessionId: SESSION.id, minutes: SESSION.active / 60000, screen: currentScreen() });
}

/* one last ping as the tab closes */
window.addEventListener("pagehide", () => {
  if (!SESSION.id || isFaculty()) return;
  const now = Date.now();
  if (document.visibilityState === "visible") SESSION.active += now - SESSION.lastTick;
  SYNC.beacon(student, { sessionId: SESSION.id, minutes: SESSION.active / 60000, screen: currentScreen() });
});

/* ======================================================================
   FOCUS GUARD
   Leave the tab mid-topic and that topic resets. Leave mid-test and the
   test is submitted where it stands.
   ====================================================================== */
const guard = { armed: false, step: -1, allowLeave: false, pending: null };

function armGuard(i, on) { guard.armed = !!on; guard.step = i; }

/* opening a link in a new tab is not cheating */
document.addEventListener("click", (e) => {
  const a = e.target.closest && e.target.closest('a[target="_blank"]');
  if (!a) return;
  guard.allowLeave = true;
  setTimeout(() => { guard.allowLeave = false; }, 4000);   // one trip only
}, true);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    if (guard.pending) {
      const msg = guard.pending;
      guard.pending = null;
      render();
      toast(msg);
    }
    return;
  }
  if (!CONFIG.focusGuard || !guard.armed || isFaculty()) return;
  if (guard.allowLeave) { guard.allowLeave = false; return; }

  const s = stepAt(guard.step);
  if (!s) return;

  if (s.kind === "test" && exam.running) {
    finishExam("You left the tab");
    SYNC.flag(student, { event: "Left the tab during a test", where: s.title,
                        detail: "Test submitted automatically" });
    guard.pending = "You left the tab, so the test was submitted.";
  } else if (s.kind === "topic") {
    delete progress[s.id];
    saveProgress();
    SYNC.logProgress(student, {
      unit: s.unit, topic: s.title, mcqScore: "",
      codeStatus: "Left the tab", progression: "Topic progress reset"
    });
    SYNC.flag(student, { event: "Left the tab during a topic", where: s.title,
                        detail: "Topic progress cleared" });
    guard.pending = "You left the tab. This topic's progress was cleared.";
  }
});

/* ======================================================================
   WELCOME SCREEN
   ====================================================================== */
const SCRIPT_LINES = [
  { t: '>>> ', cls: 'prompt', instant: true },
  { t: 'print("Concept To Code")' },
  { t: '\n' },
  { t: 'Concept To Code', cls: 'out', instant: true },
  { t: '\n>>> ', cls: 'prompt', instant: true },
  { t: 'run_python(in_browser=True)' },
  { t: '\nNothing to install. Start typing.', cls: 'out', instant: true }
];

function typeShell() {
  const box = $("#shellText");
  if (!box) return;
  const slow = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let li = 0, ci = 0, html = "";

  if (!slow) {
    box.innerHTML = SCRIPT_LINES
      .map(p => p.cls ? `<span class="${p.cls}">${esc(p.t)}</span>` : esc(p.t)).join("");
    const c = $("#caret"); if (c) c.style.display = "none";
    return;
  }
  (function step() {
    if (li >= SCRIPT_LINES.length) { const c = $("#caret"); if (c) c.style.display = "none"; return; }
    const part = SCRIPT_LINES[li];
    if (part.instant) {
      html += part.cls ? `<span class="${part.cls}">${esc(part.t)}</span>` : esc(part.t);
      li++; ci = 0;
      box.innerHTML = html;
      return setTimeout(step, 260);
    }
    ci++;
    box.innerHTML = html + `<span class="str">${esc(part.t.slice(0, ci))}</span>`;
    if (ci >= part.t.length) { html += `<span class="str">${esc(part.t)}</span>`; li++; ci = 0; return setTimeout(step, 240); }
    setTimeout(step, 42);
  })();
}

/* ======================================================================
   REGISTRATION
   ====================================================================== */
$("#regForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id   = $("#regId").value.trim();
  const name = $("#regName").value.trim();
  const note = $("#regNote");
  const btn  = $("#regForm button[type=submit]");

  if (id.length < 3)   { note.textContent = "That roll number looks too short — use the one on your ID card."; note.classList.add("is-bad"); return; }
  if (!/^[sf]/i.test(id)) {
    note.textContent = "Roll numbers start with S. Faculty IDs start with F. Check yours and try again.";
    note.classList.add("is-bad");
    return;
  }
  if (name.length < 3) { note.textContent = "Enter your full name."; note.classList.add("is-bad"); return; }

  note.classList.remove("is-bad");
  note.innerHTML = '<span class="spin"></span> Setting up your workspace…';
  btn.disabled = true;

  const chk = await SYNC.checkStudent(id);
  btn.disabled = false;
  if (chk && chk.blocked) {
    note.textContent = "This roll number has been removed by your faculty. Speak to them before continuing.";
    note.classList.add("is-bad");
    return;
  }

  student = { id, name, since: new Date().toISOString() };
  localStorage.setItem(KEY_STUDENT, JSON.stringify(student));
  progress = loadProgress();

  SYNC.register(student);          // logged in the background; never blocks the student
  startApp();
});

function startApp() {
  $("#gate").hidden = true;
  $("#app").hidden  = false;
  $("#whoName").textContent = student.name;
  $("#whoId").textContent   = student.id;
  $("#railUnitTitle").textContent = COURSE[0].unitTitle;
  $("#askBtn").hidden = !CONFIG.aiEnabled;
  const tag = $("#whoTag");
  if (tag) tag.hidden = !isFaculty();
  go({ name: "dashboard" });
  beginSession();
}

/* A student deleted by faculty may still have data in their own browser.
   Check on every load and clear them out if so. */
async function verifyStudent() {
  if (isFaculty()) return;
  const chk = await SYNC.checkStudent(student.id);
  if (!chk || !chk.blocked) return;
  try {
    localStorage.removeItem(KEY_STUDENT);
    localStorage.removeItem(keyProgress(student.id));
  } catch {}
  if (SESSION.timer) clearInterval(SESSION.timer);
  SESSION.id = null;
  alert("This roll number has been removed by your faculty. Speak to them before continuing.");
  location.reload();
}

/* ======================================================================
   RAIL
   ====================================================================== */
const KIND_LABEL = { topic: "Topic", test: "Test", project: "Project" };

function paintRail() {
  let lastUnit = null;
  $("#railList").innerHTML = STEPS.map((s, i) => {
    const r = progress[s.id];
    const done = r && r.done;
    const open = isUnlocked(i);
    const cur  = view.name !== "dashboard" && view.step === i;
    const cls  = ["tnode", done ? "is-done" : (open ? "is-open" : "is-locked"), cur ? "is-current" : ""].join(" ");
    const glyph = done ? "&#10003;" : (open ? (s.kind === "topic" ? s.no : (s.kind === "test" ? "T" : "P")) : "&#128274;");
    const kicker = s.kind === "topic" ? `${esc(s.unit)} &middot; Topic ${s.no}` : `${esc(s.unit)} &middot; ${KIND_LABEL[s.kind]}`;
    const divider = (lastUnit !== null && lastUnit !== s.unit) ? `<li class="rail__div">${esc(s.unit)}</li>` : "";
    lastUnit = s.unit;
    return `${divider}<li class="${cls}">
      <span class="tnode__stamp" aria-hidden="true"><span>${glyph}</span></span>
      <button class="tnode__btn" data-goto="${i}" ${open ? "" : "disabled"}>
        <span class="tnode__k">${kicker}</span>
        <span class="tnode__t">${esc(s.title)}</span>
      </button>
    </li>`;
  }).join("");

  const n = doneCount();
  $("#railMeterFill").style.width = (n / STEPS.length * 100) + "%";
  $("#railCount").textContent = `${n} of ${STEPS.length} complete`;
}

$("#railList").addEventListener("click", (e) => {
  const b = e.target.closest("[data-goto]");
  if (b) { go({ name: "step", step: +b.dataset.goto }); closeRail(); }
});

const openRail  = () => { $("#rail").classList.add("is-open"); $("#railScrim").hidden = false; $("#menuBtn").setAttribute("aria-expanded", "true"); };
const closeRail = () => { $("#rail").classList.remove("is-open"); $("#railScrim").hidden = true; $("#menuBtn").setAttribute("aria-expanded", "false"); };
$("#menuBtn").addEventListener("click", () => $("#rail").classList.contains("is-open") ? closeRail() : openRail());
$("#railScrim").addEventListener("click", closeRail);
$("#homeLink").addEventListener("click", (e) => { e.preventDefault(); go({ name: "dashboard" }); });

/* ======================================================================
   ROUTER
   ====================================================================== */
function go(next) {
  if (exam.timerId) { clearInterval(exam.timerId); exam.timerId = null; }
  if (view.name === "step" && stepAt(view.step) && stepAt(view.step).kind === "test") resetExam();
  view = Object.assign({ step: 0 }, next);
  render();
  $("#main").scrollTop = 0;
  window.scrollTo(0, 0);
  $("#main").focus({ preventScroll: true });
}

function render() {
  paintRail();
  if (view.name === "dashboard") { armGuard(-1, false); paintDashboard(); $("#askContext").textContent = "Overview"; return; }

  const i = view.step, s = stepAt(i);
  if (!s) return paintDashboard();
  $("#askContext").textContent = s.kind === "topic" ? "Topic " + s.no : KIND_LABEL[s.kind];

  if (s.kind === "topic")   { armGuard(i, true);  return paintTopic(i); }
  if (s.kind === "test")    { armGuard(i, exam.running); return paintTest(i); }
  if (s.kind === "project") { armGuard(i, false); return paintProject(i); }
}

/* ======================================================================
   DASHBOARD
   ====================================================================== */
function paintDashboard() {
  const n = doneCount();
  const nextIdx = STEPS.findIndex((s, i) => isUnlocked(i) && !(progress[s.id] && progress[s.id].done));
  const target  = nextIdx === -1 ? STEPS.length - 1 : nextIdx;
  const first   = esc(student.name.split(" ")[0]);

  const tasksPassed = STEPS.reduce((a, s) =>
    a + (s.kind === "topic" && progress[s.id] ? Object.keys(progress[s.id].tasks || {}).length : 0), 0);
  const testStep = STEPS.find(s => s.kind === "test");
  const testRec  = testStep ? progress[testStep.id] : null;

  $("#main").innerHTML = `<div class="wrap">
    <section class="hero">
      <p class="hero__k">${esc(CONFIG.institution)} &middot; ${esc(CONFIG.courseName)}${isFaculty() ? " &middot; Faculty preview" : ""}</p>
      <h2 class="hero__t">${n === 0 ? "Welcome, " + first + "." : "Keep going, " + first + "."}</h2>
      <p class="hero__s">${n === 0
        ? "Read, answer, then write Python that runs on this page. Finish the topics, clear the unit test, submit the project."
        : (n === STEPS.length
            ? "Everything live right now is complete. More units are on the way."
            : "You've cleared " + n + " of " + STEPS.length + " steps. Next up: " + esc(STEPS[target].title) + ".")}</p>
      ${n < STEPS.length ? `<button class="btn btn--go" data-goto="${target}">${n === 0 ? "Start Topic 1" : "Continue"}</button>` : ""}
      <svg class="snake" viewBox="0 0 1200 90" aria-hidden="true">
        <g class="snake__g">
          <path class="snake__body" fill="none" stroke-linecap="round"
                d="M170 45 C140 22 116 68 86 45 S32 22 0 45">
            <animate attributeName="d" dur="1.5s" repeatCount="indefinite"
                     values="M170 45 C140 22 116 68 86 45 S32 22 0 45;
                             M170 45 C140 68 116 22 86 45 S32 68 0 45;
                             M170 45 C140 22 116 68 86 45 S32 22 0 45"/>
          </path>
          <path class="snake__tongue" d="M186 45 h13 m0 0 l6 -4 m-6 4 l6 4" fill="none" stroke-linecap="round"/>
          <ellipse class="snake__head" cx="174" cy="45" rx="13" ry="10"/>
          <circle class="snake__eye" cx="178" cy="41.5" r="2.1"/>
        </g>
      </svg>
    </section>

    ${isFaculty() ? `<div class="guard guard--info">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v2h-2zm0 4h2v6h-2z"/></svg>
      <span><b>Faculty preview.</b> Every topic, test and project is open. Nothing you do here
      is saved to the Sheet or kept in this browser — refresh and it all resets.</span>
    </div>` : ""}

    <div class="stats">
      <div class="stat"><b>${n}/${STEPS.length}</b><span>Steps complete</span></div>
      <div class="stat"><b>${tasksPassed}</b><span>Code tasks passed</span></div>
      <div class="stat"><b>${testRec && testRec.best != null ? testRec.best + "/" + testRec.total : "—"}</b><span>Unit test</span></div>
      <div class="stat stat--id"><b>${esc(student.id)}</b><span>Your roll number</span></div>
    </div>

    <div class="step"><span class="step__n">All</span><h3 class="step__t">Your progress</h3></div>
    <div class="prog">${STEPS.map((s, i) => progressRow(s, i)).join("")}</div>

    ${credit()}
  </div>`;

  $$("[data-goto]", $("#main")).forEach(b =>
    b.addEventListener("click", () => go({ name: "step", step: +b.dataset.goto })));
}

function progressRow(s, i) {
  const r = progress[s.id];
  const done = r && r.done;
  const open = isUnlocked(i);
  const glyph = done ? "&#10003;" : (open ? (s.kind === "topic" ? s.no : KIND_LABEL[s.kind][0]) : "&#128274;");

  let score = "", sub = "";
  if (s.kind === "topic") {
    const tasks = r ? Object.keys(r.tasks || {}).length : 0;
    sub = done ? "Complete" : (open ? "Ready to start" : "Locked");
    if (r && r.mcqTotal) score = `<b>${r.mcqScore}/${r.mcqTotal}</b>quiz`;
    if (s.data.tasks.length) score += `<span>${tasks}/${s.data.tasks.length} tasks</span>`;
  } else if (s.kind === "test") {
    sub = done ? "Passed" : (open ? "Ready — " + s.summary : "Finish every topic to unlock");
    if (r && r.best != null) score = `<b>${r.best}/${r.total}</b>attempt ${r.attempts}`;
  } else {
    sub = done ? "Submitted" : (open ? "Ready to submit" : "Pass the unit test to unlock");
    if (r && r.link) score = `<b>Sent</b>${new Date(r.at).toLocaleDateString()}`;
  }

  const cls = ["prow", done ? "is-done" : (open ? "is-open" : "")].join(" ");
  return `<button class="${cls}" data-goto="${i}" ${open ? "" : "disabled"}>
    <span class="prow__mark"><span>${glyph}</span></span>
    <span class="prow__main">
      <span class="prow__t">${esc(s.title)}</span>
      <span class="prow__s">${esc(s.unit)} &middot; ${sub}</span>
    </span>
    <span class="prow__score">${score}</span>
  </button>`;
}

/* ======================================================================
   TOPIC
   ====================================================================== */
function paintTopic(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id);

  const nb = t.notebookLM
    ? `<a class="nblink" href="${esc(t.notebookLM)}" target="_blank" rel="noopener">
         <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h13a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3z"/></svg>
         Explore this topic in NotebookLM</a>`
    : "";

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(s.unit)} &middot; Topic ${s.no}</p>
      <h2 class="thead__t">${esc(t.title)}</h2>
      <p class="thead__s">${esc(t.summary)}</p>
    </header>

    ${guardNote("everything you've done in this topic is wiped and you start it again")}

    <div class="step"><span class="step__n">01</span><h3 class="step__t">Read the concept</h3></div>
    <article class="paper">${t.notes}${nb}</article>

    <div class="step">
      <span class="step__n">02</span><h3 class="step__t">Check yourself</h3>
      <span class="step__hint">${t.mcqs.length} questions &middot; ${CONFIG.mcqPassPercent}% to clear</span>
    </div>
    <div class="quiz" id="quiz"></div>
    <div class="quizbar" id="quizbar" hidden></div>

    ${t.tasks.length ? `<div class="step">
      <span class="step__n">03</span><h3 class="step__t">${t.tasks[0].kind === "confirm" ? "Do it on your machine" : "Write the code"}</h3>
      <span class="step__hint">${t.tasks.length} task${t.tasks.length > 1 ? "s" : ""}</span>
    </div><div id="tasks"></div>` : ""}

    <div class="finish" id="finish"></div>
    ${credit()}
  </div>`;

  paintQuiz(s, r);
  paintTasks(s, r);
  paintFinish(i);
}

/* -------------------------------------------------------------- quiz */
function paintQuiz(s, r) {
  const t = s.data;
  const old = $("#quiz");
  const box = old.cloneNode(false);          // fresh node = no stale click handlers
  old.replaceWith(box);
  const answered = {};

  box.innerHTML = t.mcqs.map((m, qi) => `
    <div class="q" data-q="${qi}">
      <p class="q__t"><span class="n">Q${qi + 1}</span>${m.q}</p>
      <div class="q__opts">
        ${m.options.map((o, oi) =>
          `<button class="opt" data-q="${qi}" data-o="${oi}">
             <span class="opt__key">${String.fromCharCode(65 + oi)}</span>
             <span>${o}</span>
           </button>`).join("")}
      </div>
      <p class="q__why" hidden></p>
    </div>`).join("");

  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".opt");
    if (!btn || btn.disabled) return;
    const qi = +btn.dataset.q, oi = +btn.dataset.o;
    if (answered[qi] !== undefined) return;

    const m = t.mcqs[qi];
    answered[qi] = oi === m.answer;
    const card = box.querySelector(`.q[data-q="${qi}"]`);

    $$(".opt", card).forEach(b => {
      b.disabled = true;
      const bo = +b.dataset.o;
      if (bo === m.answer) b.classList.add("is-right");
      else if (bo === oi)  b.classList.add("is-wrong");
    });

    const why = $(".q__why", card);
    why.innerHTML = (answered[qi] ? "<strong>Correct.</strong> " : "<strong>Not this one.</strong> ") + m.why;
    why.hidden = false;

    if (Object.keys(answered).length === t.mcqs.length) settleQuiz(s, r, answered);
  });

  if (r.mcqTotal) showQuizBar(s, r.mcqScore, r.mcqTotal, r.mcqPassed, true);
}

function settleQuiz(s, r, answered) {
  const t = s.data;
  const score = Object.values(answered).filter(Boolean).length;
  const total = t.mcqs.length;
  const pass  = Math.round(score / total * 100) >= CONFIG.mcqPassPercent;

  if (score >= r.mcqScore) { r.mcqScore = score; r.mcqTotal = total; }
  if (pass) r.mcqPassed = true;
  saveProgress();

  SYNC.logProgress(student, {
    unit: s.unit, topic: t.title,
    mcqScore: score + "/" + total,
    codeStatus: "Quiz attempted",
    progression: pass ? "Quiz cleared" : "Quiz not cleared"
  });

  showQuizBar(s, score, total, pass, false);
  paintFinish(indexOf_(s.id));
  paintRail();
}

function showQuizBar(s, score, total, pass, previous) {
  const bar = $("#quizbar");
  bar.hidden = false;
  bar.innerHTML = `
    <span class="quizbar__score">${previous ? "Best so far" : "You scored"} <b>${score}/${total}</b>
      &middot; ${pass ? "cleared" : "needs " + CONFIG.mcqPassPercent + "%"}</span>
    <button class="btn btn--quiet btn--sm" id="retry">Try the quiz again</button>`;
  $("#retry").addEventListener("click", () => {
    $("#quizbar").hidden = true;
    paintQuiz(s, rec(s.id));
  });
}

/* ------------------------------------------------------------- tasks */
function paintTasks(s, r) {
  const t = s.data;
  const host = $("#tasks");
  if (!host) return;

  host.innerHTML = t.tasks.map(task => {
    const passed = !!r.tasks[task.id];
    if (task.kind === "confirm") {
      return `<div class="confirm">
        <input type="checkbox" id="c_${task.id}" data-confirm="${task.id}" ${passed ? "checked" : ""}>
        <label for="c_${task.id}">${task.label}</label>
      </div>`;
    }
    return `<section class="task ${passed ? "is-passed" : ""}" data-task="${task.id}">
      <header class="task__head">
        <h4 class="task__t">${esc(task.title)}<span class="task__pill">${passed ? "Passed" : "Not run yet"}</span></h4>
        <p class="task__b">${esc(task.brief)}</p>
      </header>
      <div class="editor">
        <div class="editor__gutter" data-gutter></div>
        <textarea class="editor__ta" spellcheck="false" data-code>${esc(task.starter || "")}</textarea>
      </div>
      <div class="taskbar">
        <button class="btn btn--go btn--sm" data-run="${task.id}">Run code</button>
        <button class="btn btn--quiet btn--sm" data-reset="${task.id}">Reset</button>
        <span class="taskbar__status" data-status></span>
      </div>
      <div class="out" data-out hidden></div>
    </section>`;
  }).join("");

  $$("[data-confirm]", host).forEach(cb => cb.addEventListener("change", () => {
    if (cb.checked) r.tasks[cb.dataset.confirm] = true; else delete r.tasks[cb.dataset.confirm];
    saveProgress();
    paintFinish(indexOf_(s.id));
    paintRail();
  }));

  $$(".task", host).forEach(sec => {
    const ta = $("[data-code]", sec);
    const gu = $("[data-gutter]", sec);
    const draw = () => {
      const n = ta.value.split("\n").length;
      gu.innerHTML = Array.from({ length: Math.max(n, 8) }, (_, k) => `<i>${k + 1}</i>`).join("");
      gu.scrollTop = ta.scrollTop;
    };
    ta.addEventListener("input", draw);
    ta.addEventListener("scroll", () => { gu.scrollTop = ta.scrollTop; });
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const a = ta.selectionStart, b = ta.selectionEnd;
        ta.value = ta.value.slice(0, a) + "    " + ta.value.slice(b);
        ta.selectionStart = ta.selectionEnd = a + 4;
        draw();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        $(`[data-run="${sec.dataset.task}"]`, sec).click();
      }
    });
    draw();
  });

  host.addEventListener("click", async (e) => {
    const resBtn = e.target.closest("[data-reset]");
    if (resBtn) {
      const task = t.tasks.find(x => x.id === resBtn.dataset.reset);
      const sec  = resBtn.closest(".task");
      const ta   = $("[data-code]", sec);
      ta.value = task.starter || "";
      ta.dispatchEvent(new Event("input"));
      $("[data-out]", sec).hidden = true;
      return;
    }
    const runBtn = e.target.closest("[data-run]");
    if (!runBtn) return;
    const task = t.tasks.find(x => x.id === runBtn.dataset.run);
    await runTask(s, r, task, runBtn.closest(".task"), runBtn);
  });
}

/* --------------------------------------------------- python in browser */
let pyPromise = null;
function bootPython() {
  if (pyPromise) return pyPromise;
  pyPromise = new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = CONFIG.pyodideUrl;
    el.onload = async () => {
      try { resolve(await loadPyodide({ indexURL: CONFIG.pyodideIndex })); }
      catch (err) { pyPromise = null; reject(err); }
    };
    el.onerror = () => { pyPromise = null; reject(new Error("The Python engine could not be downloaded. Check your internet connection and run again.")); };
    document.head.appendChild(el);
  });
  return pyPromise;
}

/* A student learning loops WILL write one that never ends. This watchdog
   traces the program and stops it after a few seconds, so the page never
   freezes and nobody loses their progress to a runaway while True. */
const WATCHDOG = `
import sys as _ab_sys, time as _ab_time

_ab_deadline = 0.0
_ab_ticks = 0
_ab_limit = 5.0

def _ab_guard(frame, event, arg):
    global _ab_ticks
    _ab_ticks += 1
    if (_ab_ticks & 1023) == 0 and _ab_time.time() > _ab_deadline:
        raise TimeoutError(
            "Your program ran for more than %d seconds and was stopped. "
            "Look for a loop that never ends - usually a counter you forgot to change."
            % int(_ab_limit))
    return _ab_guard

def _ab_run(src, ns, limit):
    global _ab_deadline, _ab_ticks, _ab_limit
    _ab_limit = limit
    _ab_deadline = _ab_time.time() + limit
    _ab_ticks = 0
    code = compile(src, "<your program>", "exec")
    _ab_sys.settrace(_ab_guard)
    try:
        exec(code, ns)
    finally:
        _ab_sys.settrace(None)
`;

let watchdogReady = false;

async function runPython(code) {
  const py = await bootPython();
  const out = [], err = [];
  py.setStdout({ batched: (x) => out.push(x) });
  py.setStderr({ batched: (x) => err.push(x) });

  /* input() works, but a loop full of them should not trap the student
     in an endless chain of pop-up boxes */
  let asked = 0;
  try {
    py.setStdin({ stdin: () => {
      if (asked++ >= 25) return "";
      return window.prompt("Your program is asking for input:") || "";
    } });
  } catch {}

  if (!watchdogReady) {
    try { await py.runPythonAsync(WATCHDOG); watchdogReady = true; } catch {}
  }

  let error = null, ns = null;
  try {
    ns = py.globals.get("dict")();
    const limit = CONFIG.runTimeoutSeconds || 5;
    const runner = watchdogReady ? py.globals.get("_ab_run") : null;
    if (runner) { runner(code, ns, limit); runner.destroy(); }
    else await py.runPythonAsync(code, { globals: ns });
  } catch (e) {
    error = String((e && e.message) || e);
  } finally {
    if (ns && ns.destroy) try { ns.destroy(); } catch {}
  }
  return { stdout: out.join("\n"), stderr: err.join("\n"), error };
}

function humanError(raw) {
  const lines = String(raw).split("\n").filter(l => !/pyodide|_pyodide|<exec>|importlib|_ab_run|_ab_guard|settrace/i.test(l));
  return lines.join("\n").trim() || String(raw).trim();
}

function evaluate(task, source, stdout) {
  return (task.checks || []).map(c => {
    let ok = false, label = "";
    switch (c.type) {
      case "stdoutEquals":
        ok = tidy(stdout) === tidy(c.value);
        label = `Output is exactly: ${c.value.split("\n")[0]}${c.value.includes("\n") ? " …" : ""}`;
        break;
      case "stdoutContains":
        ok = tidy(stdout).includes(tidy(c.value));
        label = `Output contains: ${c.value}`;
        break;
      case "stdoutRegex":
        ok = new RegExp(c.pattern, c.flags || "m").test(tidy(stdout));
        label = c.message || "Output has the right shape";
        break;
      case "stdoutMinLines":
        ok = tidy(stdout).split("\n").filter(l => l.trim()).length >= c.value;
        label = c.message || `Prints at least ${c.value} lines`;
        break;
      case "sourceIncludes":
        ok = source.includes(c.value);
        label = c.message || `Code uses ${c.value}`;
        break;
      case "sourceRegex":
        ok = new RegExp(c.pattern, "m").test(source);
        label = c.message || "Code matches the required pattern";
        break;
      case "sourceMinMatches":
        ok = (source.match(new RegExp(c.pattern, "gm")) || []).length >= c.count;
        label = c.message || `Code contains at least ${c.count} of the required pattern`;
        break;
      default:
        ok = true; label = "Checked";
    }
    return { ok, label };
  });
}

async function runTask(s, r, task, sec, btn) {
  const code   = $("[data-code]", sec).value;
  const outBox = $("[data-out]", sec);
  const status = $("[data-status]", sec);

  btn.disabled = true;
  status.innerHTML = '<span class="spin"></span> Starting Python…';
  outBox.hidden = false;
  outBox.innerHTML = '<span class="out__k">Terminal</span>Running…';

  let res;
  try {
    res = await runPython(code);
  } catch (err) {
    outBox.innerHTML = `<span class="out__k">Terminal</span><span class="out__err">${esc(err.message)}</span>`;
    status.textContent = "";
    btn.disabled = false;
    return;
  }

  const printed = res.stdout || "";
  let html = `<span class="out__k">Terminal</span>${printed ? esc(printed) : "(your program printed nothing)"}`;
  if (res.error) html += `\n<span class="out__err">${esc(humanError(res.error))}</span>`;
  else if (res.stderr) html += `\n<span class="out__err">${esc(res.stderr)}</span>`;

  const checks = res.error ? [] : evaluate(task, code, printed);
  const passed = !res.error && checks.length > 0 && checks.every(c => c.ok);

  if (checks.length) {
    html += `<ul class="checks">${checks.map(c =>
      `<li><b class="${c.ok ? "ok" : "no"}">${c.ok ? "&#10003;" : "&#10007;"}</b><span>${esc(c.label)}</span></li>`
    ).join("")}</ul>`;
  }
  outBox.innerHTML = html;

  const wasPassed = !!r.tasks[task.id];
  if (passed) {
    r.tasks[task.id] = true;
    sec.classList.add("is-passed");
    $(".task__pill", sec).textContent = "Passed";
    status.textContent = "All checks passed";
    saveProgress();
    if (!wasPassed) {
      toast("Task passed — nice.");
      SYNC.logProgress(student, {
        unit: s.unit, topic: s.title,
        mcqScore: r.mcqTotal ? r.mcqScore + "/" + r.mcqTotal : "",
        codeStatus: "Passed: " + task.title,
        progression: "Task cleared"
      });
    }
  } else {
    status.textContent = res.error ? "Python reported an error" : "Not passing yet";
  }

  btn.disabled = false;
  paintFinish(indexOf_(s.id));
  paintRail();
}

/* ---------------------------------------------------------- completion */
function paintFinish(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id);
  const tasksDone = t.tasks.every(x => r.tasks[x.id]);
  const complete  = r.mcqPassed && tasksDone;
  const box = $("#finish");
  if (!box) return;

  if (complete && !r.done) {
    r.done = true;
    saveProgress();
    SYNC.logProgress(student, {
      unit: s.unit, topic: t.title,
      mcqScore: r.mcqScore + "/" + r.mcqTotal,
      codeStatus: "All tasks passed",
      progression: i + 1 < STEPS.length ? STEPS[i + 1].title + " unlocked" : "Unit complete"
    });
    toast("Topic complete.");
  }

  const nextStep = STEPS[i + 1];
  box.className = "finish" + (complete ? " is-done" : "");
  box.innerHTML = complete
    ? `<div>
         <h4 class="finish__t">Topic ${s.no} cleared.</h4>
         <p class="finish__s">${nextStep ? esc(nextStep.title) + " is now open." : "That's everything live in this unit."}</p>
       </div>
       ${nextStep ? `<button class="btn btn--go" data-next="${i + 1}">Open ${esc(KIND_LABEL[nextStep.kind])}</button>`
                  : '<button class="btn btn--quiet" data-home>Back to your progress</button>'}`
    : `<div>
         <h4 class="finish__t">Still to do</h4>
         <p class="finish__s">${[
             r.mcqPassed ? null : "clear the quiz",
             tasksDone ? null : (t.tasks.length ? "pass every task above" : null)
           ].filter(Boolean).join(", ") || "nothing — you're done"}.</p>
       </div>`;

  const nb = $("[data-next]", box); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
  const hb = $("[data-home]", box); if (hb) hb.addEventListener("click", () => go({ name: "dashboard" }));
}

/* ======================================================================
   UNIT TEST
   ====================================================================== */
const exam = { running: false, answers: {}, endsAt: 0, timerId: null, result: null };

function resetExam() {
  exam.running = false; exam.answers = {}; exam.endsAt = 0; exam.result = null;
  if (exam.timerId) { clearInterval(exam.timerId); exam.timerId = null; }
}

function paintTest(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id);
  const total = totalMarks(t);
  const need  = Math.ceil(total * CONFIG.testPassPercent / 100);

  /* 1. results screen, straight after submitting */
  if (exam.result) return paintTestResult(i);

  /* 2. already passed earlier, and not currently sitting it */
  if (!exam.running && r.done) {
    const nextStep = STEPS[i + 1];
    $("#main").innerHTML = `<div class="wrap">
      <header class="thead">
        <p class="thead__k">${esc(s.unit)} &middot; Test</p>
        <h2 class="thead__t">${esc(t.title)}</h2>
      </header>
      <div class="result is-pass">
        <div class="result__big">${r.best}<span>/${r.total}</span></div>
        <div>
          <h4 class="result__t">Passed</h4>
          <p class="result__s">Best of ${r.attempts} attempt${r.attempts > 1 ? "s" : ""}. You needed ${need}.</p>
        </div>
        <button class="btn btn--quiet" id="retake">Sit it again</button>
      </div>
      ${nextStep ? `<div class="finish is-done">
        <div><h4 class="finish__t">Next</h4><p class="finish__s">${esc(nextStep.title)}</p></div>
        <button class="btn btn--go" data-next="${i + 1}">Open it</button></div>` : ""}
      ${credit()}
    </div>`;
    $("#retake").addEventListener("click", () => startExam(i));
    const nb = $("[data-next]"); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
    return;
  }

  /* 3. the briefing, before the clock starts */
  if (!exam.running) {
    $("#main").innerHTML = `<div class="wrap">
      <header class="thead">
        <p class="thead__k">${esc(s.unit)} &middot; Test</p>
        <h2 class="thead__t">${esc(t.title)}</h2>
        <p class="thead__s">${t.questions.length} questions &middot; ${t.marksPerQuestion} marks each &middot; ${total} marks total</p>
      </header>

      <article class="paper">
        <h4>Before you start</h4>
        <ul>
          <li>You have <strong>${t.durationMinutes} minutes</strong>. The clock starts when you press the button and does not pause.</li>
          <li>You need <strong>${need} out of ${total}</strong> (${CONFIG.testPassPercent}%) to pass.</li>
          <li>No feedback until you submit. You can change any answer before then.</li>
          <li>Unanswered questions score zero, so guess rather than leave a blank.</li>
          ${CONFIG.focusGuard ? "<li><strong>Do not leave this tab.</strong> Switching away, minimising, or opening another window submits the test immediately, with whatever you have answered so far.</li>" : ""}
          <li>Reloading the page abandons the attempt and starts you over.</li>
        </ul>
        ${r.attempts ? `<div class="callout"><strong>Previous attempts:</strong> ${r.attempts}. Best so far ${r.best}/${r.total}.</div>` : ""}
      </article>

      <div class="finish">
        <div><h4 class="finish__t">Ready?</h4><p class="finish__s">Sit somewhere quiet and give it ${t.durationMinutes} clear minutes.</p></div>
        <button class="btn btn--go" id="startExam">Start the test</button>
      </div>
      ${credit()}
    </div>`;
    $("#startExam").addEventListener("click", () => startExam(i));
    return;
  }

  /* 4. the paper itself */
  $("#main").innerHTML = `<div class="wrap">
    <div class="exam__bar">
      <span class="exam__clock" id="clock">--:--</span>
      <span class="exam__meta" id="answeredCount">0 / ${t.questions.length} answered</span>
      <button class="btn btn--go btn--sm" id="submitExam">Submit test</button>
    </div>
    ${guardNote("the test is submitted on the spot with whatever you have answered")}
    <div id="examQs">
      ${t.questions.map((q, qi) => `
        <div class="eq is-unanswered" data-q="${qi}">
          <p class="eq__t"><span class="eq__n">Q${qi + 1}</span><span>${q.q}</span><span class="eq__m">${t.marksPerQuestion} marks</span></p>
          <div class="eq__opts">
            ${q.options.map((o, oi) =>
              `<button class="opt" data-q="${qi}" data-o="${oi}">
                 <span class="opt__key">${String.fromCharCode(65 + oi)}</span><span>${o}</span>
               </button>`).join("")}
          </div>
        </div>`).join("")}
    </div>
    <div class="finish"><div><h4 class="finish__t">That's all ${t.questions.length}</h4>
      <p class="finish__s">Check anything you skipped, then submit.</p></div>
      <button class="btn btn--go" id="submitExam2">Submit test</button></div>
  </div>`;

  $("#examQs").addEventListener("click", (e) => {
    const b = e.target.closest(".opt");
    if (!b) return;
    const qi = +b.dataset.q;
    exam.answers[qi] = +b.dataset.o;
    const card = $(`.eq[data-q="${qi}"]`);
    $$(".opt", card).forEach(x => x.classList.remove("is-chosen"));
    b.classList.add("is-chosen");
    card.classList.remove("is-unanswered");
    card.classList.add("is-answered");
    $("#answeredCount").textContent = `${Object.keys(exam.answers).length} / ${t.questions.length} answered`;
  });

  const confirmSubmit = () => {
    const left = t.questions.length - Object.keys(exam.answers).length;
    if (left && !confirm(`${left} question${left > 1 ? "s are" : " is"} still unanswered. Submit anyway?`)) return;
    finishExam("Submitted");
    render();
  };
  $("#submitExam").addEventListener("click", confirmSubmit);
  $("#submitExam2").addEventListener("click", confirmSubmit);
  tickClock();
}

function startExam(i) {
  const t = stepAt(i).data;
  resetExam();
  exam.running = true;
  exam.endsAt = Date.now() + t.durationMinutes * 60000;
  armGuard(i, true);
  render();
  exam.timerId = setInterval(tickClock, 1000);
}

function tickClock() {
  const el = $("#clock");
  if (!el) return;
  const left = Math.max(0, exam.endsAt - Date.now());
  const m = Math.floor(left / 60000), sec = Math.floor(left % 60000 / 1000);
  el.textContent = `${pad(m)}:${pad(sec)}`;
  el.classList.toggle("is-low", left < 120000);
  if (left <= 0) {
    finishExam("Time ran out");
    SYNC.flag(student, { event: "Test ran out of time", where: currentScreen(), detail: "Auto-submitted" });
    render();
  }
}

function finishExam(reason) {
  if (!exam.running) return;
  exam.running = false;
  if (exam.timerId) { clearInterval(exam.timerId); exam.timerId = null; }

  const i = guard.step >= 0 ? guard.step : view.step;
  const s = stepAt(i), t = s.data, r = rec(s.id);

  let correct = 0;
  t.questions.forEach((q, qi) => { if (exam.answers[qi] === q.answer) correct++; });

  const total = totalMarks(t);
  const score = correct * t.marksPerQuestion;
  const pct   = Math.round(score / total * 100);
  const pass  = pct >= CONFIG.testPassPercent;

  r.attempts = (r.attempts || 0) + 1;
  r.total = total;
  if (r.best == null || score > r.best) r.best = score;
  if (pass) r.done = true;
  saveProgress();

  exam.result = { score, total, pct, pass, correct, reason, answers: Object.assign({}, exam.answers) };
  armGuard(i, false);

  SYNC.logTest(student, {
    unit: s.unit, testName: t.title,
    score, total, percent: pct,
    result: pass ? "Pass" : "Fail",
    attempt: r.attempts, reason
  });
}

function paintTestResult(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id), res = exam.result;
  const need = Math.ceil(res.total * CONFIG.testPassPercent / 100);
  const nextStep = STEPS[i + 1];

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(s.unit)} &middot; Test result</p>
      <h2 class="thead__t">${esc(t.title)}</h2>
    </header>

    <div class="result ${res.pass ? "is-pass" : ""}">
      <div class="result__big">${res.score}<span>/${res.total}</span></div>
      <div>
        <h4 class="result__t">${res.pass ? "Passed" : "Not cleared"}</h4>
        <p class="result__s">${res.correct} of ${t.questions.length} correct &middot; ${res.pct}% &middot; you needed ${need}.
        ${res.reason !== "Submitted" ? "<br><strong>" + esc(res.reason) + ".</strong>" : ""}</p>
      </div>
      ${res.pass && nextStep
        ? `<button class="btn btn--go" data-next="${i + 1}">Open the project</button>`
        : `<button class="btn btn--go" id="retake">Try again</button>`}
    </div>

    <div class="step"><span class="step__n">Review</span><h3 class="step__t">Every question</h3></div>
    ${t.questions.map((q, qi) => {
      const chose = res.answers[qi];
      const right = chose === q.answer;
      return `<div class="eq">
        <p class="eq__t"><span class="eq__n">Q${qi + 1}</span><span>${q.q}</span>
          <span class="eq__m">${right ? t.marksPerQuestion : 0}/${t.marksPerQuestion}</span></p>
        <div class="eq__opts">
          ${q.options.map((o, oi) => {
            let cls = "opt";
            if (oi === q.answer) cls += " is-key";
            else if (oi === chose) cls += " is-miss";
            return `<button class="${cls}" disabled>
              <span class="opt__key">${String.fromCharCode(65 + oi)}</span><span>${o}</span></button>`;
          }).join("")}
        </div>
        ${chose === undefined ? '<p class="q__why">You left this one blank.</p>' : ""}
      </div>`;
    }).join("")}
    ${credit()}
  </div>`;

  const rb = $("#retake"); if (rb) rb.addEventListener("click", () => startExam(i));
  const nb = $("[data-next]"); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
  paintRail();
}

/* ======================================================================
   UNIT PROJECT
   ====================================================================== */
function paintProject(i) {
  const s = stepAt(i), p = s.data, r = rec(s.id);
  const nextStep = STEPS[i + 1];

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(s.unit)} &middot; Project</p>
      <h2 class="thead__t">${esc(p.title)}</h2>
      <p class="thead__s">${esc(p.summary)}</p>
    </header>

    <article class="brief">${p.brief}</article>

    ${r.done && r.link ? `
      <div class="submitted">
        <h4 class="finish__t">Submitted</h4>
        <p class="finish__s">Sent on ${new Date(r.at).toLocaleString()}.</p>
        <p><a href="${esc(r.link)}" target="_blank" rel="noopener">${esc(r.link)}</a></p>
        <div class="submit__row" style="margin-top:1rem">
          <button class="btn btn--quiet btn--sm" id="resubmit">Replace the link</button>
          ${nextStep ? `<button class="btn btn--go btn--sm" data-next="${i + 1}">Continue to ${esc(nextStep.unit)}</button>`
                     : '<button class="btn btn--go btn--sm" data-home>Back to your progress</button>'}
        </div>
      </div>`
    : `
      <div class="submit">
        <h4>Submit your project</h4>
        <p>Paste a public GitHub repository link, or a Google Drive link shared with
        "Anyone with the link". Submitting completes ${esc(s.unit)}.</p>
        <div class="submit__row">
          <input id="projLink" type="url" placeholder="https://github.com/your-name/student-id-card" spellcheck="false">
          <button class="btn btn--go" id="projSend">Submit</button>
        </div>
        <p class="submit__note" id="projNote">Open the link in a private window first. If it doesn't load there, it won't load for your teacher either.</p>
      </div>`}
    ${credit()}
  </div>`;

  const send = $("#projSend");
  if (send) send.addEventListener("click", () => submitProject(i));
  const inp = $("#projLink");
  if (inp) inp.addEventListener("keydown", (e) => { if (e.key === "Enter") submitProject(i); });

  const re = $("#resubmit");
  if (re) re.addEventListener("click", () => { r.done = false; saveProgress(); render(); });

  const nb = $("[data-next]"); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
  const hb = $("[data-home]"); if (hb) hb.addEventListener("click", () => go({ name: "dashboard" }));
}

function submitProject(i) {
  const s = stepAt(i), r = rec(s.id);
  const note = $("#projNote");
  const raw  = $("#projLink").value.trim();

  const bad = (m) => { note.textContent = m; note.classList.add("is-bad"); };

  let url;
  try { url = new URL(raw); } catch { return bad("That isn't a complete link. It should begin with https://"); }
  if (url.protocol !== "https:") return bad("Use an https:// link.");
  if (!CONFIG.projectHosts.some(h => url.hostname.endsWith(h)))
    return bad("Only GitHub or Google Drive links are accepted.");

  if (!confirm("Submit this link?\n\n" + raw + "\n\nThis completes " + s.unit + ".")) return;

  r.link = raw;
  r.at   = new Date().toISOString();
  r.done = true;
  saveProgress();

  SYNC.logProject(student, { unit: s.unit, projectName: s.title, link: raw });
  toast(s.unit + " complete.");
  render();
}

/* ======================================================================
   LEARNING WIDGETS
   Delegated once on #main, so anything dropped into a topic's notes just
   works. None of this affects a student's score — it is practice, not marks.
   ====================================================================== */
let matchPick = null;

$("#main").addEventListener("click", (e) => {
  const g = e.target.closest(".w-guess button[data-o]");   if (g) return doGuess(g);
  const f = e.target.closest(".w-flip__card");             if (f) return f.classList.toggle("is-open");
  const sp = e.target.closest(".w-spot__line button");     if (sp) return doSpot(sp);
  const m = e.target.closest(".w-match button");           if (m) return doMatch(m);
});

function doGuess(btn) {
  const box = btn.closest(".w-guess");
  if (box.classList.contains("is-done")) return;
  box.classList.add("is-done");
  const right = +box.dataset.answer;
  $$("button[data-o]", box).forEach(b => {
    b.disabled = true;
    if (+b.dataset.o === right) b.classList.add("is-right");
    else if (b === btn) b.classList.add("is-wrong");
  });
  const why = $(".w__why", box);
  if (why) why.classList.add("is-shown");
}

function doSpot(btn) {
  const box = btn.closest(".w-spot");
  if (box.classList.contains("is-done")) return;
  if (btn.hasAttribute("data-bad")) {
    box.classList.add("is-done");
    $$("button", box).forEach(b => { b.disabled = true; });
    btn.classList.add("is-right");
    const why = $(".w__why", box);
    if (why) why.classList.add("is-shown");
  } else {
    btn.classList.add("is-wrong");
    setTimeout(() => btn.classList.remove("is-wrong"), 700);
  }
}

function doMatch(btn) {
  if (btn.disabled) return;
  const box = btn.closest(".w-match");

  if (matchPick && matchPick.el === btn) {
    btn.classList.remove("is-pick");
    matchPick = null;
    return;
  }
  if (!matchPick || matchPick.box !== box || matchPick.el.parentElement === btn.parentElement) {
    if (matchPick) matchPick.el.classList.remove("is-pick");
    matchPick = { el: btn, box };
    btn.classList.add("is-pick");
    return;
  }

  const first = matchPick.el;
  first.classList.remove("is-pick");
  matchPick = null;

  if (first.dataset.pair === btn.dataset.pair) {
    [first, btn].forEach(b => { b.classList.add("is-right"); b.disabled = true; });
    if (!$$(".w-match button:not([disabled])", box).length) {
      const why = $(".w__why", box);
      if (why) why.classList.add("is-shown");
      toast("All matched.");
    }
  } else {
    [first, btn].forEach(b => b.classList.add("is-wrong"));
    setTimeout(() => [first, btn].forEach(b => b.classList.remove("is-wrong")), 650);
  }
}

/* ======================================================================
   TYPE IT YOURSELF
   One capture-phase listener on the document, so it applies to every code
   editor on the page — including ones created later when a topic is opened.
   Set ALLOW_PASTE to true if you ever want to switch this off.
   ====================================================================== */
const ALLOW_PASTE = false;

if (!ALLOW_PASTE) {
  ["paste", "copy", "cut", "drop", "dragover", "contextmenu"].forEach(evt =>
    document.addEventListener(evt, (e) => {
      const el = e.target;
      if (!el || !el.closest || !el.closest(".editor")) return;
      e.preventDefault();
      e.stopPropagation();
      if (evt === "paste") {
        toast("Type the code yourself — pasting is off here.");
        flagPaste();
      }
    }, true)
  );
}

/* one flag a minute at most, so a frustrated student doesn't fill the log */
let lastPasteFlag = 0;
function flagPaste() {
  if (!student) return;
  const now = Date.now();
  if (now - lastPasteFlag < 60000) return;
  lastPasteFlag = now;
  SYNC.flag(student, { event: "Paste blocked in the code editor", where: currentScreen(),
                      detail: "Student tried to paste code" });
}

/* ======================================================================
   ASK A DOUBT
   ====================================================================== */
const askPanel = $("#askPanel"), askLog = $("#askLog"), askInput = $("#askInput");

function bubble(role, text) {
  const d = document.createElement("div");
  d.className = "bub bub--" + role;
  d.innerHTML = role === "ai" ? mdLite(text) : esc(text);
  askLog.appendChild(d);
  askLog.scrollTop = askLog.scrollHeight;
  return d;
}

function mdLite(s) {
  let h = esc(s);
  h = h.replace(/```(?:\w+)?\n([\s\S]*?)```/g, (m, c) => `<pre><code>${c}</code></pre>`);
  h = h.replace(/`([^`\n]+)`/g, "<code>$1</code>");
  h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  h = h.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br>");
  return "<p>" + h + "</p>";
}

function openAsk() {
  askPanel.hidden = false;
  $("#askBtn").hidden = true;
  $("#askBtn").setAttribute("aria-expanded", "true");
  if (!askLog.childElementCount) {
    const where = view.name === "step" && stepAt(view.step) ? stepAt(view.step).title : COURSE[0].unit;
    bubble("sys", "Asking about " + where);
    bubble("ai", "Ask me anything from this topic — a word you didn't follow, an error message you got, or why your output looks wrong. I'll explain it, but I won't type your task answers for you.");
  }
  askInput.focus();
}
function closeAsk() {
  askPanel.hidden = true;
  $("#askBtn").hidden = !CONFIG.aiEnabled;
  $("#askBtn").setAttribute("aria-expanded", "false");
}
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !askPanel.hidden) closeAsk(); });

$("#askBtn").addEventListener("click", openAsk);
$("#askClose").addEventListener("click", closeAsk);
askInput.addEventListener("input", () => { askInput.style.height = "auto"; askInput.style.height = Math.min(askInput.scrollHeight, 112) + "px"; });
askInput.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#askForm").requestSubmit(); } });

$("#askForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = askInput.value.trim();
  if (!q) return;

  if (exam.running) {
    bubble("sys", "The helper is closed during a test.");
    askInput.value = "";
    return;
  }
  if (!API.isLive()) {
    bubble("me", q); askInput.value = "";
    bubble("sys", "The AI helper isn't connected yet. Ask your faculty to finish the Apps Script setup.");
    return;
  }

  bubble("me", q);
  chat.push({ role: "user", text: q });
  askInput.value = ""; askInput.style.height = "auto";
  $("#askSend").disabled = true;

  const thinking = bubble("ai", "…");
  thinking.innerHTML = '<span class="spin"></span>';

  const s = view.name === "step" ? stepAt(view.step) : null;
  const context = s && s.kind === "topic"
    ? `${s.unit} — Topic: ${s.title}. ${s.summary} Tasks in this topic: ${s.data.tasks.map(x => x.title).join("; ")}`
    : `${COURSE[0].unit}: ${COURSE[0].unitTitle}`;

  const res = await API.ask(student, q, context, chat);
  thinking.remove();

  if (res && res.ok && res.reply) {
    bubble("ai", res.reply);
    chat.push({ role: "model", text: res.reply });
  } else {
    bubble("sys", (res && res.error) || "No answer came back. Try once more in a moment.");
  }
  $("#askSend").disabled = false;
});

/* ======================================================================
   BOOT
   ====================================================================== */
student = loadStudent();
if (student && student.id) {
  progress = loadProgress();
  startApp();
  verifyStudent();
} else {
  $("#gate").hidden = false;
  typeShell();
  $("#regId").focus();
}

})();
