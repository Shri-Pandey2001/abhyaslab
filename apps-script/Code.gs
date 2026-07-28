/**
 * AbhyasLab — backend and faculty console
 *
 * SETUP (once)
 *   1. Paste this whole file into Extensions → Apps Script on your Sheet.
 *   2. Save, then reload the Sheet. An "AbhyasLab" menu appears.
 *   3. AbhyasLab → Set up / repair tabs.
 *   4. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone.
 *
 * AFTER ANY EDIT: Deploy → Manage deployments → pencil → Version: New version → Deploy.
 *
 * Script Properties (Project Settings → Script Properties):
 *   GEMINI_API_KEY   only needed for the "Ask a doubt" panel
 *   GEMINI_MODEL     optional, defaults to gemini-2.5-flash
 */

/* ====================================================================== */
/*  TABS                                                                  */
/* ====================================================================== */

var TAB_STUDENTS  = 'Students_Master';
var TAB_ACTIVITY  = 'Activity_Log';
var TAB_TESTS     = 'Test_Results';
var TAB_PROJECTS  = 'Project_Submissions';
var TAB_DOUBTS    = 'Doubt_Log';
var TAB_SESSIONS  = 'Session_Log';
var TAB_INTEGRITY = 'Integrity_Log';
var TAB_BLOCK     = 'Blocklist';
var TAB_OVERVIEW  = 'Class_Overview';
var TAB_DASH      = 'Dashboard';
var TAB_REPORT    = 'Student_Report';

var HEAD = {};
HEAD[TAB_STUDENTS]  = ['Timestamp', 'Student ID', 'Student Name', 'Course', 'Registered On', 'Furthest Progress', 'Last Seen'];
HEAD[TAB_ACTIVITY]  = ['Timestamp', 'Student ID', 'Student Name', 'Unit', 'Topic', 'MCQ Score', 'Code Status', 'Progression'];
HEAD[TAB_TESTS]     = ['Timestamp', 'Student ID', 'Student Name', 'Unit', 'Test', 'Score', 'Out Of', 'Percent', 'Result', 'Attempt', 'How It Ended'];
HEAD[TAB_PROJECTS]  = ['Timestamp', 'Student ID', 'Student Name', 'Unit', 'Project', 'Submission Link'];
HEAD[TAB_DOUBTS]    = ['Timestamp', 'Student ID', 'Student Name', 'Topic Context', 'Question', 'Answer'];
HEAD[TAB_SESSIONS]  = ['Session ID', 'Student ID', 'Student Name', 'Started', 'Last Seen', 'Minutes', 'Last Screen'];
HEAD[TAB_INTEGRITY] = ['Timestamp', 'Student ID', 'Student Name', 'Event', 'Where', 'Detail'];
HEAD[TAB_BLOCK]     = ['Student ID', 'Blocked On', 'Reason'];

var GREEN = '#28A08F', AMBER = '#F2A03D', RED = '#CF4A3C', INK = '#141F3E', PAPER = '#EFEDE4';

/* ====================================================================== */
/*  MENU                                                                  */
/* ====================================================================== */

function onOpen() {
  SpreadsheetApp.getUi().createMenu('AbhyasLab')
    .addItem('Refresh dashboard & overview', 'refreshAll')
    .addSeparator()
    .addItem('Open a student report…', 'promptStudentReport')
    .addItem('Rebuild report for selected student', 'buildStudentReport')
    .addSeparator()
    .addItem('Delete a student (wipes all their data)', 'deleteStudentPrompt')
    .addItem('Unblock a student', 'unblockPrompt')
    .addSeparator()
    .addItem('Export class overview as CSV', 'exportOverviewCsv')
    .addItem('Set up / repair tabs', 'setUp')
    .addToUi();
}

/** Rebuild every faculty-facing view. Safe to run any time. */
function refreshAll() {
  setUp();
  var data = gather();
  buildOverview(data);
  buildDashboard(data);
  buildStudentReport();
  SpreadsheetApp.getActive().toast('Dashboard and overview refreshed.', 'AbhyasLab', 5);
}

/** Run this once, and again any time a tab gets deleted by accident. */
function setUp() {
  [TAB_STUDENTS, TAB_ACTIVITY, TAB_TESTS, TAB_PROJECTS, TAB_DOUBTS,
   TAB_SESSIONS, TAB_INTEGRITY, TAB_BLOCK].forEach(function (name) {
    sheetFor(name, HEAD[name]);
  });
  [TAB_DASH, TAB_OVERVIEW, TAB_REPORT].forEach(function (name) {
    var ss = SpreadsheetApp.getActive();
    if (!ss.getSheetByName(name)) ss.insertSheet(name);
  });
  ensureReportPicker();
}

function sheetFor(name, headers) {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
    sh.setFrozenRows(1);
  }
  return sh;
}

/* ====================================================================== */
/*  WEB APP                                                               */
/* ====================================================================== */

function doGet() {
  return json({ ok: true, service: 'AbhyasLab', message: 'Backend is live.' });
}

