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

/* Task instructions are author-controlled course content. Escape everything,
   then restore only a few harmless inline formatting tags. This makes text
   such as <code>bool()</code> render as code instead of showing the tags. */
const inlineMarkup = (s) => esc(s == null ? "" : s)
  .replace(/&lt;(\/?)(code|strong|em)&gt;/gi, "<$1$2>");

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
let serverState = { progress: {}, tests: {}, projects: {}, summary: null };
let view     = { name: "dashboard", step: 0, facultyTab: "overview" };
let authMode = "login";
const chat   = [];

function loadStudent() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY_STUDENT) || "null");
    if (!saved || !saved.id || !saved.token) return null;
    if (!saved.expiresAt || Date.parse(saved.expiresAt) <= Date.now()) {
      localStorage.removeItem(KEY_STUDENT);
      return null;
    }
    return saved;
  } catch { return null; }
}
function saveStudent() {
  try { localStorage.setItem(KEY_STUDENT, JSON.stringify(student)); } catch {}
}
function clearStudent() {
  try { localStorage.removeItem(KEY_STUDENT); } catch {}
  student = null;
}
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(keyProgress(student.id)) || "{}"); }
  catch { return {}; }
}
function saveProgress() {
  if (isFaculty()) return;
  try { localStorage.setItem(keyProgress(student.id), JSON.stringify(progress)); } catch {}
  touchLearningDay();
  updateTopbarGame();
}
function rec(id) {
  if (!progress[id]) progress[id] = { done: false, tasks: {}, mcqScore: 0, mcqTotal: 0, mcqPassed: false };
  if (!progress[id].tasks) progress[id].tasks = {};
  return progress[id];
}

const isFaculty = () => !!student && student.role === "faculty";

const SYNC = (() => {
  const skip = () => Promise.resolve({ ok: false, faculty: true });
  return {
    isLive: () => API.isLive(),
    progress: (row) => isFaculty() ? skip() : API.logProgress(student, row),
    test: (row) => isFaculty() ? skip() : API.logTest(student, row),
    project: (row) => isFaculty() ? skip() : API.submitProject(student, row),
    heartbeat: (row) => isFaculty() ? skip() : API.heartbeat(student, row),
    beacon: (row) => isFaculty() ? false : API.beacon(student, row),
    flag: (row) => isFaculty() ? skip() : API.flag(student, row)
  };
})();

function isUnlocked(i) {
  if (isFaculty()) return true;
  if (!CONFIG.lockingEnabled || i === 0) return true;
  const prev = progress[STEPS[i - 1].id];
  return !!(prev && prev.done);
}
const doneCount = () => STEPS.filter(s => progress[s.id] && progress[s.id].done).length;

/* ------------------------------------------------------- frontend gamification
   XP, tiers, daily snacks and streaks are intentionally derived or stored in
   this browser. No API, database table or backend contract is changed. */
const DAILY_SNACKS = [
  {
    title: "Negative indexing",
    prompt: "What will this program print?",
    code: "numbers = [2, 4, 6]\\nprint(numbers[-1])",
    options: ["2", "4", "6", "IndexError"],
    answer: 2,
    why: "Index -1 points to the last item, so Python prints 6."
  },
  {
    title: "String repetition",
    prompt: "Predict the exact output.",
    code: "word = 'Py'\\nprint(word * 3)",
    options: ["Py3", "Py Py Py", "PyPyPy", "Error"],
    answer: 2,
    why: "Multiplying a string repeats it without adding spaces."
  },
  {
    title: "Loop total",
    prompt: "What is printed at the end?",
    code: "total = 0\\nfor n in [1, 2, 3]:\\n    total += n\\nprint(total)",
    options: ["3", "5", "6", "123"],
    answer: 2,
    why: "The loop adds 1 + 2 + 3, giving a final total of 6."
  },
  {
    title: "Boolean check",
    prompt: "Which value is printed?",
    code: "score = 72\\nprint(score >= 70)",
    options: ["72", "True", "False", "70"],
    answer: 1,
    why: "72 is greater than or equal to 70, so the comparison is True."
  },
  {
    title: "List length",
    prompt: "What does len() return?",
    code: "skills = ['Python', 'SQL', 'Git']\\nprint(len(skills))",
    options: ["2", "3", "9", "skills"],
    answer: 1,
    why: "The list contains three items, therefore len(skills) is 3."
  },
  {
    title: "Dictionary lookup",
    prompt: "Predict the output.",
    code: "student = {'name': 'Asha', 'level': 2}\\nprint(student['level'])",
    options: ["Asha", "level", "2", "KeyError"],
    answer: 2,
    why: "The key 'level' stores the integer 2."
  }
];

function dateStamp(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function activityKey() { return `abhyaslab.activity.${student ? student.id : "guest"}`; }
function snackKey() { return `abhyaslab.snack.${student ? student.id : "guest"}.${dateStamp()}`; }

function touchLearningDay() {
  if (!student || isFaculty()) return { streak: 0, last: "" };
  const today = dateStamp();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const previousDay = dateStamp(yesterday);
  let data = { streak: 0, last: "" };
  try { data = Object.assign(data, JSON.parse(localStorage.getItem(activityKey()) || "{}")); } catch {}
  if (data.last !== today) {
    data.streak = data.last === previousDay ? Math.max(1, Number(data.streak || 0) + 1) : 1;
    data.last = today;
    try { localStorage.setItem(activityKey(), JSON.stringify(data)); } catch {}
  }
  return data;
}

function activityState() {
  if (!student || isFaculty()) return { streak: 0, last: "" };
  try { return Object.assign({ streak: 1, last: dateStamp() }, JSON.parse(localStorage.getItem(activityKey()) || "{}")); }
  catch { return { streak: 1, last: dateStamp() }; }
}

function todaySnack() {
  const day = Math.floor(new Date(dateStamp() + "T00:00:00").getTime() / 86400000);
  return DAILY_SNACKS[Math.abs(day) % DAILY_SNACKS.length];
}

function tierForXP(xp) {
  if (xp >= 5000) return { name: "Automation Master", next: 5000, icon: "⚡" };
  if (xp >= 3000) return { name: "Python Architect", next: 5000, icon: "🏛️" };
  if (xp >= 1500) return { name: "Code Adventurer", next: 3000, icon: "🧭" };
  if (xp >= 500) return { name: "Python Voyager", next: 1500, icon: "🚀" };
  return { name: "Python Explorer", next: 500, icon: "🧪" };
}

function gamificationSnapshot() {
  let xp = 0;
  let tasks = 0;
  STEPS.forEach(s => {
    const r = progress[s.id];
    if (!r) return;
    if (s.kind === "topic") {
      const passedTasks = Object.keys(r.tasks || {}).length;
      tasks += passedTasks;
      xp += passedTasks * 45;
      if (r.mcqPassed) xp += 35;
      if (r.done) xp += 80;
    } else if (s.kind === "test" && r.done) xp += 300;
    else if (s.kind === "project" && r.done) xp += 500;
  });
  try { if (localStorage.getItem(snackKey()) === "done") xp += 25; } catch {}
  const streak = Number(activityState().streak || 1);
  const tier = tierForXP(xp);
  return { xp, tasks, streak, tier };
}

function updateTopbarGame() {
  if (!student) return;
  const game = gamificationSnapshot();
  const streak = $("#streakCount"); if (streak) streak.textContent = game.streak;
  const xp = $("#xpCount"); if (xp) xp.textContent = game.xp.toLocaleString();
  const tier = $("#tierName"); if (tier) tier.textContent = game.tier.name;
  const group = $("#topbarGame"); if (group) group.hidden = isFaculty();
}

function stepTypeOf(s) {
  if (!s) return "Topic";
  if (s.kind !== "topic") return s.kind === "test" ? "Test" : "Project";
  const id = String(s.id || "");
  const title = String(s.title || "").toLowerCase();
  if (/checkpoint/.test(id) || /checkpoint/.test(title)) return "Revision Checkpoint";
  if (/mini[-_ ]?project/.test(id) || /guided mini/.test(title)) return "Guided Mini-Project";
  return "Topic";
}

function progressSnapshot(s, r, event = "Progress updated") {
  return {
    unit: s.unit,
    stepId: s.id,
    stepType: stepTypeOf(s),
    stepName: s.title,
    mcqBest: Number(r.mcqScore || 0),
    mcqTotal: Number(r.mcqTotal || 0),
    tasksCompleted: Object.keys(r.tasks || {}).length,
    tasksTotal: (s.data.tasks || []).length,
    taskIds: Object.keys(r.tasks || {}),
    status: r.done ? "Completed" : ((r.mcqTotal || Object.keys(r.tasks || {}).length) ? "In Progress" : "Not Started"),
    lastEvent: event
  };
}

function sendProgressSnapshot(s, r, event) {
  if (isFaculty()) return Promise.resolve({ ok: false, faculty: true });
  return SYNC.progress(progressSnapshot(s, r, event));
}

function courseSchemaPayload() {
  return {
    version: typeof COURSE_META !== "undefined" ? COURSE_META.version : "",
    units: COURSE.map(unit => ({
      unit: unit.unit,
      title: unit.unitTitle,
      steps: unit.topics.map(topic => ({
        id: topic.id,
        type: stepTypeOf({ kind: "topic", id: topic.id, title: topic.title }),
        title: topic.title,
        tasksTotal: (topic.tasks || []).length
      })),
      testId: unit.test ? "test:" + unit.unit : "",
      projectId: unit.project ? "proj:" + unit.unit : ""
    }))
  };
}

function applyRemoteState(state) {
  if (!state || isFaculty()) return;
  serverState = state;

  Object.keys(state.progress || {}).forEach(stepId => {
    const p = state.progress[stepId];
    const r = rec(stepId);
    r.done = p.status === "Completed";
    r.mcqScore = Number(p.mcqBest || 0);
    r.mcqTotal = Number(p.mcqTotal || 0);
    r.mcqPassed = r.mcqTotal ? Math.round(r.mcqScore / r.mcqTotal * 100) >= CONFIG.mcqPassPercent : false;
    r.tasks = {};
    (p.taskIds || []).forEach(id => { r.tasks[id] = true; });
  });

  Object.keys(state.tests || {}).forEach(unit => {
    const t = state.tests[unit] || {};
    const id = "test:" + unit;
    if (t.resetAt && !(t.attempts || []).length) {
      delete progress[id];
      return;
    }
    if ((t.attempts || []).length || t.passed) {
      const r = rec(id);
      r.attempts = (t.attempts || []).length;
      r.best = t.best;
      r.total = t.total;
      r.done = !!t.passed;
    }
  });

  Object.keys(state.projects || {}).forEach(unit => {
    const p = state.projects[unit] || {};
    const id = "proj:" + unit;
    if (p.submissionStatus === "Reset") {
      delete progress[id];
      return;
    }
    if (p.submissionStatus) {
      const r = rec(id);
      r.done = true;
      r.link = p.url || "";
      r.at = p.submittedAt || new Date().toISOString();
      r.serverStatus = p.submissionStatus;
      r.approvedScore = p.approvedScore;
      r.facultyFeedback = p.facultyFeedback || "";
    }
  });
  saveProgress();
}

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
  SYNC.heartbeat({ sessionId: SESSION.id, minutes: SESSION.active / 60000, screen: currentScreen() });
}

