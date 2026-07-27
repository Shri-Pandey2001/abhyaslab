/**
 * AbhyasLab — backend
 * Paste this whole file into Extensions → Apps Script on your Google Sheet.
 * Then: Run → setUp (once), and Deploy → New deployment → Web app.
 *
 * Script Properties you can set (Project Settings → Script Properties):
 *   GEMINI_API_KEY   required only if you want the "Ask a doubt" panel to work
 *   GEMINI_MODEL     optional, defaults to gemini-2.5-flash
 */

var TAB_STUDENTS = 'Students_Master';
var TAB_ACTIVITY = 'Activity_Log';
var TAB_DOUBTS   = 'Doubt_Log';

var HEAD_STUDENTS = ['Timestamp', 'Student ID', 'Student Name', 'Course', 'Registered On', 'Furthest Progress', 'Last Seen'];
var HEAD_ACTIVITY = ['Timestamp', 'Student ID', 'Student Name', 'Unit', 'Topic', 'MCQ Score', 'Code Status', 'Progression'];
var HEAD_DOUBTS   = ['Timestamp', 'Student ID', 'Student Name', 'Topic Context', 'Question', 'Answer'];

/* -------------------------------------------------------------- setup */

/** Run this once from the editor to build the tabs. */
function setUp() {
  sheetFor(TAB_STUDENTS, HEAD_STUDENTS);
  sheetFor(TAB_ACTIVITY, HEAD_ACTIVITY);
  sheetFor(TAB_DOUBTS,   HEAD_DOUBTS);
  SpreadsheetApp.getActive().toast('AbhyasLab tabs are ready.');
}

function sheetFor(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#141F3E')
      .setFontColor('#EFEDE4');
    sh.setFrozenRows(1);
  }
  return sh;
}

/* ------------------------------------------------------------ routing */

function doGet() {
  return json({ ok: true, service: 'AbhyasLab', message: 'Backend is live.' });
}

function doPost(e) {
  var body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: 'Request body was not valid JSON.' });
  }

  try {
    switch (body.action) {
      case 'register': return json(handleRegister(body));
      case 'progress': return json(handleProgress(body));
      case 'ask':      return json(handleAsk(body));
      default:         return json({ ok: false, error: 'Unknown action: ' + body.action });
    }
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ---------------------------------------------------------- handlers */

function handleRegister(b) {
  var sh   = sheetFor(TAB_STUDENTS, HEAD_STUDENTS);
  var now  = new Date();
  var rows = sh.getDataRange().getValues();

  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][1]).trim() === String(b.studentId).trim()) {
      sh.getRange(i + 1, 7).setValue(now);           // Last Seen
      return { ok: true, returning: true };
    }
  }

  sh.appendRow([now, b.studentId, b.studentName, b.course || '', now, 'Topic 1', now]);
  return { ok: true, returning: false };
}

function handleProgress(b) {
  sheetFor(TAB_ACTIVITY, HEAD_ACTIVITY).appendRow([
    new Date(), b.studentId, b.studentName,
    b.unit || '', b.topic || '', b.mcqScore || '',
    b.codeStatus || '', b.progression || ''
  ]);

  // keep the master row's furthest-progress column current
  var sh   = sheetFor(TAB_STUDENTS, HEAD_STUDENTS);
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][1]).trim() === String(b.studentId).trim()) {
      if (b.progression && b.progression.indexOf('unlocked') > -1) {
        sh.getRange(i + 1, 6).setValue(b.progression);
      }
      sh.getRange(i + 1, 7).setValue(new Date());
      break;
    }
  }
  return { ok: true };
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
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    payload: JSON.stringify({
      system_instruction: { parts: [{ text: system }] },
      contents: contents,
      generationConfig: { temperature: 0.4, maxOutputTokens: 600 }
    })
  });

  var code = res.getResponseCode();
  var data;
  try { data = JSON.parse(res.getContentText()); }
  catch (err) { return { ok: false, error: 'The AI service sent an unreadable reply.' }; }

  if (code !== 200) {
    var msg = (data && data.error && data.error.message) || ('AI service returned ' + code);
    return { ok: false, error: msg };
  }

  var reply = '';
  try {
    reply = data.candidates[0].content.parts.map(function (p) { return p.text || ''; }).join('');
  } catch (err) { reply = ''; }

  if (!reply) return { ok: false, error: 'No answer came back. Try rephrasing the question.' };

  try {
    sheetFor(TAB_DOUBTS, HEAD_DOUBTS)
      .appendRow([new Date(), b.studentId, b.studentName, b.context || '', b.question, reply]);
  } catch (err) { /* logging must never break the answer */ }

  return { ok: true, reply: reply };
}