function doPost(e) {
  var body;
  try { body = JSON.parse(e.postData.contents); }
  catch (err) { return json({ ok: false, error: 'Request body was not valid JSON.' }); }

  try {
    switch (body.action) {
      case 'check':     return json(handleCheck(body));
      case 'register':  return json(handleRegister(body));
      case 'progress':  return json(handleProgress(body));
      case 'test':      return json(handleTest(body));
      case 'project':   return json(handleProject(body));
      case 'heartbeat': return json(handleHeartbeat(body));
      case 'flag':      return json(handleFlag(body));
      case 'ask':       return json(handleAsk(body));
      default:          return json({ ok: false, error: 'Unknown action: ' + body.action });
    }
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ---------------------------------------------------------- handlers */

function isBlocked(studentId) {
  var rows = sheetFor(TAB_BLOCK, HEAD[TAB_BLOCK]).getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (norm(rows[i][0]) === norm(studentId)) return true;
  }
  return false;
}

/** The site asks this before letting a roll number in. */
function handleCheck(b) {
  return { ok: true, blocked: isBlocked(b.studentId) };
}

function handleRegister(b) {
  if (isBlocked(b.studentId)) return { ok: false, blocked: true, error: 'This roll number has been removed by your faculty.' };

  var sh   = sheetFor(TAB_STUDENTS, HEAD[TAB_STUDENTS]);
  var now  = new Date();
  var rows = sh.getDataRange().getValues();

  for (var i = 1; i < rows.length; i++) {
    if (norm(rows[i][1]) === norm(b.studentId)) {
      sh.getRange(i + 1, 7).setValue(now);
      return { ok: true, returning: true };
    }
  }
  sh.appendRow([now, b.studentId, b.studentName, b.course || '', now, 'Topic 1', now]);
  return { ok: true, returning: false };
}

function handleProgress(b) {
  sheetFor(TAB_ACTIVITY, HEAD[TAB_ACTIVITY]).appendRow([
    new Date(), b.studentId, b.studentName,
    b.unit || '', b.topic || '', b.mcqScore || '',
    b.codeStatus || '', b.progression || ''
  ]);
  var mark = (b.progression && b.progression.indexOf('unlocked') > -1) ? b.progression : '';
  touchStudent(b.studentId, mark);
  return { ok: true };
}

function handleTest(b) {
  sheetFor(TAB_TESTS, HEAD[TAB_TESTS]).appendRow([
    new Date(), b.studentId, b.studentName,
    b.unit || '', b.testName || '',
    b.score, b.total, (b.percent || 0) / 100,
    b.result || '', b.attempt || 1, b.reason || ''
  ]);
  touchStudent(b.studentId, b.unit + ' test: ' + b.result + ' (' + b.score + '/' + b.total + ')');
  return { ok: true };
}

function handleProject(b) {
  sheetFor(TAB_PROJECTS, HEAD[TAB_PROJECTS]).appendRow([
    new Date(), b.studentId, b.studentName,
    b.unit || '', b.projectName || '', b.link || ''
  ]);
  touchStudent(b.studentId, b.unit + ' project submitted');
  return { ok: true };
}

/**
 * One row per sitting. The site pings every couple of minutes while the tab is
 * open and in front, so Minutes reflects real time on the page, not time since
 * they first logged in.
 */
function handleHeartbeat(b) {
  var sh    = sheetFor(TAB_SESSIONS, HEAD[TAB_SESSIONS]);
  var cache = CacheService.getScriptCache();
  var key   = 'sess_' + b.sessionId;
  var row   = cache.get(key);
  var now   = new Date();

  if (!row) {
    var ids = sh.getRange(1, 1, Math.max(sh.getLastRow(), 1), 1).getValues();
    for (var i = ids.length - 1; i >= 1; i--) {
      if (String(ids[i][0]) === String(b.sessionId)) { row = String(i + 1); break; }
    }
  }

  if (row) {
    var r = Number(row);
    sh.getRange(r, 5).setValue(now);
    sh.getRange(r, 6).setValue(Math.round((b.minutes || 0) * 10) / 10);
    sh.getRange(r, 7).setValue(b.screen || '');
  } else {
    sh.appendRow([b.sessionId, b.studentId, b.studentName, now, now,
                  Math.round((b.minutes || 0) * 10) / 10, b.screen || '']);
    row = String(sh.getLastRow());
  }
  cache.put(key, row, 21600);          // remember the row for six hours
  touchStudent(b.studentId, '');
  return { ok: true };
}

/** Anything worth a faculty eyebrow: tab switches, paste attempts, forced submissions. */
function handleFlag(b) {
  sheetFor(TAB_INTEGRITY, HEAD[TAB_INTEGRITY]).appendRow([
    new Date(), b.studentId, b.studentName,
    b.event || '', b.where || '', b.detail || ''
  ]);
  return { ok: true };
}

function touchStudent(studentId, progressText) {
  var sh   = sheetFor(TAB_STUDENTS, HEAD[TAB_STUDENTS]);
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (norm(rows[i][1]) === norm(studentId)) {
      if (progressText) sh.getRange(i + 1, 6).setValue(progressText);
      sh.getRange(i + 1, 7).setValue(new Date());
      return;
    }
  }
}

/* --------------------------------------------------------- AI doubts */