/* one last ping as the tab closes */
window.addEventListener("pagehide", () => {
  if (!SESSION.id || isFaculty()) return;
  const now = Date.now();
  if (document.visibilityState === "visible") SESSION.active += now - SESSION.lastTick;
  SYNC.beacon({ sessionId: SESSION.id, minutes: SESSION.active / 60000, screen: currentScreen() });
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
    SYNC.flag({ event: "Left the tab during a test", where: s.title,
                        detail: "Test submitted automatically" });
    guard.pending = "You left the tab, so the test was submitted.";
  } else if (s.kind === "topic") {
    delete progress[s.id];
    const resetRec = rec(s.id);
    saveProgress();
    sendProgressSnapshot(s, resetRec, "Topic progress reset after leaving the tab");
    SYNC.flag({ event: "Left the tab during a topic", where: s.title,
                detail: "Topic progress cleared" });
    guard.pending = "You left the tab. This topic's progress was cleared.";
  }
});

/* ======================================================================
   WELCOME SCREEN
   ====================================================================== */
const SCRIPT_LINES = [
  { t: '# Your future starts here', cls: 'prompt', instant: true },
  { t: '\nstudent = Student(name="You", goal="Master Python")' },
  { t: '\nstudent.join_abhyas_lab()' },
  { t: '\nstudent.build_future()' },
  { t: '\n\n🚀 Status: Leveling Up...', cls: 'out', instant: true }
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
   SIGN-IN, FIRST-TIME REGISTRATION AND 24-HOUR SESSIONS
   ====================================================================== */
let authCheckTimer = null;

function setAuthMode(mode) {
  authMode = mode === "register" ? "register" : "login";
  $$('[data-auth-mode]').forEach(btn => btn.classList.toggle("is-active", btn.dataset.authMode === authMode));
  const registering = authMode === "register";
  $("#registerFields").hidden = !registering;
  $("#confirmPinField").hidden = !registering;
  $("#regName").required = registering;
  $("#regEmail").required = registering;
  $("#regSection").required = registering;
  $("#regPin2").required = registering;
  $("#authSubmit").textContent = registering ? "Create student account" : "Sign in";
  if (registering) {
    $("#regRole").value = "student";
    $("#regRole").disabled = true;
    $("#regPin").autocomplete = "new-password";
  } else {
    $("#regRole").disabled = false;
    $("#regPin").autocomplete = "current-password";
  }
  $("#regNote").textContent = registering
    ? "First-time students must enter their name, email, section and a new four-digit PIN."
    : "Your sign-in remains active for 24 hours.";
  $("#regNote").classList.remove("is-bad");
}

$$('[data-auth-mode]').forEach(btn => btn.addEventListener("click", () => setAuthMode(btn.dataset.authMode)));

async function loadSections() {
  const select = $("#regSection");
  if (!select) return;
  select.innerHTML = '<option value="">Loading sections…</option>';
  const res = await API.listSections();
  if (!res || !res.ok) {
    select.innerHTML = '<option value="">No sections available</option>';
    return;
  }
  const sections = res.sections || [];
  select.innerHTML = '<option value="">Choose your section</option>' + sections.map(s =>
    `<option value="${esc(s.name)}">${esc(s.name)}</option>`
  ).join("");
}

$("#regRole").addEventListener("change", () => {
  if (authMode === "register" && $("#regRole").value !== "student") {
    $("#regRole").value = "student";
  }
});

$("#regForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const note = $("#regNote");
  const btn = $("#authSubmit");
  const id = $("#regId").value.trim();
  const pin = $("#regPin").value.trim();
  const role = $("#regRole").value;

  note.classList.remove("is-bad");
  if (!/^[A-Za-z][A-Za-z0-9_-]{2,29}$/.test(id)) {
    note.textContent = "Enter a valid account ID without spaces.";
    note.classList.add("is-bad");
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    note.textContent = "Enter your four-digit PIN.";
    note.classList.add("is-bad");
    return;
  }

  btn.disabled = true;
  note.innerHTML = '<span class="spin"></span> Checking your account…';

  let res;
  if (authMode === "register") {
    const name = $("#regName").value.trim();
    const email = $("#regEmail").value.trim();
    const section = $("#regSection").value;
    const confirmPin = $("#regPin2").value.trim();
    if (name.length < 3 || !email || !section || pin !== confirmPin) {
      btn.disabled = false;
      note.textContent = pin !== confirmPin
        ? "The two PIN entries do not match."
        : "Complete your name, email and section.";
      note.classList.add("is-bad");
      return;
    }
    res = await API.registerStudent({ id, name, email, section, pin });
  } else {
    res = await API.login(role, id, pin);
  }
  btn.disabled = false;

  if (!res || !res.ok) {
    note.textContent = (res && res.error) || "Sign-in failed. Try again.";
    note.classList.add("is-bad");
    if (res && res.needsProfile) setAuthMode("register");
    return;
  }
  acceptAuthResponse(res);
});

