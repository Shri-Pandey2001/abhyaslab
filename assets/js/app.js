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

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3200);
}

/* ---------------------------------------------------------------- content */
const TOPICS = [];
COURSE.forEach(u => u.topics.forEach(t =>
  TOPICS.push(Object.assign({ unit: u.unit, unitTitle: u.unitTitle }, t))
));

const topicAt = (i) => TOPICS[i];
const indexOfId = (id) => TOPICS.findIndex(t => t.id === id);

/* ------------------------------------------------------------------ state */
const KEY_STUDENT = "abhyaslab.student";
const keyProgress = (id) => "abhyaslab.progress." + id;

let student  = null;
let progress = {};
let view     = { name: "dashboard", topic: 0 };
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
  try { localStorage.setItem(keyProgress(student.id), JSON.stringify(progress)); } catch {}
}
function rec(id) {
  if (!progress[id]) progress[id] = { mcqScore: 0, mcqTotal: 0, mcqPassed: false, tasks: {}, done: false };
  return progress[id];
}

function isUnlocked(i) {
  if (!CONFIG.lockingEnabled || i === 0) return true;
  const prev = progress[TOPICS[i - 1].id];
  return !!(prev && prev.done);
}
const doneCount = () => TOPICS.filter(t => progress[t.id] && progress[t.id].done).length;

/* ======================================================================
   WELCOME SCREEN — the shell types out the promise
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
    return;
  }
  (function step() {
    if (li >= SCRIPT_LINES.length) { $("#caret").style.display = "none"; return; }
    const part = SCRIPT_LINES[li];
    if (part.instant) {
      html += part.cls ? `<span class="${part.cls}">${esc(part.t)}</span>` : esc(part.t);
      li++; ci = 0;
      box.innerHTML = html;
      return setTimeout(step, 260);
    }
    ci++;
    const shown = part.t.slice(0, ci);
    box.innerHTML = html + `<span class="str">${esc(shown)}</span>`;
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

  if (id.length < 3)   { note.textContent = "That roll number looks too short — use the one on your ID card."; note.classList.add("is-bad"); return; }
  if (name.length < 3) { note.textContent = "Enter your full name."; note.classList.add("is-bad"); return; }

  note.classList.remove("is-bad");
  note.innerHTML = '<span class="spin"></span> Setting up your workspace…';

  student  = { id, name, since: new Date().toISOString() };
  localStorage.setItem(KEY_STUDENT, JSON.stringify(student));
  progress = loadProgress();

  API.register(student);           // logged in the background; never blocks the student
  startApp();
});

function startApp() {
  $("#gate").hidden = true;
  $("#app").hidden  = false;
  $("#whoName").textContent = student.name;
  $("#whoId").textContent   = student.id;
  $("#railUnitTitle").textContent = COURSE[0].unitTitle;
  $("#askBtn").hidden = !CONFIG.aiEnabled;
  go({ name: "dashboard" });
}

$("#signOut").addEventListener("click", () => {
  if (!confirm("Switch student? Your progress stays saved on this device under your roll number.")) return;
  localStorage.removeItem(KEY_STUDENT);
  location.reload();
});

/* ======================================================================
   RAIL
   ====================================================================== */
function paintRail() {
  const list = $("#railList");
  list.innerHTML = TOPICS.map((t, i) => {
    const r = progress[t.id];
    const done = r && r.done;
    const open = isUnlocked(i);
    const cur  = view.name === "topic" && view.topic === i;
    const cls  = ["tnode", done ? "is-done" : (open ? "is-open" : "is-locked"), cur ? "is-current" : ""].join(" ");
    const glyph = done ? "&#10003;" : (open ? String(i + 1) : "&#128274;");
    return `<li class="${cls}">
      <span class="tnode__stamp" aria-hidden="true"><span>${glyph}</span></span>
      <button class="tnode__btn" data-goto="${i}" ${open ? "" : "disabled"}>
        <span class="tnode__k">${esc(t.unit)} &middot; Topic ${i + 1}</span>
        <span class="tnode__t">${esc(t.title)}</span>
      </button>
    </li>`;
  }).join("");

  const n = doneCount();
  $("#railMeterFill").style.width = (n / TOPICS.length * 100) + "%";
  $("#railCount").textContent = `${n} of ${TOPICS.length} complete`;
}