function handleAsk(b) {
  var props = PropertiesService.getScriptProperties();
  var key   = props.getProperty('GEMINI_API_KEY');
  if (!key) return { ok: false, error: 'The AI helper is not configured yet.' };

  var model = props.getProperty('GEMINI_MODEL') || 'gemini-2.5-flash';

  var system =
    'You are the study helper inside AbhyasLab, a beginner Python portal for first-year ' +
    'undergraduate students in India. ' +
    'Current topic context: ' + (b.context || 'Python basics') + '. ' +
    'Rules: Answer in simple English, short paragraphs, under 150 words unless the student ' +
    'asks for more. Assume the student has never programmed before; never assume prior ' +
    'knowledge of other languages. Use tiny code examples where they help, but if the ' +
    'student is asking for the answer to a practice task, do NOT write that program for ' +
    'them — explain the idea, point at the line that is wrong, or give a smaller worked ' +
    'example instead. If a question is unrelated to the course, say so briefly and steer ' +
    'back to the topic.';

  var contents = [];
  (b.history || []).forEach(function (m) {
    contents.push({ role: m.role === 'model' ? 'model' : 'user', parts: [{ text: String(m.text) }] });
  });
  if (!contents.length || contents[contents.length - 1].parts[0].text !== b.question) {
    contents.push({ role: 'user', parts: [{ text: String(b.question) }] });
  }

  var url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
            encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key);

  var res = UrlFetchApp.fetch(url, {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({
      system_instruction: { parts: [{ text: system }] },
      contents: contents,
      generationConfig: { temperature: 0.4, maxOutputTokens: 600 }
    })
  });

  var data;
  try { data = JSON.parse(res.getContentText()); }
  catch (err) { return { ok: false, error: 'The AI service sent an unreadable reply.' }; }

  if (res.getResponseCode() !== 200) {
    return { ok: false, error: (data && data.error && data.error.message) || 'AI service error.' };
  }

  var reply = '';
  try { reply = data.candidates[0].content.parts.map(function (p) { return p.text || ''; }).join(''); }
  catch (err) { reply = ''; }
  if (!reply) return { ok: false, error: 'No answer came back. Try rephrasing the question.' };

  try {
    sheetFor(TAB_DOUBTS, HEAD[TAB_DOUBTS])
      .appendRow([new Date(), b.studentId, b.studentName, b.context || '', b.question, reply]);
  } catch (err) { /* logging must never break the answer */ }

  return { ok: true, reply: reply };
}

/* ====================================================================== */
/*  GATHER — read every log once, build one record per student            */
/* ====================================================================== */

function gather() {
  var rows = function (name) {
    var sh = sheetFor(name, HEAD[name]);
    var last = sh.getLastRow();
    if (last < 2) return [];
    return sh.getRange(2, 1, last - 1, HEAD[name].length).getValues();
  };

  var students = {}, order = [], topics = {}, days = {};

  rows(TAB_STUDENTS).forEach(function (r) {
    if (!r[1]) return;
    var id = norm(r[1]);
    students[id] = {
      id: r[1], name: r[2], course: r[3],
      registered: r[4], furthest: r[5], lastSeen: r[6],
      topics: {}, quiz: {}, tasks: 0, completed: 0,
      tests: [], bestTest: null, testTotal: 0, testAttempts: 0, testPassed: false,
      project: null, minutes: 0, sessions: 0,
      flags: 0, flagKinds: {}, doubts: 0, lastDoubts: []
    };
    order.push(id);
  });

  var seed = function (id) {
    if (!students[id]) {
      students[id] = { id: id, name: '(not in master list)', topics: {}, quiz: {}, tasks: 0,
        completed: 0, tests: [], bestTest: null, testTotal: 0, testAttempts: 0, testPassed: false,
        project: null, minutes: 0, sessions: 0, flags: 0, flagKinds: {}, doubts: 0, lastDoubts: [] };
      order.push(id);
    }
    return students[id];
  };

  rows(TAB_ACTIVITY).forEach(function (r) {
    if (!r[1]) return;
    var s = seed(norm(r[1])), topic = r[4];
    if (topic) {
      topics[topic] = topics[topic] || { name: topic, attempted: {}, completed: {}, scores: [] };
      topics[topic].attempted[s.id] = 1;
      s.topics[topic] = s.topics[topic] || { status: 'started', quiz: null, tasks: 0 };

      var m = String(r[5] || '').match(/^(\d+)\s*\/\s*(\d+)$/);
      if (m) {
        var pct = Number(m[1]) / Number(m[2]);
        if (s.quiz[topic] == null || pct > s.quiz[topic]) s.quiz[topic] = pct;
        s.topics[topic].quiz = m[1] + '/' + m[2];
      }
      if (String(r[6] || '').indexOf('Passed:') === 0) { s.tasks++; s.topics[topic].tasks++; }
      if (String(r[7] || '').indexOf('unlocked') > -1 || String(r[7] || '') === 'Unit complete') {
        if (s.topics[topic].status !== 'done') { s.completed++; s.topics[topic].status = 'done'; }
        topics[topic].completed[s.id] = 1;
      }
    }
    if (r[0] instanceof Date) { var d = dayKey(r[0]); days[d] = days[d] || {}; days[d][s.id] = 1; }
  });

  Object.keys(topics).forEach(function (t) {
    Object.keys(students).forEach(function (id) {
      if (students[id].quiz[t] != null) topics[t].scores.push(students[id].quiz[t]);
    });
  });

  rows(TAB_TESTS).forEach(function (r) {
    if (!r[1]) return;
    var s = seed(norm(r[1]));
    s.tests.push({ when: r[0], score: r[5], total: r[6], pct: r[7], result: r[8], attempt: r[9], how: r[10] });
    s.testAttempts++;
    s.testTotal = r[6];
    if (s.bestTest == null || Number(r[5]) > s.bestTest) s.bestTest = Number(r[5]);
    if (String(r[8]) === 'Pass') s.testPassed = true;
  });

  rows(TAB_PROJECTS).forEach(function (r) {
    if (!r[1]) return;
    seed(norm(r[1])).project = { when: r[0], unit: r[3], name: r[4], link: r[5] };
  });

  rows(TAB_SESSIONS).forEach(function (r) {
    if (!r[1]) return;
    var s = seed(norm(r[1]));
    s.minutes += Number(r[5]) || 0;
    s.sessions++;
  });

  rows(TAB_INTEGRITY).forEach(function (r) {
    if (!r[1]) return;
    var s = seed(norm(r[1]));
    s.flags++;
    s.flagKinds[r[3]] = (s.flagKinds[r[3]] || 0) + 1;
  });

  rows(TAB_DOUBTS).forEach(function (r) {
    if (!r[1]) return;
    var s = seed(norm(r[1]));
    s.doubts++;
    s.lastDoubts.push({ when: r[0], context: r[3], q: r[4] });
    if (s.lastDoubts.length > 5) s.lastDoubts.shift();
  });

  return { students: students, order: order, topics: topics, days: days };
}