function acceptAuthResponse(res) {
  const a = res.account || {};
  student = {
    id: a.id,
    name: a.name,
    email: a.email || "",
    section: a.section || "",
    role: a.role,
    status: a.status,
    token: res.token,
    expiresAt: res.expiresAt,
    since: new Date().toISOString()
  };
  saveStudent();
  progress = loadProgress();
  applyRemoteState(res.state);
  startApp();
}

function startApp() {
  $("#gate").hidden = true;
  $("#app").hidden  = false;
  $("#whoName").textContent = student.name;
  $("#whoId").textContent = student.section ? `${student.id} · ${student.section}` : student.id;
  const firstUnit = COURSE[0];
  const firstRailHeader = $(".rail__unit");
  if (firstUnit && firstRailHeader) {
    const eyebrow = $(".rail__eyebrow", firstRailHeader);
    if (eyebrow) eyebrow.textContent = firstUnit.unit;
    $("#railUnitTitle").textContent = firstUnit.unitTitle;
  }
  $("#askBtn").hidden = !CONFIG.aiEnabled;
  const tag = $("#whoTag");
  if (tag) tag.hidden = !isFaculty();
  touchLearningDay();
  updateTopbarGame();

  if (authCheckTimer) clearInterval(authCheckTimer);
  authCheckTimer = setInterval(verifyStudent, 5 * 60 * 1000);

  if (isFaculty()) {
    API.syncCourse(student, courseSchemaPayload());
    go({ name: "faculty", facultyTab: "overview" });
  } else {
    go({ name: "dashboard" });
    beginSession();
  }
}

async function verifyStudent() {
  if (!student || !student.token) return;
  const res = await API.resume(student);
  if (!res || !res.ok) {
    await logoutNow((res && res.error) || "Your session ended. Sign in again.");
    return;
  }
  student.name = res.account.name;
  student.email = res.account.email || "";
  student.section = res.account.section || "";
  student.status = res.account.status;
  student.expiresAt = res.expiresAt;
  saveStudent();
  applyRemoteState(res.state);
  if (!isFaculty()) paintRail();
}

async function logoutNow(message = "") {
  const old = student;
  if (old && old.token) API.logout(old);
  if (SESSION.timer) clearInterval(SESSION.timer);
  if (authCheckTimer) clearInterval(authCheckTimer);
  SESSION.id = null;
  clearStudent();
  $("#app").hidden = true;
  $("#gate").hidden = false;
  setAuthMode("login");
  $("#regForm").reset();
  await loadSections();
  typeShell();
  if (message) {
    $("#regNote").textContent = message;
    $("#regNote").classList.add("is-bad");
  }
  $("#regId").focus();
}

$("#logoutBtn").addEventListener("click", () => logoutNow("You have signed out."));

/* ======================================================================
   RAIL
   ====================================================================== */
const KIND_LABEL = { topic: "Topic", test: "Test", project: "Project" };

function paintRail() {
  let lastUnit = null;
  const unitMeta = new Map(COURSE.map(u => [u.unit, u]));

  const statsFor = (unitName) => {
    const items = STEPS.filter(step => step.unit === unitName);
    const done = items.filter(step => progress[step.id] && progress[step.id].done).length;
    return { done, total: items.length, percent: items.length ? done / items.length * 100 : 0 };
  };

  const courseHtml = STEPS.map((s, i) => {
    const r = progress[s.id];
    const done = r && r.done;
    const open = isUnlocked(i);
    const cur  = view.name === "step" && view.step === i;
    const next = STEPS[i + 1];
    const unitLast = !next || next.unit !== s.unit;
    const cls  = [
      "tnode",
      done ? "is-done" : (open ? "is-open" : "is-locked"),
      cur ? "is-current" : "",
      unitLast ? "is-unit-last" : ""
    ].join(" ");
    const glyph = done ? "&#10003;" : (open ? (s.kind === "topic" ? s.no : (s.kind === "test" ? "T" : "P")) : "&#128274;");
    const kicker = s.kind === "topic" ? `${esc(s.unit)} &middot; Topic ${s.no}` : `${esc(s.unit)} &middot; ${KIND_LABEL[s.kind]}`;

    let divider = "";
    if (lastUnit !== null && lastUnit !== s.unit) {
      const meta = unitMeta.get(s.unit) || { unit: s.unit, unitTitle: s.unit };
      const us = statsFor(s.unit);
      divider = `<li class="rail__unit-break" aria-label="${esc(meta.unit)}">
        <p class="rail__eyebrow">${esc(meta.unit)}</p>
        <h3 class="rail__title">${esc(meta.unitTitle)}</h3>
        <div class="rail__meter"><i style="width:${us.percent}%"></i></div>
        <p class="rail__count">${us.done} of ${us.total} complete</p>
      </li>`;
    }
    lastUnit = s.unit;

    return `${divider}<li class="${cls}">
      <span class="tnode__stamp" aria-hidden="true"><span>${glyph}</span></span>
      <button class="tnode__btn" data-goto="${i}" ${open ? "" : "disabled"}>
        <span class="tnode__k">${kicker}</span>
        <span class="tnode__t">${esc(s.title)}</span>
      </button>
    </li>`;
  }).join("");

  if (isFaculty()) {
    $(".rail__eyebrow").textContent = "Faculty";
    $("#railUnitTitle").textContent = "Section Dashboard";
    $("#railMeterFill").style.width = "100%";
    $("#railCount").textContent = "Authenticated faculty access";
    const facultyNav = [
      ["overview", "Dashboard"],
      ["students", "Students"],
      ["projects", "Project reviews"],
      ["sections", "Sections"]
    ].map(([tab, label]) => `<li class="tnode is-open ${view.name === "faculty" && view.facultyTab === tab ? "is-current" : ""}">
      <span class="tnode__stamp" aria-hidden="true"><span>F</span></span>
      <button class="tnode__btn" data-faculty-view="${tab}">
        <span class="tnode__k">Faculty console</span><span class="tnode__t">${label}</span>
      </button></li>`).join("");
    $("#railList").innerHTML = facultyNav + `<li class="rail__unit-break"><p class="rail__eyebrow">Course</p><h3 class="rail__title">Preview all learning steps</h3></li>` + courseHtml;
    return;
  }

  $("#railList").innerHTML = courseHtml;
  const first = COURSE[0];
  const firstStats = first ? statsFor(first.unit) : { done: 0, total: 0, percent: 0 };
  $("#railMeterFill").style.width = firstStats.percent + "%";
  $("#railCount").textContent = `${firstStats.done} of ${firstStats.total} complete`;
}

$("#railList").addEventListener("click", (e) => {
  const f = e.target.closest("[data-faculty-view]");
  if (f) { go({ name: "faculty", facultyTab: f.dataset.facultyView }); closeRail(); return; }
  const b = e.target.closest("[data-goto]");
  if (b) { go({ name: "step", step: +b.dataset.goto }); closeRail(); }
});

const openRail  = () => { $("#rail").classList.add("is-open"); $("#railScrim").hidden = false; $("#menuBtn").setAttribute("aria-expanded", "true"); };
const closeRail = () => { $("#rail").classList.remove("is-open"); $("#railScrim").hidden = true; $("#menuBtn").setAttribute("aria-expanded", "false"); };
$("#menuBtn").addEventListener("click", () => $("#rail").classList.contains("is-open") ? closeRail() : openRail());
$("#railScrim").addEventListener("click", closeRail);
$("#homeLink").addEventListener("click", (e) => {
  e.preventDefault();
  go(isFaculty() ? { name: "faculty", facultyTab: "overview" } : { name: "dashboard" });
});

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
  updateTopbarGame();
  if (view.name === "faculty") {
    armGuard(-1, false);
    $("#askContext").textContent = "Faculty console";
    paintFacultyConsole(view.facultyTab || "overview");
    return;
  }
  if (view.name === "dashboard") { armGuard(-1, false); paintDashboard(); $("#askContext").textContent = "Overview"; return; }

  const i = view.step, s = stepAt(i);
  if (!s) return isFaculty() ? paintFacultyConsole("overview") : paintDashboard();
  $("#askContext").textContent = s.kind === "topic" ? "Topic " + s.no : KIND_LABEL[s.kind];

  if (s.kind === "topic")   { armGuard(i, true);  return paintTopic(i); }
  if (s.kind === "test")    { armGuard(i, exam.running); return paintTest(i); }
  if (s.kind === "project") { armGuard(i, false); return paintProject(i); }
}