$("#railList").addEventListener("click", (e) => {
  const b = e.target.closest("[data-goto]");
  if (b) { go({ name: "topic", topic: +b.dataset.goto }); closeRail(); }
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
  view = Object.assign({ topic: 0 }, next);
  paintRail();
  if (view.name === "dashboard") paintDashboard(); else paintTopic(view.topic);
  $("#main").scrollTop = 0;
  $("#main").focus({ preventScroll: true });
  $("#askContext").textContent = view.name === "topic" ? "Topic " + (view.topic + 1) : COURSE[0].unit;
}

/* ---------------------------------------------------------- dashboard */
function paintDashboard() {
  const n = doneCount();
  const nextIdx = TOPICS.findIndex((t, i) => isUnlocked(i) && !(progress[t.id] && progress[t.id].done));
  const target  = nextIdx === -1 ? TOPICS.length - 1 : nextIdx;
  const solved  = TOPICS.reduce((a, t) => a + (progress[t.id] ? Object.keys(progress[t.id].tasks).length : 0), 0);

  $("#main").innerHTML = `<div class="wrap">
    <section class="hero">
      <p class="hero__k">${esc(CONFIG.institution)} &middot; ${esc(CONFIG.courseName)}</p>
      <h2 class="hero__t">${n === 0 ? "Welcome, " + esc(student.name.split(" ")[0]) + "." : "Keep going, " + esc(student.name.split(" ")[0]) + "."}</h2>
      <p class="hero__s">${n === 0
        ? "Three topics stand between you and your first working Python programs. Read, answer, then write code that actually runs on this page."
        : (n === TOPICS.length
            ? "You've cleared every topic that's live right now. More are on the way."
            : "You've cleared " + n + " of " + TOPICS.length + ". Next up: " + esc(TOPICS[target].title) + ".")}</p>
      ${n < TOPICS.length ? `<button class="btn btn--go" data-goto="${target}">${n === 0 ? "Open Topic 1" : "Continue"}</button>` : ""}
    </section>

    <div class="stats">
      <div class="stat"><b>${n}/${TOPICS.length}</b><span>Topics complete</span></div>
      <div class="stat"><b>${solved}</b><span>Tasks passed</span></div>
      <div class="stat stat--id"><b>${esc(student.id)}</b><span>Your roll number</span></div>
    </div>

    <div class="step"><span class="step__n">All</span><h3 class="step__t">Topics in ${esc(COURSE[0].unit)}</h3></div>
    <div class="cards">
      ${TOPICS.map((t, i) => {
        const open = isUnlocked(i), r = progress[t.id];
        const state = r && r.done ? "Complete" : (open ? "Ready" : "Locked");
        return `<button class="card" data-goto="${i}" ${open ? "" : "disabled"}>
          <span class="card__k">Topic ${i + 1} &middot; ${state}</span>
          <h4 class="card__t">${esc(t.title)}</h4>
          <p class="card__s">${open ? esc(t.summary) : "Clear Topic " + i + " to open this."}</p>
        </button>`;
      }).join("")}
    </div>
  </div>`;

  $$("[data-goto]", $("#main")).forEach(b =>
    b.addEventListener("click", () => go({ name: "topic", topic: +b.dataset.goto })));
}

/* ------------------------------------------------------------- topic */
function paintTopic(i) {
  const t = topicAt(i);
  const r = rec(t.id);

  const nb = t.notebookLM
    ? `<a class="nblink" href="${esc(t.notebookLM)}" target="_blank" rel="noopener">
         <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h13a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3z"/></svg>
         Explore this topic in NotebookLM</a>`
    : "";

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(t.unit)} &middot; Topic ${i + 1} of ${TOPICS.length}</p>
      <h2 class="thead__t">${esc(t.title)}</h2>
      <p class="thead__s">${esc(t.summary)}</p>
    </header>

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
  </div>`;

  paintQuiz(t, r);
  paintTasks(t, r);
  paintFinish(i);
}

/* -------------------------------------------------------------- quiz */
function paintQuiz(t, r) {
  const old = $("#quiz");
  const box = old.cloneNode(false);      // fresh node = no stale click handlers
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

    if (Object.keys(answered).length === t.mcqs.length) settleQuiz(t, r, answered);
  });

  if (r.mcqTotal) {                        // already attempted earlier
    showQuizBar(t, r.mcqScore, r.mcqTotal, r.mcqPassed, true);
  }
}

function settleQuiz(t, r, answered) {
  const score = Object.values(answered).filter(Boolean).length;
  const total = t.mcqs.length;
  const pct   = Math.round(score / total * 100);
  const pass  = pct >= CONFIG.mcqPassPercent;

  if (score >= r.mcqScore) { r.mcqScore = score; r.mcqTotal = total; }
  if (pass) r.mcqPassed = true;
  saveProgress();

  API.logProgress(student, {
    unit: t.unit, topic: t.title,
    mcqScore: score + "/" + total,
    codeStatus: "Quiz attempted",
    progression: pass ? "Quiz cleared" : "Quiz not cleared"
  });

  showQuizBar(t, score, total, pass, false);
  paintFinish(indexOfId(t.id));
  paintRail();
}

function showQuizBar(t, score, total, pass, previous) {
  const bar = $("#quizbar");
  bar.hidden = false;
  bar.innerHTML = `
    <span class="quizbar__score">${previous ? "Best so far" : "You scored"} <b>${score}/${total}</b>
      &middot; ${pass ? "cleared" : "needs " + CONFIG.mcqPassPercent + "%"}</span>
    <button class="btn btn--quiet btn--sm" id="retry">Try the quiz again</button>`;
  $("#retry").addEventListener("click", () => {
    $("#quizbar").hidden = true;
    paintQuiz(t, rec(t.id));
  });
}

/* ------------------------------------------------------------- tasks */
function paintTasks(t, r) {
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
    const id = cb.dataset.confirm;
    if (cb.checked) r.tasks[id] = true; else delete r.tasks[id];
    saveProgress();
    paintFinish(indexOfId(t.id));
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
        const s = ta.selectionStart, en = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + "    " + ta.value.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 4;
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
    const runBtn = e.target.closest("[data-run]");
    const resBtn = e.target.closest("[data-reset]");
    if (resBtn) {
      const task = t.tasks.find(x => x.id === resBtn.dataset.reset);
      const sec  = resBtn.closest(".task");
      $("[data-code]", sec).value = task.starter || "";
      $("[data-code]", sec).dispatchEvent(new Event("input"));
      $("[data-out]", sec).hidden = true;
      return;
    }
    if (!runBtn) return;
    const task = t.tasks.find(x => x.id === runBtn.dataset.run);
    await runTask(t, r, task, runBtn.closest(".task"), runBtn);
  });
}

/* --------------------------------------------------- python in browser */
let pyPromise = null;
function bootPython() {
  if (pyPromise) return pyPromise;
  pyPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = CONFIG.pyodideUrl;
    s.onload = async () => {
      try { resolve(await loadPyodide({ indexURL: CONFIG.pyodideIndex })); }
      catch (err) { pyPromise = null; reject(err); }
    };
    s.onerror = () => { pyPromise = null; reject(new Error("The Python engine could not be downloaded. Check your internet connection and run again.")); };
    document.head.appendChild(s);
  });
  return pyPromise;
}

async function runPython(code) {
  const py = await bootPython();
  const out = [], err = [];
  py.setStdout({ batched: (s) => out.push(s) });
  py.setStderr({ batched: (s) => err.push(s) });
  try { py.setStdin({ stdin: () => window.prompt("Your program is asking for input:") || "" }); } catch {}

  let error = null, ns = null;
  try {
    ns = py.globals.get("dict")();
    await py.runPythonAsync(code, { globals: ns });
  } catch (e) {
    error = String((e && e.message) || e);
  } finally {
    if (ns && ns.destroy) try { ns.destroy(); } catch {}
  }
  return { stdout: out.join("\n"), stderr: err.join("\n"), error };
}

/* trim Pyodide's internal frames — students only need their own lines */
function humanError(raw) {
  const lines = String(raw).split("\n").filter(l => !/pyodide|_pyodide|<exec>|importlib/i.test(l));
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

async function runTask(t, r, task, sec, btn) {
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
      API.logProgress(student, {
        unit: t.unit, topic: t.title,
        mcqScore: r.mcqTotal ? r.mcqScore + "/" + r.mcqTotal : "",
        codeStatus: "Passed: " + task.title,
        progression: "Task cleared"
      });
    }
  } else {
    status.textContent = res.error ? "Python reported an error" : "Not passing yet";
  }

  btn.disabled = false;
  paintFinish(indexOfId(t.id));
  paintRail();
}

/* ---------------------------------------------------------- completion */
function paintFinish(i) {
  const t = topicAt(i), r = rec(t.id);
  const tasksDone = t.tasks.every(x => r.tasks[x.id]);
  const complete  = r.mcqPassed && tasksDone;
  const box = $("#finish");
  if (!box) return;

  if (complete && !r.done) {
    r.done = true;
    saveProgress();
    API.logProgress(student, {
      unit: t.unit, topic: t.title,
      mcqScore: r.mcqScore + "/" + r.mcqTotal,
      codeStatus: "All tasks passed",
      progression: i + 1 < TOPICS.length ? "Topic " + (i + 2) + " unlocked" : "Unit complete"
    });
    toast("Topic complete.");
  }

  const last = i + 1 >= TOPICS.length;
  box.className = "finish" + (complete ? " is-done" : "");
  box.innerHTML = complete
    ? `<div>
         <h4 class="finish__t">Topic ${i + 1} cleared.</h4>
         <p class="finish__s">${last ? "That's everything live in this unit. More topics are being added." : "Topic " + (i + 2) + " is now open."}</p>
       </div>
       ${last ? '<button class="btn btn--quiet" data-home>Back to all topics</button>'
              : `<button class="btn btn--go" data-next="${i + 1}">Open Topic ${i + 2}</button>`}`
    : `<div>
         <h4 class="finish__t">Still to do</h4>
         <p class="finish__s">${[
             r.mcqPassed ? null : "clear the quiz",
             tasksDone ? null : (t.tasks.length ? "pass every task above" : null)
           ].filter(Boolean).join(", ") || "nothing — you're done"}.</p>
       </div>`;

  const nb = $("[data-next]", box); if (nb) nb.addEventListener("click", () => go({ name: "topic", topic: +nb.dataset.next }));
  const hb = $("[data-home]", box); if (hb) hb.addEventListener("click", () => go({ name: "dashboard" }));
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
    const where = view.name === "topic" ? topicAt(view.topic).title : "Unit 1";
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

  const t = view.name === "topic" ? topicAt(view.topic) : null;
  const context = t
    ? `${t.unit} — Topic: ${t.title}. ${t.summary} Tasks in this topic: ${t.tasks.map(x => x.title).join("; ")}`
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
   LEARNING WIDGETS
   Delegated once on #main, so anything dropped into a topic's notes just
   works. None of this affects a student's score — it is practice, not marks.
   ====================================================================== */
let matchPick = null;

$("#main").addEventListener("click", (e) => {
  const g = e.target.closest(".w-guess button[data-o]");   if (g) return doGuess(g);
  const f = e.target.closest(".w-flip__card");             if (f) return f.classList.toggle("is-open");
  const s = e.target.closest(".w-spot__line button");      if (s) return doSpot(s);
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

  if (matchPick && matchPick.el === btn) {                 // tapped the same one again
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
      if (evt === "paste") toast("Type the code yourself — pasting is off here.");
    }, true)
  );
}

/* ======================================================================
   BOOT
   ====================================================================== */
student = loadStudent();
if (student && student.id) {
  progress = loadProgress();
  startApp();
} else {
  $("#gate").hidden = false;
  typeShell();
  $("#regId").focus();
}

})();