/* ====================================================================== */
/*  CLASS OVERVIEW — the master sheet                                     */
/* ====================================================================== */

function buildOverview(data) {
  data = data || gather();
  var sh = SpreadsheetApp.getActive().getSheetByName(TAB_OVERVIEW) ||
           SpreadsheetApp.getActive().insertSheet(TAB_OVERVIEW);
  sh.clear();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });

  var head = ['Student ID', 'Name', 'Topics Done', 'Tasks Passed', 'Avg Quiz %',
              'Test Best', 'Test %', 'Test Result', 'Attempts', 'Project',
              'Minutes On Site', 'Sessions', 'Flags', 'Doubts Asked',
              'Last Seen', 'Days Since', 'Status'];
  sh.appendRow(head);

  var out = [];
  data.order.forEach(function (id) {
    var s = data.students[id];
    var qs = [], k;
    for (k in s.quiz) if (s.quiz.hasOwnProperty(k)) qs.push(s.quiz[k]);
    var avgQuiz = qs.length ? qs.reduce(function (a, b) { return a + b; }, 0) / qs.length : '';
    var since = s.lastSeen instanceof Date
      ? Math.floor((new Date() - s.lastSeen) / 86400000) : '';

    out.push([
      s.id, s.name, s.completed, s.tasks, avgQuiz,
      s.bestTest == null ? '' : s.bestTest,
      s.bestTest == null || !s.testTotal ? '' : s.bestTest / s.testTotal,
      s.testAttempts ? (s.testPassed ? 'Pass' : 'Fail') : '',
      s.testAttempts, s.project ? s.project.link : '',
      Math.round(s.minutes), s.sessions, s.flags, s.doubts,
      s.lastSeen || '', since, statusOf(s, since)
    ]);
  });

  if (out.length) sh.getRange(2, 1, out.length, head.length).setValues(out);

  sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
  sh.setFrozenRows(1);
  sh.setFrozenColumns(2);
  if (out.length) {
    sh.getRange(2, 5, out.length, 1).setNumberFormat('0%');
    sh.getRange(2, 7, out.length, 1).setNumberFormat('0%');
    sh.getRange(2, 15, out.length, 1).setNumberFormat('dd-mmm-yyyy hh:mm');

    band(sh.getRange(2, 5, out.length, 1));                                    // avg quiz
    band(sh.getRange(2, 7, out.length, 1));                                    // test %
    flagScale(sh.getRange(2, 13, out.length, 1));                              // flags
    statusColours(sh.getRange(2, 17, out.length, 1));
    sh.getRange(1, 1, out.length + 1, head.length).createFilter();
  }
  sh.autoResizeColumns(1, head.length);
  return sh;
}

function statusOf(s, since) {
  if (s.project) return 'Unit complete';
  if (s.flags >= 5) return 'Check integrity';
  if (s.testAttempts >= 2 && !s.testPassed) return 'Struggling';
  if (since !== '' && since >= 7 && !s.project) return 'Inactive';
  if (s.completed === 0 && s.sessions > 0) return 'Not started';
  return 'On track';
}

/* ====================================================================== */
/*  DASHBOARD — numbers and charts                                        */
/* ====================================================================== */