/* ======================================================================
   FACULTY WEBSITE DASHBOARD
   ====================================================================== */
let facultyCache = null;

function facultyNavHtml(active) {
  return `<div class="faculty-nav">
    ${[
      ["overview", "Dashboard"], ["students", "Students"],
      ["projects", "Project reviews"], ["sections", "Sections"]
    ].map(([tab, label]) => `<button type="button" data-faculty-tab="${tab}" class="${active === tab ? "is-active" : ""}">${label}</button>`).join("")}
  </div>`;
}

async function paintFacultyConsole(tab = "overview") {
  if (!isFaculty()) return go({ name: "dashboard" });
  $("#main").innerHTML = `<div class="wrap">
    <header class="thead"><p class="thead__k">Faculty console</p><h2 class="thead__t">Loading your sections…</h2></header>
    <div class="faculty-card"><span class="spin"></span> Reading the latest Sheet data.</div>
  </div>`;
  const res = await API.facultyDashboard(student);
  if (!res || !res.ok) {
    $("#main").innerHTML = `<div class="wrap"><div class="result"><div><h4 class="result__t">Faculty dashboard unavailable</h4><p class="result__s">${esc((res && res.error) || "Try again.")}</p></div></div></div>`;
    if (res && /session/i.test(res.error || "")) logoutNow(res.error);
    return;
  }
  facultyCache = res;
  renderFacultyTab(tab, res);
}