function buildDashboard(data) {
  data = data || gather();
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB_DASH) || ss.insertSheet(TAB_DASH);
  sh.clear();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });

  var ids = data.order, N = ids.length;
  var active7 = 0, complete = 0, passed = 0, attempted = 0, flagged = 0, minutes = 0, projects = 0;
  var now = new Date();

  ids.forEach(function (id) {
    var s = data.students[id];
    if (s.lastSeen instanceof Date && (now - s.lastSeen) < 7 * 86400000) active7++;
    if (s.project) { complete++; projects++; }
    if (s.testAttempts) attempted++;
    if (s.testPassed) passed++;
    if (s.flags >= 3) flagged++;
    minutes += s.minutes;
  });

  sh.getRange('A1').setValue('AbhyasLab — Faculty Dashboard')
    .setFontSize(18).setFontWeight('bold').setFontColor(INK);
  sh.getRange('A2').setValue('Last refreshed ' + Utilities.formatDate(now, Session.getScriptTimeZone(), 'dd MMM yyyy, HH:mm') +
    '   ·   AbhyasLab → Refresh dashboard & overview')
    .setFontColor('#6A7089');

  var kpis = [
    ['Students registered', N],
    ['Active in last 7 days', active7],
    ['Test attempted', attempted],
    ['Test passed', passed],
    ['Projects submitted', projects],
    ['Students with 3+ flags', flagged],
    ['Total hours on site', Math.round(minutes / 6) / 10],
    ['Average minutes each', N ? Math.round(minutes / N) : 0]
  ];
  sh.getRange(4, 1, kpis.length, 2).setValues(kpis);
  sh.getRange(4, 1, kpis.length, 1).setFontWeight('bold');
  sh.getRange(4, 1, kpis.length, 2).setBackground('#F7F5EF').setBorder(true, true, true, true, true, true, '#DFDBCD', null);

  /* ---- topic table: how far the class gets, and where marks drop ---- */
  var tNames = Object.keys(data.topics).sort();
  var tRows = tNames.map(function (t) {
    var o = data.topics[t];
    var att = Object.keys(o.attempted).length;
    var don = Object.keys(o.completed).length;
    var avg = o.scores.length ? o.scores.reduce(function (a, b) { return a + b; }, 0) / o.scores.length : '';
    return [t, att, don, avg, att ? don / att : ''];
  });

  var tTop = 14;
  sh.getRange(tTop - 1, 1).setValue('Topic performance').setFontWeight('bold').setFontSize(13);
  sh.getRange(tTop, 1, 1, 5).setValues([['Topic', 'Attempted', 'Completed', 'Avg quiz %', 'Completion rate']])
    .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
  if (tRows.length) {
    sh.getRange(tTop + 1, 1, tRows.length, 5).setValues(tRows);
    sh.getRange(tTop + 1, 4, tRows.length, 2).setNumberFormat('0%');
    band(sh.getRange(tTop + 1, 4, tRows.length, 1));
    band(sh.getRange(tTop + 1, 5, tRows.length, 1));
  }

  /* ---- test outcome split ---- */
  var oTop = tTop + tRows.length + 3;
  sh.getRange(oTop - 1, 1).setValue('Test outcomes').setFontWeight('bold').setFontSize(13);
  var outcome = [['Outcome', 'Students'],
                 ['Passed', passed],
                 ['Failed so far', Math.max(0, attempted - passed)],
                 ['Not attempted', Math.max(0, N - attempted)]];
  sh.getRange(oTop, 1, 4, 2).setValues(outcome);
  sh.getRange(oTop, 1, 1, 2).setFontWeight('bold').setBackground(INK).setFontColor(PAPER);

  /* ---- daily active students ---- */
  var dKeys = Object.keys(data.days).sort().slice(-21);
  var dTop = oTop + 6;
  sh.getRange(dTop - 1, 1).setValue('Daily active students (last 21 active days)').setFontWeight('bold').setFontSize(13);
  sh.getRange(dTop, 1, 1, 2).setValues([['Day', 'Students']])
    .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
  if (dKeys.length) {
    sh.getRange(dTop + 1, 1, dKeys.length, 2).setValues(
      dKeys.map(function (k) { return [k, Object.keys(data.days[k]).length]; }));
  }

  /* ---- most time on site ---- */
  var top = ids.slice().sort(function (a, b) { return data.students[b].minutes - data.students[a].minutes; }).slice(0, 10);
  var mTop = dTop + Math.max(dKeys.length, 1) + 3;
  sh.getRange(mTop - 1, 1).setValue('Most time on site').setFontWeight('bold').setFontSize(13);
  sh.getRange(mTop, 1, 1, 2).setValues([['Student', 'Minutes']])
    .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
  if (top.length) {
    sh.getRange(mTop + 1, 1, top.length, 2).setValues(top.map(function (id) {
      return [data.students[id].name + ' (' + data.students[id].id + ')', Math.round(data.students[id].minutes)];
    }));
  }

  /* ---- integrity ---- */
  var kinds = {};
  ids.forEach(function (id) {
    var fk = data.students[id].flagKinds, k;
    for (k in fk) if (fk.hasOwnProperty(k)) kinds[k] = (kinds[k] || 0) + fk[k];
  });
  var kNames = Object.keys(kinds).sort();
  var iTop = mTop + Math.max(top.length, 1) + 3;
  sh.getRange(iTop - 1, 1).setValue('Integrity events').setFontWeight('bold').setFontSize(13);
  sh.getRange(iTop, 1, 1, 2).setValues([['Event', 'Count']])
    .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
  if (kNames.length) {
    sh.getRange(iTop + 1, 1, kNames.length, 2).setValues(
      kNames.map(function (k) { return [k, kinds[k]]; }));
  } else {
    sh.getRange(iTop + 1, 1).setValue('Nothing flagged yet.');
  }

  /* ---- charts, stacked down column E ---- */
  if (tRows.length) {
    addChart(sh, Charts.ChartType.COLUMN, [sh.getRange(tTop, 1, tRows.length + 1, 3)],
             'Attempted vs completed, by topic', 4, 5);
    addChart(sh, Charts.ChartType.BAR, [sh.getRange(tTop, 1, tRows.length + 1, 1),
                                        sh.getRange(tTop, 4, tRows.length + 1, 1)],
             'Average quiz score by topic (lowest = hardest)', 22, 5);
  }
  addChart(sh, Charts.ChartType.PIE, [sh.getRange(oTop, 1, 4, 2)], 'Test outcomes', 40, 5);
  if (dKeys.length) {
    addChart(sh, Charts.ChartType.LINE, [sh.getRange(dTop, 1, dKeys.length + 1, 2)],
             'Daily active students', 58, 5);
  }
  if (top.length) {
    addChart(sh, Charts.ChartType.BAR, [sh.getRange(mTop, 1, top.length + 1, 2)],
             'Minutes on site — top 10', 76, 5);
  }
  if (kNames.length) {
    addChart(sh, Charts.ChartType.COLUMN, [sh.getRange(iTop, 1, kNames.length + 1, 2)],
             'Integrity events by type', 94, 5);
  }

  sh.setColumnWidth(1, 260);
  sh.autoResizeColumns(2, 4);
  return sh;
}

function addChart(sh, type, ranges, title, row, col) {
  var b = sh.newChart().setChartType(type)
    .setPosition(row, col, 0, 0)
    .setOption('title', title)
    .setOption('width', 620).setOption('height', 340)
    .setOption('legend', { position: 'bottom' })
    .setOption('colors', [AMBER, GREEN, RED, '#27386B']);
  ranges.forEach(function (r) { b.addRange(r); });
  sh.insertChart(b.build());
}

/* ====================================================================== */
/*  STUDENT REPORT                                                        */
/* ====================================================================== */

/** Puts the roll-number dropdown in B2 of the report tab. */
function ensureReportPicker() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB_REPORT) || ss.insertSheet(TAB_REPORT);
  var master = sheetFor(TAB_STUDENTS, HEAD[TAB_STUDENTS]);
  var last = Math.max(master.getLastRow(), 2);

  sh.getRange('A2').setValue('Student ID').setFontWeight('bold');
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(master.getRange(2, 2, last - 1, 1), true)
    .setAllowInvalid(true).build();
  sh.getRange('B2').setDataValidation(rule);
  sh.getRange('C2').setValue('← pick a roll number, the report rebuilds itself').setFontColor('#6A7089');
}

/** Simple trigger: changing B2 on the report tab rebuilds it. */
function onEdit(e) {
  try {
    if (!e || !e.range) return;
    if (e.range.getSheet().getName() !== TAB_REPORT) return;
    if (e.range.getA1Notation() !== 'B2') return;
    buildStudentReport();
  } catch (err) { /* never let a trigger throw at the user */ }
}

function promptStudentReport() {
  var ui = SpreadsheetApp.getUi();
  var res = ui.prompt('Student report', 'Enter the roll number:', ui.ButtonSet.OK_CANCEL);
  if (res.getSelectedButton() !== ui.Button.OK) return;
  var id = res.getResponseText().trim();
  if (!id) return;
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB_REPORT) || ss.insertSheet(TAB_REPORT);
  sh.getRange('B2').setValue(id);
  buildStudentReport();
  ss.setActiveSheet(sh);
}