function renderFacultyTab(tab, data) {
  view.facultyTab = tab;
  let content = "";
  if (tab === "students") content = facultyStudentsHtml(data);
  else if (tab === "projects") content = facultyProjectsHtml(data);
  else if (tab === "sections") content = facultySectionsHtml(data);
  else content = facultyOverviewHtml(data);

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">Faculty console</p>
      <h2 class="thead__t">${esc(student.name)}</h2>
      <p class="thead__s">Showing students from: ${esc((data.sections || []).join(", ") || "No sections assigned yet")}</p>
    </header>
    ${facultyNavHtml(tab)}
    ${content}
    ${credit()}
  </div>`;
  bindFacultyEvents(tab, data);
}

function facultyOverviewHtml(data) {
  const s = data.summary || {};
  const cards = [
    [s.total || 0, "Students"], [s.active || 0, "Active"],
    [s.inactive || 0, "Inactive"], [s.completed || 0, "Completed"],
    [s.projectsPending || 0, "Projects awaiting approval"],
    [s.studentsNeedingAttention || 0, "Need attention"],
    [s.doubts || 0, "Doubts asked"], [s.minutes || 0, "Learning minutes"]
  ];
  const recent = (data.students || []).slice().sort((a, b) => String(b.lastSeen || "").localeCompare(String(a.lastSeen || ""))).slice(0, 10);
  return `<div class="faculty-grid">${cards.map(([value, label]) => `<div class="faculty-card"><b>${esc(value)}</b><span>${esc(label)}</span></div>`).join("")}</div>
    <div class="step"><span class="step__n">Live</span><h3 class="step__t">Recently active students</h3></div>
    ${facultyStudentTable(recent, false)}`;
}

function facultyStudentsHtml(data) {
  const sections = data.sections || [];
  return `<div class="faculty-toolbar">
    <input id="facultySearch" type="search" placeholder="Search ID, name or email">
    <select id="facultySectionFilter"><option value="">All my sections</option>${sections.map(x => `<option>${esc(x)}</option>`).join("")}</select>
    <select id="facultyStatusFilter"><option value="">All statuses</option><option>Active</option><option>Inactive</option><option>Blocked</option><option>Completed</option><option>Profile incomplete</option></select>
    <button class="btn btn--quiet btn--sm" id="facultyRefresh">Refresh</button>
  </div>
  <div id="facultyStudentTable">${facultyStudentTable(data.students || [], true)}</div>`;
}

function facultyStudentTable(rows, actions) {
  if (!rows.length) return `<div class="faculty-card"><span>No students are available in your assigned sections yet.</span></div>`;
  return `<div class="faculty-table-wrap"><table class="faculty-table">
    <thead><tr><th>Student</th><th>Section</th><th>Status</th><th>Progress</th><th>Current step</th><th>Last active</th><th>Tests / Projects</th>${actions ? "<th>Actions</th>" : ""}</tr></thead>
    <tbody>${rows.map(s => `<tr data-student-row data-search="${esc((s.id + " " + s.name + " " + s.email + " " + s.section).toLowerCase())}" data-section="${esc(s.section)}" data-status="${esc(s.status)}">
      <td><strong>${esc(s.name)}</strong><br><small>${esc(s.id)} · ${esc(s.email || "No email")}</small></td>
      <td>${esc(s.section || "—")}</td>
      <td><span class="status-chip" data-status="${esc(s.status)}">${esc(s.status)}</span></td>
      <td><div class="faculty-progress"><div class="faculty-progress__bar"><i style="width:${Math.round((s.weightedProgress || 0) * 100)}%"></i></div><small>${Math.round((s.weightedProgress || 0) * 100)}% weighted · ${s.stepsDone}/${s.stepsTotal}</small></div></td>
      <td>${esc(s.currentUnit || "—")}<br><small>${esc(s.currentStep || "Not started")}</small></td>
      <td>${s.lastSeen ? esc(new Date(s.lastSeen).toLocaleString()) : "—"}</td>
      <td><small>${esc(s.testSummary || "").replace(/\n/g, "<br>")}<br>${esc(s.projectSummary || "").replace(/\n/g, "<br>")}</small></td>
      ${actions ? `<td><div class="actions">
        <button class="is-primary" data-view-student="${esc(s.id)}">View</button>
        ${s.status === "Blocked" ? `<button data-student-action="Unblock" data-id="${esc(s.id)}">Unblock</button>` : `<button data-student-action="Block" data-id="${esc(s.id)}">Block</button>`}
        <button data-student-action="Reset Test" data-id="${esc(s.id)}">Reset test</button>
        <button data-student-action="Reset Project" data-id="${esc(s.id)}">Reset project</button>
        <button class="is-danger" data-student-action="Delete Permanently" data-id="${esc(s.id)}">Delete</button>
      </div></td>` : ""}
    </tr>`).join("")}</tbody>
  </table></div>`;
}

function facultyProjectsHtml(data) {
  const rows = data.pendingProjects || [];
  if (!rows.length) return `<div class="faculty-card"><b>0</b><span>No project submissions are waiting for approval.</span></div>`;
  return `<div class="faculty-table-wrap"><table class="faculty-table">
    <thead><tr><th>Student</th><th>Unit / Project</th><th>Submission</th><th>AI suggestion</th><th>Review</th></tr></thead>
    <tbody>${rows.map(p => `<tr>
      <td><strong>${esc(p.studentName)}</strong><br><small>${esc(p.studentId)} · ${esc(p.section)}</small></td>
      <td>${esc(p.unit)}<br><small>${esc(p.projectName)}</small></td>
      <td><a href="${esc(p.url)}" target="_blank" rel="noopener">Open ${esc(p.submissionType || "submission")}</a><br><small>${esc(p.fileName || "")}</small></td>
      <td><strong>${p.suggestedScore === "" || p.suggestedScore == null ? "—" : esc(p.suggestedScore + "/100")}</strong><br><small>${esc(p.aiSummary || p.aiStatus || "")}</small></td>
      <td><button class="btn btn--go btn--sm" data-approve-project data-id="${esc(p.studentId)}" data-unit="${esc(p.unit)}" data-score="${esc(p.suggestedScore === "" ? 0 : p.suggestedScore)}">Approve / edit score</button></td>
    </tr>`).join("")}</tbody>
  </table></div>`;
}

function facultySectionsHtml(data) {
  return `<div class="faculty-card">
    <h3>Create or join a section</h3>
    <p>Create a section once. It immediately appears in first-time student registration and in your faculty filters.</p>
    <div class="faculty-toolbar"><input id="newSectionName" placeholder="Example: Section A"><button class="btn btn--go btn--sm" id="createSectionBtn">Create / assign</button></div>
    <p><strong>Your sections:</strong> ${esc((data.sections || []).join(", ") || "None yet")}</p>
  </div>`;
}

function bindFacultyEvents(tab, data) {
  $$('[data-faculty-tab]', $("#main")).forEach(btn => btn.addEventListener("click", () => go({ name: "faculty", facultyTab: btn.dataset.facultyTab })));
  const refresh = $("#facultyRefresh");
  if (refresh) refresh.addEventListener("click", () => paintFacultyConsole(tab));

  const filter = () => {
    const q = String($("#facultySearch")?.value || "").trim().toLowerCase();
    const section = $("#facultySectionFilter")?.value || "";
    const status = $("#facultyStatusFilter")?.value || "";
    $$('[data-student-row]').forEach(row => {
      row.hidden = !!((q && !row.dataset.search.includes(q)) || (section && row.dataset.section !== section) || (status && row.dataset.status !== status));
    });
  };
  [$("#facultySearch"), $("#facultySectionFilter"), $("#facultyStatusFilter")].filter(Boolean).forEach(el => el.addEventListener("input", filter));

  $$('[data-view-student]', $("#main")).forEach(btn => btn.addEventListener("click", () => openFacultyStudent(btn.dataset.viewStudent)));
  $$('[data-student-action]', $("#main")).forEach(btn => btn.addEventListener("click", () => runFacultyStudentAction(btn.dataset.studentAction, btn.dataset.id)));
  $$('[data-approve-project]', $("#main")).forEach(btn => btn.addEventListener("click", () => approveFacultyProject(btn.dataset.id, btn.dataset.unit, btn.dataset.score)));

  const create = $("#createSectionBtn");
  if (create) create.addEventListener("click", async () => {
    const name = $("#newSectionName").value.trim();
    if (!name) return toast("Enter a section name.");
    create.disabled = true;
    const res = await API.createSection(student, name);
    create.disabled = false;
    if (!res || !res.ok) return toast((res && res.error) || "Section was not created.");
    await loadSections();
    toast("Section is ready.");
    paintFacultyConsole("sections");
  });
}

async function openFacultyStudent(studentId) {
  $("#main").innerHTML = `<div class="wrap"><div class="faculty-card"><span class="spin"></span> Loading student details…</div></div>`;
  const res = await API.facultyStudent(student, studentId);
  if (!res || !res.ok) return toast((res && res.error) || "Student details could not be loaded.");
  const s = res.student;
  $("#main").innerHTML = `<div class="wrap">
    <button class="btn btn--quiet btn--sm" id="backFacultyStudents">← Back to students</button>
    <header class="thead"><p class="thead__k">${esc(s.section)}</p><h2 class="thead__t">${esc(s.name)}</h2><p class="thead__s">${esc(s.id)} · ${esc(s.email)}</p></header>
    <div class="faculty-detail">
      <section><h4>Progress</h4><dl><dt>Status</dt><dd>${esc(s.status)}</dd><dt>Weighted progress</dt><dd>${Math.round((s.weightedProgress || 0) * 100)}%</dd><dt>Steps</dt><dd>${s.stepsDone}/${s.stepsTotal}</dd><dt>Current</dt><dd>${esc(s.currentUnit || "—")} — ${esc(s.currentStep || "Not started")}</dd><dt>Unit summary</dt><dd>${esc(s.unitSummary || "")}</dd></dl></section>
      <section><h4>Engagement</h4><dl><dt>Last active</dt><dd>${s.lastSeen ? esc(new Date(s.lastSeen).toLocaleString()) : "—"}</dd><dt>Minutes</dt><dd>${esc(s.minutes)}</dd><dt>Sessions</dt><dd>${esc(s.sessions)}</dd><dt>Doubts</dt><dd>${esc(s.doubts)}</dd><dt>Integrity flags</dt><dd>${esc(s.flags)}</dd></dl></section>
      <section><h4>Tests</h4><dl>${Object.keys(s.tests || {}).map(unit => `<dt>${esc(unit)}</dt><dd>${esc((s.tests[unit].attempts || []).length ? `${s.tests[unit].best}/${s.tests[unit].total} · ${s.tests[unit].passed ? "Pass" : "Not cleared"}` : "Not attempted")}</dd>`).join("") || "<dd>No test attempts yet.</dd>"}</dl></section>
      <section><h4>Projects</h4><dl>${Object.keys(s.projects || {}).map(unit => `<dt>${esc(unit)}</dt><dd>${esc(s.projects[unit].submissionStatus || "Not submitted")}${s.projects[unit].approvedScore !== undefined && s.projects[unit].approvedScore !== "" ? ` · ${esc(s.projects[unit].approvedScore)}/100` : ""}</dd>`).join("") || "<dd>No project submissions yet.</dd>"}</dl></section>
    </div>${credit()}
  </div>`;
  $("#backFacultyStudents").addEventListener("click", () => go({ name: "faculty", facultyTab: "students" }));
}

async function runFacultyStudentAction(operation, studentId) {
  let unit = "";
  let confirmation = "";
  if (operation === "Reset Test" || operation === "Reset Project") {
    unit = prompt("Type the unit exactly, for example Unit 1:", "Unit 1") || "";
    if (!unit) return;
  }
  if (operation === "Delete Permanently") {
    confirmation = prompt(`Type ${studentId} to permanently delete this student:`, "") || "";
    if (!confirmation) return;
  } else if (!confirm(`${operation} ${studentId}?`)) return;

  const res = await API.studentAction(student, studentId, operation, unit, confirmation);
  if (!res || !res.ok) return toast((res && res.error) || "The action failed.");
  toast(res.result || "Action completed.");
  paintFacultyConsole("students");
}

async function approveFacultyProject(studentId, unit, suggested) {
  const scoreText = prompt("Approved score out of 100:", String(suggested || 0));
  if (scoreText == null) return;
  const score = Number(scoreText);
  if (!Number.isFinite(score) || score < 0 || score > 100) return toast("Use a score from 0 to 100.");
  const feedback = prompt("Faculty feedback visible to the student:", "Reviewed and approved.");
  if (feedback == null) return;
  const res = await API.approveProject(student, studentId, unit, score, feedback);
  if (!res || !res.ok) return toast((res && res.error) || "Approval failed.");
  toast("Project score approved.");
  paintFacultyConsole("projects");
}

/* ======================================================================
   DASHBOARD
   ====================================================================== */
function paintDashboard() {
  const n = doneCount();
  const nextIdx = STEPS.findIndex((s, i) => isUnlocked(i) && !(progress[s.id] && progress[s.id].done));
  const target = nextIdx === -1 ? Math.max(0, STEPS.length - 1) : nextIdx;
  const current = STEPS[target];
  const first = esc(student.name.split(" ")[0]);
  const percent = STEPS.length ? Math.round(n / STEPS.length * 100) : 0;
  const game = gamificationSnapshot();
  const snack = todaySnack();
  let snackDone = false;
  try { snackDone = localStorage.getItem(snackKey()) === "done"; } catch {}

  const tasksPassed = STEPS.reduce((a, s) =>
    a + (s.kind === "topic" && progress[s.id] ? Object.keys(progress[s.id].tasks || {}).length : 0), 0);
  const testsPassed = STEPS.filter(s => s.kind === "test" && progress[s.id] && progress[s.id].done).length;
  const projectsDone = STEPS.filter(s => s.kind === "project" && progress[s.id] && progress[s.id].done).length;

  const stageNames = ["The Origin", "The Muscle", "The Architecture", "The Playground"];
  const stageIcons = ["01", "02", "03", "04"];
  const questMap = COURSE.map((unit, ui) => {
    const indices = STEPS.map((step, i) => step.unit === unit.unit ? i : -1).filter(i => i >= 0);
    const completed = indices.filter(i => progress[STEPS[i].id] && progress[STEPS[i].id].done).length;
    const unitPercent = indices.length ? Math.round(completed / indices.length * 100) : 0;
    const openIndex = indices.find(i => isUnlocked(i) && !(progress[STEPS[i].id] && progress[STEPS[i].id].done));
    const goIndex = openIndex == null ? indices[0] : openIndex;
    const unlocked = indices.some(i => isUnlocked(i));
    const done = indices.length > 0 && completed === indices.length;
    return `<button class="quest ${done ? "is-complete" : (unlocked ? "is-open" : "is-locked")}" ${unlocked ? `data-goto="${goIndex}"` : "disabled"}>
      <span class="quest__badge">${done ? "✓" : stageIcons[ui] || String(ui + 1).padStart(2, "0")}</span>
      <span class="quest__body">
        <span class="quest__level">Level ${ui + 1} · ${esc(stageNames[ui] || "Skill Mission")}</span>
        <strong>${esc(unit.unitTitle)}</strong>
        <span>${completed} of ${indices.length} missions complete</span>
        <span class="quest__bar"><i style="width:${unitPercent}%"></i></span>
      </span>
      <span class="quest__percent">${unlocked ? unitPercent + "%" : "🔒"}</span>
    </button>`;
  }).join("");

  $("#main").innerHTML = `<div class="wrap wrap--wide">
    <section class="mission-hero">
      <div class="mission-hero__content">
        <div class="hero__k">${CONFIG.institution ? esc(CONFIG.institution) + " &middot; " : ""}${esc(CONFIG.courseName)}${isFaculty() ? " &middot; Faculty preview" : ""}</div>
        <div class="mission-hero__eyebrow"><span></span>${n === STEPS.length ? "All current missions cleared" : "Your next Python mission is ready"}</div>
        <h2>${n === 0 ? "Your Python journey starts now, " + first + "." : "Keep building momentum, " + first + "."}</h2>
        <p>${n === STEPS.length
          ? "You have completed every mission currently available. Revisit a topic, sharpen your code, or prepare for the next unit."
          : `You have cleared <strong>${n} of ${STEPS.length}</strong> learning missions. Your next challenge is <strong>${esc(current ? current.title : "Python practice")}</strong>.`}</p>
        <div class="mission-hero__actions">
          ${n < STEPS.length ? `<button class="btn btn--go btn--mission" data-goto="${target}">⚡ ${n === 0 ? "Start Day 1 Mission" : "Continue Current Mission"}</button>` : ""}
          <button class="btn btn--ghost" type="button" data-scroll-quests>🎯 Explore Skill Map</button>
        </div>
        <div class="mission-hero__chips">
          <span>🔥 ${game.streak}-day streak</span><span>⭐ ${game.xp.toLocaleString()} XP</span><span>${game.tier.icon} ${esc(game.tier.name)}</span>
        </div>
      </div>
      <div class="mission-orbit" aria-label="${percent}% of course complete" style="--p:${percent}">
        <div class="mission-orbit__inner"><strong>${percent}%</strong><span>course<br>complete</span></div>
        <i class="orbit-dot orbit-dot--one"></i><i class="orbit-dot orbit-dot--two"></i>
      </div>
      <div class="hero-grid" aria-hidden="true"></div>
    </section>

    ${isFaculty() ? `<div class="guard guard--info">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v2h-2zm0 4h2v6h-2z"/></svg>
      <span><b>Faculty preview.</b> Every topic, test and project is open. Preview actions are not saved.</span>
    </div>` : ""}

    <section class="dashboard-grid dashboard-grid--top">
      <article class="daily-snack ${snackDone ? "is-complete" : ""}" id="dailySnack">
        <div class="daily-snack__head">
          <div><span class="panel-kicker">Daily Code Snack · +25 XP</span><h3>One minute. One Python win.</h3></div>
          <span class="daily-snack__status">${snackDone ? "✓ Completed today" : "Fresh today"}</span>
        </div>
        <p class="daily-snack__prompt"><strong>${esc(snack.title)}:</strong> ${esc(snack.prompt)}</p>
        <pre><code>${esc(snack.code.replace(/\\n/g, "\n"))}</code></pre>
        <div class="snack-options">
          ${snack.options.map((option, i) => `<button type="button" data-snack-option="${i}" ${snackDone ? "disabled" : ""}>${String.fromCharCode(65 + i)}. ${esc(option)}</button>`).join("")}
        </div>
        <p class="snack-feedback" id="snackFeedback">${snackDone ? esc(snack.why) : "Choose an answer to protect your daily momentum."}</p>
      </article>

      <article class="command-card">
        <span class="panel-kicker">Mission control</span>
        <h3>${current ? esc(current.title) : "Course complete"}</h3>
        <p>${current ? esc(current.summary || "Continue your next learning step.") : "Review a completed lesson or practise a coding task."}</p>
        <div class="command-card__stats">
          <div><strong>${tasksPassed}</strong><span>Code tasks</span></div>
          <div><strong>${testsPassed}</strong><span>Tests passed</span></div>
          <div><strong>${projectsDone}</strong><span>Projects</span></div>
        </div>
        ${current && n < STEPS.length ? `<button class="btn btn--quiet" data-goto="${target}">Open mission →</button>` : ""}
      </article>
    </section>

    <section class="dashboard-section" id="skillQuests">
      <div class="section-heading">
        <div><span class="panel-kicker">Visual skill tree</span><h3>Level up through the Python universe</h3></div>
        <span class="section-heading__note">Each level unlocks after the previous mission</span>
      </div>
      <div class="quest-map">${questMap}</div>
    </section>

    <section class="stats stats--premium" aria-label="Learning statistics">
      <div class="stat"><span class="stat__icon">◫</span><div><b>${n}/${STEPS.length}</b><span>Steps complete</span></div></div>
      <div class="stat"><span class="stat__icon">⌘</span><div><b>${tasksPassed}</b><span>Code tasks passed</span></div></div>
      <div class="stat"><span class="stat__icon">★</span><div><b>${game.xp.toLocaleString()}</b><span>Experience points</span></div></div>
      <div class="stat"><span class="stat__icon">↗</span><div><b>${esc(game.tier.name)}</b><span>Current tier</span></div></div>
    </section>

    <section class="dashboard-section">
      <div class="section-heading">
        <div><span class="panel-kicker">Career compass</span><h3>Why Python right now?</h3></div>
        <span class="section-heading__note">One language. Multiple career directions.</span>
      </div>
      <div class="career-grid">
        <article class="career-card"><span>🤖</span><h4>AI & Machine Learning</h4><p>Build intelligent apps, recommenders, assistants and computer-vision tools.</p><em>Python + NumPy + PyTorch</em></article>
        <article class="career-card"><span>🌐</span><h4>Backend Development</h4><p>Create APIs and production web services using FastAPI, Flask or Django.</p><em>Python + APIs + Databases</em></article>
        <article class="career-card"><span>📊</span><h4>Data Science</h4><p>Explore data, discover patterns and communicate decisions through evidence.</p><em>Pandas + SQL + Visualisation</em></article>
        <article class="career-card"><span>⚡</span><h4>Automation</h4><p>Automate files, reports, spreadsheets, browsers and repetitive workflows.</p><em>Scripts + Integrations + Time saved</em></article>
      </div>
    </section>

    <section class="dashboard-section">
      <div class="section-heading">
        <div><span class="panel-kicker">Mission history</span><h3>Your complete learning path</h3></div>
        <span class="section-heading__note">Pick any unlocked mission</span>
      </div>
      <div class="prog prog--premium">${STEPS.map((s, i) => progressRow(s, i)).join("")}</div>
    </section>

    ${credit()}
  </div>`;

  $$("[data-goto]", $("#main")).forEach(b =>
    b.addEventListener("click", () => go({ name: "step", step: +b.dataset.goto })));

  const scrollQuests = $("[data-scroll-quests]", $("#main"));
  if (scrollQuests) scrollQuests.addEventListener("click", () => $("#skillQuests").scrollIntoView({ behavior: "smooth", block: "start" }));

  $$("[data-snack-option]", $("#main")).forEach(btn => btn.addEventListener("click", () => {
    const chosen = Number(btn.dataset.snackOption);
    const feedback = $("#snackFeedback");
    if (chosen !== snack.answer) {
      btn.classList.add("is-wrong");
      feedback.textContent = "Not quite. Read the code from top to bottom and try again.";
      return;
    }
    $$("[data-snack-option]", $("#main")).forEach((option, i) => {
      option.disabled = true;
      if (i === snack.answer) option.classList.add("is-right");
    });
    try { localStorage.setItem(snackKey(), "done"); } catch {}
    $("#dailySnack").classList.add("is-complete");
    $(".daily-snack__status").textContent = "✓ Completed today";
    feedback.textContent = snack.why + " +25 XP earned.";
    updateTopbarGame();
    toast("Daily Code Snack complete — +25 XP!");
    window.dispatchEvent(new CustomEvent("abhyaslab:celebrate"));
  }));
}

function progressRow(s, i) {
  const r = progress[s.id];
  const done = r && r.done;
  const open = isUnlocked(i);
  const glyph = done ? "&#10003;" : (open ? (s.kind === "topic" ? s.no : KIND_LABEL[s.kind][0]) : "&#128274;");

  let score = "", sub = "", stepPercent = done ? 100 : 0;
  if (s.kind === "topic") {
    const tasks = r ? Object.keys(r.tasks || {}).length : 0;
    const parts = Math.max(1, (s.data.tasks || []).length + 1);
    stepPercent = done ? 100 : Math.round(((tasks + (r && r.mcqPassed ? 1 : 0)) / parts) * 100);
    sub = done ? "Mission complete" : (open ? (stepPercent ? "In progress" : "Ready to start") : "Locked");
    if (r && r.mcqTotal) score = `<b>${r.mcqScore}/${r.mcqTotal}</b><span>quiz</span>`;
    if (s.data.tasks.length) score += `<b>${tasks}/${s.data.tasks.length}</b><span>tasks</span>`;
  } else if (s.kind === "test") {
    sub = done ? "Test passed" : (open ? "Ready · " + s.summary : "Finish every topic to unlock");
    if (r && r.best != null) score = `<b>${r.best}/${r.total}</b><span>best score</span>`;
  } else {
    sub = done ? "Project submitted" : (open ? "Ready to submit" : "Pass the unit test to unlock");
    if (r && r.link) score = `<b>Sent</b><span>${new Date(r.at).toLocaleDateString()}</span>`;
  }

  const cls = ["prow", done ? "is-done" : (open ? "is-open" : "")].join(" ");
  return `<button class="${cls}" data-goto="${i}" ${open ? "" : "disabled"}>
    <span class="prow__mark"><span>${glyph}</span></span>
    <span class="prow__main">
      <span class="prow__meta">${esc(s.unit)} · ${esc(KIND_LABEL[s.kind])}</span>
      <span class="prow__t">${esc(s.title)}</span>
      <span class="prow__s">${sub}</span>
      <span class="prow__bar"><i style="width:${Math.min(100, Math.max(0, stepPercent))}%"></i></span>
    </span>
    <span class="prow__score">${score || `<b>${stepPercent}%</b><span>progress</span>`}</span>
    <span class="prow__arrow" aria-hidden="true">→</span>
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

  sendProgressSnapshot(s, r, pass ? "Quiz cleared" : "Quiz not cleared");

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
    const levelBadge = task.level
      ? `<span class="task__level">${esc(task.level)}</span>`
      : "";
    const hintHtml = (task.hints || []).length
      ? `<div class="task__hints">${task.hints.map((hint, hintIndex) =>
          `<details class="task__hint">
             <summary>Hint ${hintIndex + 1}</summary>
             <p>${inlineMarkup(hint)}</p>
           </details>`).join("")}</div>`
      : "";

    if (task.kind === "confirm") {
      return `<section class="task task--confirm ${passed ? "is-passed" : ""}">
        <header class="task__head">
          ${levelBadge}
          <h4 class="task__t">${esc(task.title || "Practical activity")}<span class="task__pill">${passed ? "Completed" : "Not completed"}</span></h4>
          ${task.brief ? `<p class="task__b">${inlineMarkup(task.brief)}</p>` : ""}
          ${hintHtml}
        </header>
        <div class="confirm">
          <input type="checkbox" id="c_${task.id}" data-confirm="${task.id}" ${passed ? "checked" : ""}>
          <label for="c_${task.id}">${inlineMarkup(task.label || "I completed this activity.")}</label>
        </div>
      </section>`;
    }

    return `<section class="task ${passed ? "is-passed" : ""}" data-task="${task.id}">
      <header class="task__head">
        ${levelBadge}
        <h4 class="task__t">${esc(task.title)}<span class="task__pill">${passed ? "Passed" : "Not run yet"}</span></h4>
        <p class="task__b">${inlineMarkup(task.brief)}</p>
        ${hintHtml}
      </header>
      <div class="editor">
        <div class="editor__top"><span><i></i><i></i><i></i><b>main.py</b></span><em>Tab inserts spaces · Ctrl/⌘ + Enter runs</em></div>
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
    sendProgressSnapshot(s, r, cb.checked ? "Practical activity completed" : "Practical activity unchecked");
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
        label = c.message || "Output matches the required pattern";
        break;
      case "stdoutMinLines":
        ok = tidy(stdout).split("\n").filter(l => l.trim()).length >= c.value;
        label = c.message || `Prints at least ${c.value} lines`;
        break;
      case "stdoutLineCount":
        ok = tidy(stdout).split("\n").filter(l => l.trim()).length === c.value;
        label = c.message || `Prints exactly ${c.value} non-empty lines`;
        break;
      case "stdoutNumberEquals": {
        const actual = Number(tidy(stdout));
        const expected = Number(c.value);
        const tolerance = Number.isFinite(Number(c.tolerance)) ? Number(c.tolerance) : 1e-9;
        ok = Number.isFinite(actual) && Number.isFinite(expected) && Math.abs(actual - expected) <= tolerance;
        label = c.message || `Numerical output equals ${c.value}`;
        break;
      }
      case "sourceIncludes":
        ok = source.includes(c.value);
        label = c.message || `Code uses ${c.value}`;
        break;
      case "sourceNotIncludes":
        ok = !source.includes(c.value);
        label = c.message || `Code does not use ${c.value}`;
        break;
      case "sourceRegex":
        ok = new RegExp(c.pattern, c.flags || "m").test(source);
        label = c.message || "Code matches the required pattern";
        break;
      case "sourceNotRegex":
        ok = !new RegExp(c.pattern, c.flags || "m").test(source);
        label = c.message || "Code avoids the blocked pattern";
        break;
      case "sourceMinMatches":
        ok = (source.match(new RegExp(c.pattern, c.flags || "gm")) || []).length >= c.count;
        label = c.message || `Code contains at least ${c.count} of the required pattern`;
        break;
      case "sourceMinNonEmptyLines":
        ok = source.split("\n").filter(l => l.trim()).length >= c.value;
        label = c.message || `Code contains at least ${c.value} non-empty lines`;
        break;
      default:
        ok = true;
        label = "Checked";
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
      sendProgressSnapshot(s, r, "Passed task: " + task.title);
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
    sendProgressSnapshot(s, r, i + 1 < STEPS.length ? STEPS[i + 1].title + " unlocked" : "Unit complete");
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
    SYNC.flag({ event: "Test ran out of time", where: currentScreen(), detail: "Auto-submitted" });
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

  SYNC.test({
    unit: s.unit, testName: t.title,
    score, total, percent: pct,
    result: pass ? "Pass" : "Fail",
    reason
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
   UNIT PROJECT — ONE SUBMISSION, LINK OR DIRECT PYTHON FILE
   ====================================================================== */
function paintProject(i) {
  const s = stepAt(i), p = s.data, r = rec(s.id);
  const nextStep = STEPS[i + 1];
  const remote = (serverState.projects || {})[s.unit] || null;
  const submitted = remote && remote.submissionStatus && remote.submissionStatus !== "Reset";

  const reviewHtml = remote ? `<div class="project-review">
    <h5>Review status: ${esc(remote.submissionStatus || remote.aiStatus || "Submitted")}</h5>
    ${remote.approvedScore !== undefined && remote.approvedScore !== "" ? `<p><strong>Approved score:</strong> ${esc(remote.approvedScore)}/100</p>` : `<p>Your AI suggestion is visible to faculty. Your official score appears here only after faculty approval.</p>`}
    ${remote.facultyFeedback ? `<p><strong>Faculty feedback:</strong> ${esc(remote.facultyFeedback)}</p>` : ""}
    ${remote.aiSummary ? `<p><strong>Review summary:</strong> ${esc(remote.aiSummary)}</p>` : ""}
    ${remote.strengths ? `<p><strong>Strengths</strong></p><div>${esc(String(remote.strengths)).replace(/\n/g, "<br>")}</div>` : ""}
    ${remote.issues ? `<p><strong>Problems found</strong></p><div>${esc(String(remote.issues)).replace(/\n/g, "<br>")}</div>` : ""}
    ${remote.improvements ? `<p><strong>Improvements</strong></p><div>${esc(String(remote.improvements)).replace(/\n/g, "<br>")}</div>` : ""}
  </div>` : "";

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(s.unit)} &middot; Project</p>
      <h2 class="thead__t">${esc(p.title)}</h2>
      <p class="thead__s">${esc(p.summary)}</p>
    </header>

    <article class="brief">${p.brief}</article>

    ${submitted ? `<div class="submitted">
      <h4 class="finish__t">Project submitted</h4>
      <p class="finish__s">Only one official submission is allowed. Faculty can reset it when another submission is required.</p>
      ${remote.url ? `<p><a href="${esc(remote.url)}" target="_blank" rel="noopener">Open submitted ${esc(remote.submissionType || "project")}</a></p>` : ""}
      ${remote.fileName ? `<p><strong>File:</strong> ${esc(remote.fileName)}</p>` : ""}
      ${reviewHtml}
      <div class="submit__row" style="margin-top:1rem">
        ${nextStep ? `<button class="btn btn--go btn--sm" data-next="${i + 1}">Continue to ${esc(nextStep.unit)}</button>`
                   : '<button class="btn btn--go btn--sm" data-home>Back to your progress</button>'}
      </div>
    </div>` : `<div class="submit">
      <h4>Submit your project once</h4>
      <p>Choose either a public GitHub/Google Drive link or upload one <code>.py</code> or <code>.ipynb</code> file. Direct files receive an automatic static AI review. The AI does not execute the program.</p>
      <div class="submit__choice">
        <section class="submit__pane">
          <h5>Option 1 — Public link</h5>
          <input id="projLink" type="url" placeholder="https://github.com/your-name/project" spellcheck="false">
          <button class="btn btn--go btn--sm" id="projLinkSend">Submit link</button>
        </section>
        <section class="submit__pane">
          <h5>Option 2 — Direct file</h5>
          <input id="projFile" type="file" accept=".py,.ipynb">
          <button class="btn btn--go btn--sm" id="projFileSend">Upload file</button>
          <p class="submit__note">Maximum size: 5 MB.</p>
        </section>
      </div>
      <p class="submit__note" id="projNote">Check everything carefully. Another submission is blocked unless faculty resets this unit project.</p>
    </div>`}
    ${credit()}
  </div>`;

  const linkBtn = $("#projLinkSend");
  if (linkBtn) linkBtn.addEventListener("click", () => submitProjectLink(i));
  const fileBtn = $("#projFileSend");
  if (fileBtn) fileBtn.addEventListener("click", () => submitProjectFile(i));
  const nb = $("[data-next]"); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
  const hb = $("[data-home]"); if (hb) hb.addEventListener("click", () => go({ name: "dashboard" }));
}