function buildStudentReport() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB_REPORT) || ss.insertSheet(TAB_REPORT);
  var wanted = String(sh.getRange('B2').getValue() || '').trim();

  sh.getCharts().forEach(function (c) { sh.removeChart(c); });
  if (sh.getLastRow() > 3) sh.getRange(4, 1, sh.getLastRow() - 3, Math.max(sh.getLastColumn(), 6)).clear();

  sh.getRange('A1').setValue('Student Report')
    .setFontSize(18).setFontWeight('bold').setFontColor(INK);
  ensureReportPicker();
  if (!wanted) { sh.getRange('A4').setValue('Pick a roll number in B2.'); return; }

  var data = gather();
  var s = data.students[norm(wanted)];
  if (!s) { sh.getRange('A4').setValue('No record found for "' + wanted + '".'); return; }

  var r = 4;
  var put = function (label, value) { sh.getRange(r, 1).setValue(label).setFontWeight('bold'); sh.getRange(r, 2).setValue(value); r++; };
  var head = function (text) { r++; sh.getRange(r, 1).setValue(text).setFontWeight('bold').setFontSize(13).setFontColor(INK); r++; };

  var since = s.lastSeen instanceof Date ? Math.floor((new Date() - s.lastSeen) / 86400000) : '';

  head('Who');
  put('Name', s.name);
  put('Roll number', s.id);
  put('Registered', s.registered || '');
  put('Last seen', s.lastSeen || '');
  put('Days since last seen', since);
  put('Furthest point', s.furthest || '');
  put('Status', statusOf(s, since));

  head('Time on the system');
  put('Total minutes', Math.round(s.minutes));
  put('Sessions', s.sessions);
  put('Average session (min)', s.sessions ? Math.round(s.minutes / s.sessions) : 0);

  head('Topics');
  var tHeadRow = r;
  sh.getRange(r, 1, 1, 4).setValues([['Topic', 'Best quiz', 'Quiz %', 'Tasks passed']])
    .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
  r++;
  var tNames = Object.keys(data.topics).sort();
  var chartFirst = r, weakest = null;
  tNames.forEach(function (t) {
    var mine = s.topics[t];
    var pct  = s.quiz[t];
    sh.getRange(r, 1, 1, 4).setValues([[t, mine && mine.quiz ? mine.quiz : '—',
                                        pct == null ? '' : pct, mine ? mine.tasks : 0]]);
    if (pct != null && (weakest === null || pct < weakest.pct)) weakest = { t: t, pct: pct };
    r++;
  });
  var chartLast = r - 1;
  if (chartLast >= chartFirst) {
    sh.getRange(chartFirst, 3, chartLast - chartFirst + 1, 1).setNumberFormat('0%');
    band(sh.getRange(chartFirst, 3, chartLast - chartFirst + 1, 1));
  }

  head('Test');
  put('Attempts', s.testAttempts);
  put('Best score', s.bestTest == null ? '—' : s.bestTest + ' / ' + s.testTotal);
  put('Result', s.testAttempts ? (s.testPassed ? 'Pass' : 'Not cleared') : 'Not attempted');
  if (s.tests.length) {
    sh.getRange(r, 1, 1, 5).setValues([['When', 'Score', 'Percent', 'Result', 'How it ended']])
      .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
    r++;
    s.tests.forEach(function (t) {
      sh.getRange(r, 1, 1, 5).setValues([[t.when, t.score + '/' + t.total, t.pct, t.result, t.how]]);
      sh.getRange(r, 3).setNumberFormat('0%');
      r++;
    });
  }

  head('Project');
  if (s.project) {
    put('Submitted', s.project.when);
    put('Project', s.project.name);
    put('Link', s.project.link);
  } else {
    put('Submitted', 'Not yet');
  }

  head('Integrity');
  put('Total flags', s.flags);
  var fk = Object.keys(s.flagKinds).sort();
  if (fk.length) {
    sh.getRange(r, 1, 1, 2).setValues([['Event', 'Times']])
      .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
    r++;
    fk.forEach(function (k) { sh.getRange(r, 1, 1, 2).setValues([[k, s.flagKinds[k]]]); r++; });
  } else {
    put('Events', 'None');
  }

  head('Where they are struggling');
  var notes = [];
  if (weakest && weakest.pct < 0.7) notes.push('Lowest quiz score is in "' + weakest.t + '" at ' + Math.round(weakest.pct * 100) + '%.');
  if (s.testAttempts >= 2 && !s.testPassed) notes.push('Has sat the test ' + s.testAttempts + ' times without passing.');
  if (s.flags >= 3) notes.push(s.flags + ' integrity events — worth a conversation.');
  if (since !== '' && since >= 7) notes.push('No activity for ' + since + ' days.');
  if (s.completed === 0 && s.sessions > 0) notes.push('Has logged in but finished no topic yet.');
  if (s.minutes > 0 && s.completed > 0 && s.minutes / s.completed > 60) notes.push('Averaging ' + Math.round(s.minutes / s.completed) + ' minutes per topic — well above the class norm.');
  if (!notes.length) notes.push('Nothing concerning. On track.');
  notes.forEach(function (n) { sh.getRange(r, 1).setValue('•  ' + n); r++; });

  head('Recent doubts asked');
  put('Total asked', s.doubts);
  if (s.lastDoubts.length) {
    sh.getRange(r, 1, 1, 3).setValues([['When', 'Topic', 'Question']])
      .setFontWeight('bold').setBackground(INK).setFontColor(PAPER);
    r++;
    s.lastDoubts.slice().reverse().forEach(function (d) {
      sh.getRange(r, 1, 1, 3).setValues([[d.when, d.context, d.q]]);
      r++;
    });
  }

  if (chartLast >= chartFirst) {
    addChart(sh, Charts.ChartType.COLUMN,
      [sh.getRange(tHeadRow, 1, chartLast - tHeadRow + 1, 1),
       sh.getRange(tHeadRow, 3, chartLast - tHeadRow + 1, 1)],
      s.name + ' — quiz score by topic', 4, 6);
  }

  sh.setColumnWidth(1, 240);
  sh.setColumnWidth(2, 220);
  sh.autoResizeColumns(3, 3);
}

/* ====================================================================== */
/*  DELETING A STUDENT                                                    */
/* ====================================================================== */

function deleteStudentPrompt() {
  var ui = SpreadsheetApp.getUi();
  var res = ui.prompt('Delete a student',
    'Roll number to delete.\n\nEvery row for this student is removed from every tab, and the roll number is blocked so it cannot register again.',
    ui.ButtonSet.OK_CANCEL);
  if (res.getSelectedButton() !== ui.Button.OK) return;

  var id = res.getResponseText().trim();
  if (!id) return;

  var confirm = ui.alert('Delete ' + id + '?',
    'This cannot be undone. Continue?', ui.ButtonSet.YES_NO);
  if (confirm !== ui.Button.YES) return;

  var removed = purgeStudent(id, true);
  ui.alert('Deleted', id + ' removed.\n\n' + removed + ' rows deleted across all tabs.\nThe roll number is now blocked.', ui.ButtonSet.OK);
  refreshAll();
}