async function submitProjectLink(i) {
  const s = stepAt(i);
  const raw = $("#projLink").value.trim();
  const note = $("#projNote");
  let url;
  try { url = new URL(raw); }
  catch { note.textContent = "Enter a complete https:// link."; note.classList.add("is-bad"); return; }
  if (url.protocol !== "https:" || !CONFIG.projectHosts.some(h => url.hostname === h || url.hostname.endsWith("." + h))) {
    note.textContent = "Only secure GitHub or Google Drive links are accepted.";
    note.classList.add("is-bad");
    return;
  }
  if (!confirm(`Submit this link for ${s.unit}?\n\n${raw}\n\nYou cannot replace it unless faculty resets the project.`)) return;
  await sendProjectSubmission(i, { submissionType: "Link", link: raw });
}

async function submitProjectFile(i) {
  const s = stepAt(i);
  const file = $("#projFile").files[0];
  const note = $("#projNote");
  if (!file) { note.textContent = "Choose a .py or .ipynb file."; note.classList.add("is-bad"); return; }
  if (!/\.(py|ipynb)$/i.test(file.name)) { note.textContent = "Only .py and .ipynb files are accepted."; note.classList.add("is-bad"); return; }
  if (file.size > 5 * 1024 * 1024) { note.textContent = "The selected file is larger than 5 MB."; note.classList.add("is-bad"); return; }
  if (!confirm(`Upload ${file.name} for ${s.unit}?\n\nYou cannot replace it unless faculty resets the project.`)) return;
  note.innerHTML = '<span class="spin"></span> Reading and uploading your project…';
  const fileBase64 = await fileAsBase64(file);
  await sendProjectSubmission(i, { submissionType: "File", fileName: file.name, fileBase64 });
}

function fileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",").pop());
    reader.onerror = () => reject(new Error("The file could not be read."));
    reader.readAsDataURL(file);
  });
}

async function sendProjectSubmission(i, payload) {
  const s = stepAt(i), r = rec(s.id);
  const note = $("#projNote");
  const buttons = [$("#projLinkSend"), $("#projFileSend")].filter(Boolean);
  buttons.forEach(b => { b.disabled = true; });
  note.innerHTML = '<span class="spin"></span> Saving the official submission and preparing the review…';
  const res = await SYNC.project(Object.assign({ unit: s.unit, projectName: s.title }, payload));
  buttons.forEach(b => { b.disabled = false; });
  if (!res || !res.ok) {
    note.textContent = (res && res.error) || "The project could not be submitted.";
    note.classList.add("is-bad");
    return;
  }
  serverState.projects = serverState.projects || {};
  serverState.projects[s.unit] = res.submission;
  r.link = res.submission.url || "";
  r.at = res.submission.submittedAt || new Date().toISOString();
  r.done = true;
  r.serverStatus = res.submission.submissionStatus;
  saveProgress();
  toast(s.unit + " project submitted.");
  paintRail();
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
  SYNC.flag({ event: "Paste blocked in the code editor", where: currentScreen(),
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
(async function boot() {
  setAuthMode("login");
  await loadSections();
  student = loadStudent();
  if (student && student.id) {
    progress = loadProgress();
    const res = await API.resume(student);
    if (res && res.ok) {
      student.name = res.account.name;
      student.email = res.account.email || "";
      student.section = res.account.section || "";
      student.role = res.account.role;
      student.status = res.account.status;
      student.expiresAt = res.expiresAt;
      saveStudent();
      applyRemoteState(res.state);
      startApp();
      return;
    }
    clearStudent();
  }
  $("#gate").hidden = false;
  typeShell();
  $("#regId").focus();
})();

})();