/**
 * Wipe every trace of a roll number. If `block` is true the ID goes on the
 * blocklist, so the site refuses it at registration even if the student still
 * has data sitting in their own browser.
 */
function purgeStudent(studentId, block) {
  var target = norm(studentId), removed = 0;

  var tabs = [
    { name: TAB_STUDENTS,  col: 2 },
    { name: TAB_ACTIVITY,  col: 2 },
    { name: TAB_TESTS,     col: 2 },
    { name: TAB_PROJECTS,  col: 2 },
    { name: TAB_DOUBTS,    col: 2 },
    { name: TAB_SESSIONS,  col: 2 },
    { name: TAB_INTEGRITY, col: 2 }
  ];

  tabs.forEach(function (t) {
    var sh = sheetFor(t.name, HEAD[t.name]);
    var last = sh.getLastRow();
    if (last < 2) return;
    var vals = sh.getRange(2, t.col, last - 1, 1).getValues();
    for (var i = vals.length - 1; i >= 0; i--) {
      if (norm(vals[i][0]) === target) { sh.deleteRow(i + 2); removed++; }
    }
  });

  if (block && !isBlocked(studentId)) {
    sheetFor(TAB_BLOCK, HEAD[TAB_BLOCK]).appendRow([studentId, new Date(), 'Deleted by faculty']);
  }
  return removed;
}

function unblockPrompt() {
  var ui = SpreadsheetApp.getUi();
  var res = ui.prompt('Unblock a student', 'Roll number to allow back in:', ui.ButtonSet.OK_CANCEL);
  if (res.getSelectedButton() !== ui.Button.OK) return;
  var id = norm(res.getResponseText().trim());
  if (!id) return;

  var sh = sheetFor(TAB_BLOCK, HEAD[TAB_BLOCK]);
  var last = sh.getLastRow(), gone = 0;
  if (last >= 2) {
    var vals = sh.getRange(2, 1, last - 1, 1).getValues();
    for (var i = vals.length - 1; i >= 0; i--) {
      if (norm(vals[i][0]) === id) { sh.deleteRow(i + 2); gone++; }
    }
  }
  ui.alert(gone ? 'Unblocked. They can register again.' : 'That roll number was not on the blocklist.');
}

/* ====================================================================== */
/*  EXPORT                                                                */
/* ====================================================================== */

function exportOverviewCsv() {
  var sh = SpreadsheetApp.getActive().getSheetByName(TAB_OVERVIEW);
  if (!sh || sh.getLastRow() < 2) {
    SpreadsheetApp.getUi().alert('Nothing to export yet. Run "Refresh dashboard & overview" first.');
    return;
  }
  var vals = sh.getDataRange().getDisplayValues();
  var csv = vals.map(function (row) {
    return row.map(function (c) {
      c = String(c == null ? '' : c);
      return /[",\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c;
    }).join(',');
  }).join('\n');

  var name = 'AbhyasLab_Class_Overview_' +
    Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd_HHmm') + '.csv';
  var file = DriveApp.createFile(name, csv, MimeType.CSV);
  SpreadsheetApp.getUi().alert('Saved to your Drive', name + '\n\n' + file.getUrl(), SpreadsheetApp.getUi().ButtonSet.OK);
}

/* ====================================================================== */
/*  SMALL HELPERS                                                         */
/* ====================================================================== */

function norm(v) { return String(v == null ? '' : v).trim().toLowerCase(); }

function dayKey(d) {
  return Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
}

/** Red through amber to green, for percentage columns. */
function band(range) {
  var sh = range.getSheet();
  var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMinpointWithValue(RED, SpreadsheetApp.InterpolationType.NUMBER, '0')
    .setGradientMidpointWithValue(AMBER, SpreadsheetApp.InterpolationType.NUMBER, '0.6')
    .setGradientMaxpointWithValue(GREEN, SpreadsheetApp.InterpolationType.NUMBER, '1')
    .setRanges([range]).build();
  var rules = sh.getConditionalFormatRules();
  rules.push(rule);
  sh.setConditionalFormatRules(rules);
}

/** More flags = redder. */
function flagScale(range) {
  var sh = range.getSheet();
  var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThanOrEqualTo(3)
    .setBackground('#F6D3CE').setFontColor('#8C2318')
    .setRanges([range]).build();
  var rules = sh.getConditionalFormatRules();
  rules.push(rule);
  sh.setConditionalFormatRules(rules);
}

function statusColours(range) {
  var sh = range.getSheet();
  var rules = sh.getConditionalFormatRules();
  var paint = function (text, bg, fg) {
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(text).setBackground(bg).setFontColor(fg)
      .setRanges([range]).build());
  };
  paint('Unit complete',   '#CDEDE7', '#0F4F47');
  paint('On track',        '#E6F4E9', '#1E5B32');
  paint('Not started',     '#FBEBD2', '#7A4A08');
  paint('Struggling',      '#F9DCD7', '#8C2318');
  paint('Inactive',        '#E7E7EA', '#4A5069');
  paint('Check integrity', '#F6C9C2', '#7A1B12');
  sh.setConditionalFormatRules(rules);
}
