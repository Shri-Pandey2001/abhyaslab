/**
 * AbhyasLab — secure backend, progress database and faculty console
 *
 * This is intentionally one Apps Script file. Paste the entire file into
 * Extensions → Apps Script for the AbhyasLab Google Sheet.
 *
 * FIRST SETUP
 * 1. Save this file.
 * 2. Run setUp() once and approve permissions.
 * 3. Use AbhyasLab → Add / update faculty account to create faculty access.
 * 4. Deploy as a Web app: Execute as Me, access Anyone.
 * 5. Put the deployment URL in assets/js/config.js.
 *
 * Script Properties (Project Settings → Script Properties)
 * GEMINI_API_KEY       Optional. Needed for doubts and AI project review.
 * GEMINI_MODEL         Optional. Defaults to gemini-2.5-flash.
 * PROJECT_FOLDER_ID    Optional. If blank, a Drive folder is created.
 * SUPERADMIN_IDS       Optional comma-separated faculty IDs that may see all sections.
 */

/* ========================================================================== */
/* CONFIGURATION                                                              */
/* ========================================================================== */

var APP_NAME = 'AbhyasLab';
var SESSION_HOURS = 24;
var INACTIVE_DAYS = 15;
var MAX_PROJECT_BYTES = 5 * 1024 * 1024;
var DASHBOARD_REFRESH_MINUTES = 5;

var TAB_MASTER     = 'Students_Master';
var TAB_MANAGEMENT = 'Student_Management';
var TAB_PROGRESS   = 'Student_Progress';
var TAB_TESTS      = 'Test_Results';
var TAB_PROJECTS   = 'Project_Submissions';
var TAB_DOUBTS     = 'Doubt_Log';
var TAB_SESSIONS   = 'Session_Log';
var TAB_INTEGRITY  = 'Integrity_Log';
var TAB_DASHBOARD  = 'Dashboard';
var TAB_REPORT     = 'Student_Report';
var TAB_SYSTEM     = 'System_Data';
var TAB_ARCHIVE    = 'Archive_Activity_Log';

var LEGACY_ACTIVITY = 'Activity_Log';
var LEGACY_BLOCK    = 'Blocklist';
var LEGACY_OVERVIEW = 'Class_Overview';

var HEAD = {};
HEAD[TAB_MASTER] = [
  'Created At', 'Account ID', 'Role', 'Full Name', 'Email', 'Section',
  'Managed Sections', 'Status', 'Course', 'Registered On', 'Last Seen',
  'Current Unit', 'Current Step', 'PIN Salt', 'PIN Hash', 'Auth Token Hash',
  'Auth Expires', 'Last Login', 'Profile Complete', 'Blocked On', 'Blocked By',
  'Notes'
];
HEAD[TAB_MANAGEMENT] = [
  'Student ID', 'Student Name', 'Email', 'Section', 'Status', 'Registered On',
  'Last Active', 'Days Inactive', 'Current Unit', 'Current Step', 'Steps Done',
  'Steps Total', 'Step Progress %', 'Weighted Progress %', 'Unit Progress',
  'Test Summary', 'Project Summary', 'Minutes', 'Sessions', 'Doubts',
  'Integrity Flags', 'Faculty Owner(s)', 'Action', 'Action Unit', 'Confirmation',
  'Last Action Result'
];
HEAD[TAB_PROGRESS] = [
  'Updated At', 'Student ID', 'Student Name', 'Email', 'Section', 'Unit',
  'Step ID', 'Step Type', 'Step Name', 'MCQ Best', 'MCQ Total', 'MCQ %',
  'Tasks Completed', 'Tasks Total', 'Task IDs JSON', 'Status', 'Started At',
  'Completed At', 'Last Event'
];
HEAD[TAB_TESTS] = [
  'Timestamp', 'Student ID', 'Student Name', 'Email', 'Section', 'Unit', 'Test',
  'Score', 'Out Of', 'Percent', 'Result', 'Attempt', 'How It Ended',
  'Reset At', 'Reset By'
];
HEAD[TAB_PROJECTS] = [
  'Submitted At', 'Student ID', 'Student Name', 'Email', 'Section', 'Unit',
  'Project', 'Submission Type', 'Submission URL', 'Drive File ID', 'File Name',
  'AI Suggested Score', 'AI Summary', 'AI Strengths', 'AI Issues',
  'AI Improvements', 'AI Review Status', 'Approved Score', 'Faculty Feedback',
  'Approved By', 'Approved At', 'Submission Status', 'Reset At', 'Reset By'
];
HEAD[TAB_DOUBTS] = [
  'Timestamp', 'Student ID', 'Student Name', 'Topic Context', 'Question', 'Answer'
];
HEAD[TAB_SESSIONS] = [
  'Session ID', 'Student ID', 'Student Name', 'Started', 'Last Seen', 'Minutes',
  'Last Screen'
];
HEAD[TAB_INTEGRITY] = [
  'Timestamp', 'Student ID', 'Student Name', 'Event', 'Where', 'Detail'
];
HEAD[TAB_SYSTEM] = ['Type', 'Key', 'Value', 'Owner ID', 'Active', 'Updated At', 'Notes'];

var INK = '#141F3E';
var PAPER = '#EFEDE4';
var GREEN = '#28A08F';
var AMBER = '#F2A03D';
var RED = '#CF4A3C';
var BLUE = '#3957A7';

var ACTIONS = [
  'No Action', 'View Report', 'Block', 'Unblock', 'Reset Test', 'Reset Project',
  'Delete Permanently'
];

/* ========================================================================== */
/* MENU AND SETUP                                                             */
/* ========================================================================== */

function onOpen() {
  SpreadsheetApp.getUi().createMenu('AbhyasLab')
    .addItem('Refresh dashboard and student views', 'refreshAll')
    .addItem('Open selected student report', 'openSelectedStudentReport')
    .addSeparator()
    .addItem('Add / update faculty account', 'addFacultyPrompt')
    .addItem('Create / assign a section', 'createSectionPrompt')
    .addSeparator()
    .addItem('Block selected student', 'blockSelectedStudent')
    .addItem('Unblock selected student', 'unblockSelectedStudent')
    .addItem('Reset selected student test', 'resetSelectedStudentTest')
    .addItem('Reset selected student project', 'resetSelectedStudentProject')
    .addItem('Delete selected student permanently', 'deleteSelectedStudent')
    .addSeparator()
    .addItem('Set up / repair / migrate sheets', 'setUp')
    .addToUi();
}

function setUp() {
  var lock = LockService.getDocumentLock();
  lock.waitLock(30000);
  try {
    migrateLegacySheets_();
    ensureCoreSheets_();
    seedMissingAccountsFromLogs_();
    migrateLegacyActivity_();
    ensureManagementValidation_();
    ensureStudentReportPicker_();
    ensureTriggers_();
    refreshAll();
    SpreadsheetApp.getActive().toast(
      'Database, dashboard, progress table and faculty controls are ready.',
      APP_NAME,
      8
    );
  } finally {
    lock.releaseLock();
  }
}

function ensureCoreSheets_() {
  sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]);
  sheetFor_(TAB_MANAGEMENT, HEAD[TAB_MANAGEMENT]);
  sheetFor_(TAB_PROGRESS, HEAD[TAB_PROGRESS]);
  sheetFor_(TAB_TESTS, HEAD[TAB_TESTS]);
  sheetFor_(TAB_PROJECTS, HEAD[TAB_PROJECTS]);
  sheetFor_(TAB_DOUBTS, HEAD[TAB_DOUBTS]);
  sheetFor_(TAB_SESSIONS, HEAD[TAB_SESSIONS]);
  sheetFor_(TAB_INTEGRITY, HEAD[TAB_INTEGRITY]);
  sheetFor_(TAB_SYSTEM, HEAD[TAB_SYSTEM]);
  blankSheet_(TAB_DASHBOARD);
  blankSheet_(TAB_REPORT);

  var master = SpreadsheetApp.getActive().getSheetByName(TAB_MASTER);
  if (master) {
    master.hideColumns(14, 4); // PIN salt/hash and token details.
    master.setFrozenRows(1);
  }

  var system = SpreadsheetApp.getActive().getSheetByName(TAB_SYSTEM);
  if (system && !system.isSheetHidden()) system.hideSheet();
}

function sheetFor_(name, headers) {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);

  var current = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getDisplayValues()[0] : [];
  if (!sameHeaders_(current, headers)) upgradeSheetHeaders_(sh, name, headers, current);

  styleHeader_(sh, headers.length);
  return sh;
}

function blankSheet_(name) {
  var ss = SpreadsheetApp.getActive();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function styleHeader_(sh, width) {
  if (!width) return;
  sh.getRange(1, 1, 1, width)
    .setFontWeight('bold')
    .setBackground(INK)
    .setFontColor(PAPER)
    .setVerticalAlignment('middle');
  sh.setFrozenRows(1);
}

function sameHeaders_(a, b) {
  if (a.length !== b.length) return false;
  for (var i = 0; i < b.length; i++) if (String(a[i]) !== String(b[i])) return false;
  return true;
}

function upgradeSheetHeaders_(sh, name, headers, oldHeaders) {
  var lastRow = sh.getLastRow();
  var oldValues = lastRow > 1 && oldHeaders.length
    ? sh.getRange(2, 1, lastRow - 1, oldHeaders.length).getValues()
    : [];

  if (name === TAB_MASTER && oldHeaders.indexOf('Student ID') > -1) {
    var map = headerMap_(oldHeaders);
    var converted = oldValues.filter(function (r) { return r[map['Student ID']] !== ''; }).map(function (r) {
      var id = String(r[map['Student ID']] || '').trim();
      var role = /^f/i.test(id) ? 'Faculty' : 'Student';
      return [
        valueBy_(r, map, 'Timestamp') || new Date(), id, role,
        valueBy_(r, map, 'Student Name') || '', '', '', '',
        'Active', valueBy_(r, map, 'Course') || 'Python Programming',
        valueBy_(r, map, 'Registered On') || valueBy_(r, map, 'Timestamp') || new Date(),
        valueBy_(r, map, 'Last Seen') || '', '',
        valueBy_(r, map, 'Furthest Progress') || '', '', '', '', '', '',
        false, '', '', 'Migrated from the earlier Students_Master format.'
      ];
    });
    sh.clear();
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    if (converted.length) sh.getRange(2, 1, converted.length, headers.length).setValues(converted);
    return;
  }

  if (name === TAB_TESTS && oldHeaders.indexOf('Student ID') > -1 && oldHeaders.length < headers.length) {
    var tm = headerMap_(oldHeaders);
    var tests = oldValues.filter(function (r) { return valueBy_(r, tm, 'Student ID'); }).map(function (r) {
      return [
        valueBy_(r, tm, 'Timestamp'), valueBy_(r, tm, 'Student ID'),
        valueBy_(r, tm, 'Student Name'), '', '', valueBy_(r, tm, 'Unit'),
        valueBy_(r, tm, 'Test'), valueBy_(r, tm, 'Score'), valueBy_(r, tm, 'Out Of'),
        normalPercent_(valueBy_(r, tm, 'Percent')), valueBy_(r, tm, 'Result'),
        valueBy_(r, tm, 'Attempt'), valueBy_(r, tm, 'How It Ended'), '', ''
      ];
    });
    sh.clear();
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    if (tests.length) sh.getRange(2, 1, tests.length, headers.length).setValues(tests);
    return;
  }

  if (name === TAB_PROJECTS && oldHeaders.indexOf('Student ID') > -1 && oldHeaders.length < headers.length) {
    var pm = headerMap_(oldHeaders);
    var projects = oldValues.filter(function (r) { return valueBy_(r, pm, 'Student ID'); }).map(function (r) {
      return [
        valueBy_(r, pm, 'Timestamp'), valueBy_(r, pm, 'Student ID'),
        valueBy_(r, pm, 'Student Name'), '', '', valueBy_(r, pm, 'Unit'),
        valueBy_(r, pm, 'Project'), 'Link', valueBy_(r, pm, 'Submission Link'),
        '', '', '', '', '', '', '', 'Not Reviewed', '', '', '', '', 'Submitted', '', ''
      ];
    });
    sh.clear();
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    if (projects.length) sh.getRange(2, 1, projects.length, headers.length).setValues(projects);
    return;
  }

  // Unknown or empty sheet: preserve it by moving its old content below the new header.
  sh.clear();
  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
}

function migrateLegacySheets_() {
  var ss = SpreadsheetApp.getActive();
  var activity = ss.getSheetByName(LEGACY_ACTIVITY);
  if (activity && !ss.getSheetByName(TAB_ARCHIVE)) activity.setName(TAB_ARCHIVE);
  else if (activity && ss.getSheetByName(TAB_ARCHIVE)) ss.deleteSheet(activity);

  var block = ss.getSheetByName(LEGACY_BLOCK);
  if (block) {
    var rows = block.getDataRange().getValues();
    for (var i = 1; i < rows.length; i++) {
      if (rows[i][0]) setMasterStatus_(rows[i][0], 'Blocked', rows[i][1] || new Date(), 'Legacy Blocklist');
    }
    ss.deleteSheet(block);
  }

  var overview = ss.getSheetByName(LEGACY_OVERVIEW);
  if (overview) ss.deleteSheet(overview);
}

function migrateLegacyActivity_() {
  var ss = SpreadsheetApp.getActive();
  var archive = ss.getSheetByName(TAB_ARCHIVE);
  if (!archive || archive.getLastRow() < 2) return;

  var marker = systemValue_('Migration', 'LegacyActivityDone');
  if (String(marker).toLowerCase() === 'true') return;

  var vals = archive.getDataRange().getValues();
  var head = headerMap_(vals[0]);
  var grouped = {};

  for (var i = 1; i < vals.length; i++) {
    var r = vals[i];
    var id = valueBy_(r, head, 'Student ID');
    var topic = valueBy_(r, head, 'Topic');
    if (!id || !topic) continue;
    var unit = valueBy_(r, head, 'Unit') || 'Legacy';
    var key = norm_(id) + '|' + norm_(unit) + '|' + norm_(topic);
    if (!grouped[key]) grouped[key] = {
      id: id, name: valueBy_(r, head, 'Student Name') || '', unit: unit, topic: topic,
      score: 0, total: 0, tasks: {}, done: false, updated: valueBy_(r, head, 'Timestamp') || new Date()
    };
    var g = grouped[key];
    var score = parseScore_(valueBy_(r, head, 'MCQ Score'));
    if (score.total && (!g.total || score.score / score.total > g.score / g.total)) {
      g.score = score.score; g.total = score.total;
    }
    var code = String(valueBy_(r, head, 'Code Status') || '');
    if (code.indexOf('Passed:') === 0) g.tasks[code.substring(7).trim()] = true;
    var prog = String(valueBy_(r, head, 'Progression') || '');
    if (prog.indexOf('unlocked') > -1 || prog === 'Unit complete') g.done = true;
    if (valueBy_(r, head, 'Timestamp') instanceof Date) g.updated = valueBy_(r, head, 'Timestamp');
  }

  Object.keys(grouped).forEach(function (key) {
    var g = grouped[key];
    var account = accountById_(g.id);
    if (!account) return;
    upsertProgress_({
      account: account, unit: g.unit,
      stepId: 'legacy:' + slug_(g.unit + '-' + g.topic),
      stepType: 'Topic', stepName: g.topic,
      mcqBest: g.score, mcqTotal: g.total,
      tasksCompleted: Object.keys(g.tasks).length,
      tasksTotal: Object.keys(g.tasks).length,
      taskIds: Object.keys(g.tasks),
      status: g.done ? 'Completed' : 'In Progress',
      lastEvent: 'Migrated from Archive_Activity_Log',
      timestamp: g.updated
    });
  });

  setSystemValue_('Migration', 'LegacyActivityDone', 'true', '', true, 'Automatically migrated once.');
}

function seedMissingAccountsFromLogs_() {
  var sources = [TAB_ARCHIVE, TAB_TESTS, TAB_PROJECTS, TAB_DOUBTS, TAB_SESSIONS, TAB_INTEGRITY];
  var existing = {};
  masterRows_().forEach(function (a) { existing[norm_(a.id)] = true; });

  sources.forEach(function (name) {
    var sh = SpreadsheetApp.getActive().getSheetByName(name);
    if (!sh || sh.getLastRow() < 2) return;
    var values = sh.getDataRange().getValues();
    var headers = headerMap_(values[0]);
    var idCol = headers['Student ID'];
    var nameCol = headers['Student Name'];
    if (idCol == null) return;
    for (var i = 1; i < values.length; i++) {
      var id = String(values[i][idCol] || '').trim();
      if (!id || existing[norm_(id)]) continue;
      var role = /^f/i.test(id) ? 'Faculty' : 'Student';
      appendMaster_({
        id: id,
        role: role,
        name: nameCol == null ? '' : values[i][nameCol],
        email: '', section: '', managedSections: '', status: 'Active',
        course: 'Python Programming', registered: new Date(), lastSeen: '',
        currentUnit: '', currentStep: '', salt: '', pinHash: '',
        tokenHash: '', tokenExpiry: '', lastLogin: '', profileComplete: false,
        notes: 'Created during legacy data migration. Complete profile before signing in.'
      });
      existing[norm_(id)] = true;
    }
  });
}

function ensureTriggers_() {
  var triggers = ScriptApp.getProjectTriggers();
  var hasTimer = false;
  var hasEdit = false;
  triggers.forEach(function (t) {
    if (t.getHandlerFunction() === 'scheduledRefreshViews') hasTimer = true;
    if (t.getHandlerFunction() === 'handleManagementEdit') hasEdit = true;
  });
  if (!hasTimer) {
    ScriptApp.newTrigger('scheduledRefreshViews')
      .timeBased().everyMinutes(DASHBOARD_REFRESH_MINUTES).create();
  }
  if (!hasEdit) {
    ScriptApp.newTrigger('handleManagementEdit')
      .forSpreadsheet(SpreadsheetApp.getActive()).onEdit().create();
  }
}

function scheduledRefreshViews() {
  refreshAll();
}

/* ========================================================================== */
/* WEB APP ROUTER                                                             */
/* ========================================================================== */

function doGet() {
  return json_({ ok: true, service: APP_NAME, version: '3.0.0', message: 'Backend is live.' });
}

function doPost(e) {
  var b;
  try { b = JSON.parse(e.postData.contents); }
  catch (err) { return json_({ ok: false, error: 'Request body was not valid JSON.' }); }

  try {
    switch (String(b.action || '')) {
      case 'sections':          return json_(handleListSections_(b));
      case 'studentRegister':   return json_(handleStudentRegister_(b));
      case 'login':             return json_(handleLogin_(b));
      case 'resume':            return json_(handleResume_(b));
      case 'logout':            return json_(handleLogout_(b));
      case 'syncCourse':        return json_(handleSyncCourse_(b));
      case 'progress':          return json_(handleProgress_(b));
      case 'test':              return json_(handleTest_(b));
      case 'project':           return json_(handleProject_(b));
      case 'heartbeat':         return json_(handleHeartbeat_(b));
      case 'flag':              return json_(handleFlag_(b));
      case 'ask':               return json_(handleAsk_(b));
      case 'facultyDashboard':  return json_(handleFacultyDashboard_(b));
      case 'facultyStudent':    return json_(handleFacultyStudent_(b));
      case 'createSection':     return json_(handleCreateSection_(b));
      case 'studentAction':     return json_(handleStudentAction_(b));
      case 'approveProject':    return json_(handleApproveProject_(b));
      default: return json_({ ok: false, error: 'Unknown action: ' + b.action });
    }
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ========================================================================== */
/* AUTHENTICATION AND ACCOUNT MANAGEMENT                                      */
/* ========================================================================== */

function handleListSections_() {
  return { ok: true, sections: publicSections_().map(function (s) { return { name: s.name }; }) };
}

function handleStudentRegister_(b) {
  var id = cleanId_(b.studentId);
  var name = cleanName_(b.studentName);
  var email = cleanEmail_(b.email);
  var section = cleanSection_(b.section);
  var pin = String(b.pin || '');

  validateIdForRole_(id, 'Student');
  if (name.length < 3) throw new Error('Enter your full name.');
  if (!validEmail_(email)) throw new Error('Enter a valid email address.');
  if (!sectionExists_(section)) throw new Error('Choose a section created by your faculty.');
  validatePin_(pin);
  ensureUniqueEmail_(email, id);

  var existing = accountById_(id);
  if (existing && existing.role !== 'Student') throw new Error('This ID belongs to a different account type.');
  if (existing && existing.status === 'Blocked') {
    return { ok: false, blocked: true, error: 'This account is blocked. Contact your faculty.' };
  }
  if (existing && existing.name && norm_(existing.name) !== norm_(name)) {
    throw new Error('The name does not match the existing student record. Contact faculty.');
  }
  if (existing && existing.profileComplete && existing.pinHash) {
    throw new Error('This student account already exists. Use Sign in.');
  }

  var salt = newSalt_();
  var values = {
    id: id, role: 'Student', name: name, email: email, section: section,
    managedSections: '', status: existing && existing.status === 'Blocked' ? 'Blocked' : 'Active',
    course: b.course || 'Python Programming', registered: existing ? existing.registered : new Date(),
    lastSeen: new Date(), currentUnit: existing ? existing.currentUnit : '',
    currentStep: existing ? existing.currentStep : '', salt: salt,
    pinHash: pinHash_(id, pin, salt), profileComplete: true,
    notes: existing ? existing.notes : ''
  };

  var row = existing ? updateMaster_(existing.row, values) : appendMaster_(values);
  var account = accountAtRow_(row);
  var auth = issueToken_(account);
  refreshStudentManagementRow_(id);
  return authResponse_(account, auth, true);
}

function handleLogin_(b) {
  var role = titleCaseRole_(b.role);
  var id = cleanId_(b.accountId || b.studentId);
  var pin = String(b.pin || '');
  validateIdForRole_(id, role);
  validatePin_(pin);

  var account = accountById_(id);
  if (!account || account.role !== role) throw new Error('The ID or PIN is not correct.');
  if (account.status === 'Blocked') return { ok: false, blocked: true, error: 'This account is blocked. Contact your faculty.' };
  if (account.status === 'Deleted') throw new Error('This account is unavailable.');
  if (!account.pinHash || !account.profileComplete) {
    return {
      ok: false,
      needsProfile: role === 'Student',
      error: role === 'Student'
        ? 'Complete your first-time student registration before signing in.'
        : 'This faculty account has not been activated by the Sheet owner.'
    };
  }
  if (!secureEqual_(account.pinHash, pinHash_(id, pin, account.salt))) {
    throw new Error('The ID or PIN is not correct.');
  }

  var auth = issueToken_(account);
  account = accountById_(id);
  return authResponse_(account, auth, false);
}

function handleResume_(b) {
  var account = requireAuth_(b);
  touchMaster_(account.id, '', '');
  return authResponse_(accountById_(account.id), {
    token: b.authToken,
    expiresAt: account.authExpires instanceof Date ? account.authExpires.toISOString() : account.authExpires
  }, false);
}

function handleLogout_(b) {
  var account = requireAuth_(b);
  clearToken_(account.row);
  return { ok: true };
}

function authResponse_(account, auth, registered) {
  var result = {
    ok: true,
    registered: !!registered,
    token: auth.token,
    expiresAt: auth.expiresAt,
    account: publicAccount_(account),
    sections: account.role === 'Faculty' ? getManagedSections_(account.id) : [],
    state: account.role === 'Student' ? studentSyncState_(account.id) : null
  };
  return result;
}

function publicAccount_(a) {
  return {
    id: a.id,
    role: a.role.toLowerCase(),
    name: a.name,
    email: a.email,
    section: a.section,
    status: a.status,
    course: a.course,
    profileComplete: !!a.profileComplete
  };
}

function issueToken_(account) {
  var token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  var expiry = new Date(Date.now() + SESSION_HOURS * 60 * 60 * 1000);
  var sh = sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]);
  sh.getRange(account.row, 16).setValue(hashText_(token));
  sh.getRange(account.row, 17).setValue(expiry);
  sh.getRange(account.row, 18).setValue(new Date());
  sh.getRange(account.row, 11).setValue(new Date());
  return { token: token, expiresAt: expiry.toISOString() };
}

function clearToken_(row) {
  sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]).getRange(row, 16, 1, 2).clearContent();
}

function requireAuth_(b, requiredRole) {
  var token = String(b.authToken || '');
  if (!token) throw new Error('Your session has expired. Sign in again.');
  var tokenHash = hashText_(token);
  var rows = masterRows_();
  for (var i = 0; i < rows.length; i++) {
    var a = rows[i];
    if (!a.tokenHash || !secureEqual_(String(a.tokenHash), tokenHash)) continue;
    if (!(a.authExpires instanceof Date) || a.authExpires.getTime() <= Date.now()) {
      clearToken_(a.row);
      throw new Error('Your session has expired. Sign in again.');
    }
    if (a.status === 'Blocked') throw new Error('This account is blocked. Contact your faculty.');
    if (requiredRole && a.role !== requiredRole) throw new Error('You do not have permission for this action.');
    return a;
  }
  throw new Error('Your session is invalid. Sign in again.');
}

function validateIdForRole_(id, role) {
  if (!/^[A-Za-z][A-Za-z0-9_-]{2,29}$/.test(id)) {
    throw new Error('This ID is not valid for the selected role.');
  }
  if (role === 'Student' && !/^s/i.test(id)) throw new Error('This ID is not valid for the selected role.');
  if (role === 'Faculty' && !/^f/i.test(id)) throw new Error('This ID is not valid for the selected role.');
}

function validatePin_(pin) {
  if (!/^\d{4}$/.test(pin)) throw new Error('Use a four-digit PIN.');
}

function pinHash_(id, pin, salt) {
  return hashText_(norm_(id) + '|' + String(salt) + '|' + String(pin));
}

function newSalt_() {
  return Utilities.getUuid().replace(/-/g, '');
}

function hashText_(text) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(text), Utilities.Charset.UTF_8);
  return bytes.map(function (b) {
    var v = b < 0 ? b + 256 : b;
    return ('0' + v.toString(16)).slice(-2);
  }).join('');
}

function secureEqual_(a, b) {
  a = String(a || ''); b = String(b || '');
  if (a.length !== b.length) return false;
  var result = 0;
  for (var i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}

/* ========================================================================== */
/* SECTIONS AND COURSE SCHEMA                                                 */
/* ========================================================================== */

function handleCreateSection_(b) {
  var faculty = requireAuth_(b, 'Faculty');
  var name = cleanSection_(b.sectionName);
  if (name.length < 2 || name.length > 60) throw new Error('Use a section name between 2 and 60 characters.');

  var key = norm_(name);
  var sh = sheetFor_(TAB_SYSTEM, HEAD[TAB_SYSTEM]);
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === 'Section' && norm_(rows[i][1]) === key && norm_(rows[i][3]) === norm_(faculty.id)) {
      sh.getRange(i + 1, 5).setValue(true);
      sh.getRange(i + 1, 6).setValue(new Date());
      syncManagedSectionsText_(faculty.id);
      return { ok: true, sections: getManagedSections_(faculty.id), allSections: publicSections_() };
    }
  }
  sh.appendRow(['Section', key, name, faculty.id, true, new Date(), 'Created from the faculty website.']);
  syncManagedSectionsText_(faculty.id);
  refreshAll();
  return { ok: true, sections: getManagedSections_(faculty.id), allSections: publicSections_() };
}

function handleSyncCourse_(b) {
  var faculty = requireAuth_(b, 'Faculty');
  var schema = b.schema;
  if (!schema || !Array.isArray(schema.units)) throw new Error('Course schema was missing.');
  var safe = {
    version: String(schema.version || ''),
    updatedBy: faculty.id,
    updatedAt: new Date().toISOString(),
    units: schema.units.map(function (u) {
      return {
        unit: String(u.unit || ''),
        title: String(u.title || ''),
        steps: (u.steps || []).map(function (s) {
          return {
            id: String(s.id || ''),
            type: String(s.type || 'Topic'),
            title: String(s.title || ''),
            tasksTotal: Number(s.tasksTotal || 0)
          };
        }),
        testId: String(u.testId || ''),
        projectId: String(u.projectId || '')
      };
    })
  };
  var text = JSON.stringify(safe);
  if (text.length > 45000) throw new Error('Course schema was unexpectedly large.');
  setSystemValue_('Course', 'Schema', text, faculty.id, true, 'Synced automatically from the faculty website.');
  refreshAll();
  return { ok: true, units: safe.units.length };
}

function publicSections_() {
  var sh = sheetFor_(TAB_SYSTEM, HEAD[TAB_SYSTEM]);
  var rows = sh.getLastRow() < 2 ? [] : sh.getRange(2, 1, sh.getLastRow() - 1, HEAD[TAB_SYSTEM].length).getValues();
  var sections = {};
  rows.forEach(function (r) {
    if (r[0] !== 'Section' || r[4] !== true) return;
    var name = String(r[2] || '').trim();
    if (!name) return;
    var key = norm_(name);
    if (!sections[key]) sections[key] = { name: name, facultyIds: [] };
    if (r[3]) sections[key].facultyIds.push(String(r[3]));
  });
  return Object.keys(sections).sort().map(function (k) {
    return { name: sections[k].name, facultyIds: unique_(sections[k].facultyIds) };
  });
}

function getManagedSections_(facultyId) {
  var all = publicSections_();
  if (isSuperAdmin_(facultyId)) return all.map(function (s) { return s.name; });
  return all.filter(function (s) {
    return s.facultyIds.some(function (id) { return norm_(id) === norm_(facultyId); });
  }).map(function (s) { return s.name; });
}

function sectionExists_(section) {
  return publicSections_().some(function (s) { return norm_(s.name) === norm_(section); });
}

function sectionOwners_(section) {
  var match = publicSections_().filter(function (s) { return norm_(s.name) === norm_(section); })[0];
  return match ? match.facultyIds : [];
}

function canManageStudent_(faculty, student) {
  if (isSuperAdmin_(faculty.id)) return true;
  return getManagedSections_(faculty.id).some(function (s) { return norm_(s) === norm_(student.section); });
}

function isSuperAdmin_(id) {
  var raw = PropertiesService.getScriptProperties().getProperty('SUPERADMIN_IDS') || '';
  return raw.split(',').some(function (x) { return norm_(x) === norm_(id); });
}

function courseSchema_() {
  var raw = systemValue_('Course', 'Schema');
  try {
    var parsed = JSON.parse(raw || '{}');
    if (parsed && Array.isArray(parsed.units)) return parsed;
  } catch (err) {}
  return { version: '', units: [] };
}

/* ========================================================================== */
/* STUDENT DATA HANDLERS                                                      */
/* ========================================================================== */

function handleProgress_(b) {
  var account = requireAuth_(b, 'Student');
  var result = upsertProgress_({
    account: account,
    unit: String(b.unit || ''),
    stepId: String(b.stepId || ''),
    stepType: String(b.stepType || 'Topic'),
    stepName: String(b.stepName || b.topic || ''),
    mcqBest: Number(b.mcqBest || 0),
    mcqTotal: Number(b.mcqTotal || 0),
    tasksCompleted: Number(b.tasksCompleted || 0),
    tasksTotal: Number(b.tasksTotal || 0),
    taskIds: Array.isArray(b.taskIds) ? b.taskIds : [],
    status: String(b.status || 'In Progress'),
    lastEvent: String(b.lastEvent || ''),
    timestamp: new Date()
  });
  touchMaster_(account.id, b.unit || '', b.stepName || b.topic || '');
  if (String(b.status) === 'Completed') refreshStudentManagementRow_(account.id);
  return { ok: true, row: result };
}

function upsertProgress_(x) {
  if (!x.stepId) throw new Error('Progress step ID was missing.');
  var sh = sheetFor_(TAB_PROGRESS, HEAD[TAB_PROGRESS]);
  var last = sh.getLastRow();
  var row = 0;
  if (last >= 2) {
    var vals = sh.getRange(2, 2, last - 1, 6).getValues(); // ID through Step ID.
    for (var i = vals.length - 1; i >= 0; i--) {
      if (norm_(vals[i][0]) === norm_(x.account.id) && String(vals[i][5]) === String(x.stepId)) {
        row = i + 2; break;
      }
    }
  }

  var existingStarted = row ? sh.getRange(row, 17).getValue() : '';
  var existingCompleted = row ? sh.getRange(row, 18).getValue() : '';
  var now = x.timestamp || new Date();
  var status = ['Not Started', 'In Progress', 'Completed', 'Reset'].indexOf(x.status) > -1
    ? x.status : 'In Progress';
  var completedAt = status === 'Completed' ? (existingCompleted || now) : '';
  if (status === 'Reset' || status === 'Not Started') completedAt = '';

  var pct = x.mcqTotal ? x.mcqBest / x.mcqTotal : '';
  var values = [[
    now, x.account.id, x.account.name, x.account.email, x.account.section,
    x.unit, x.stepId, x.stepType, x.stepName, x.mcqBest || '', x.mcqTotal || '',
    pct, x.tasksCompleted || 0, x.tasksTotal || 0,
    JSON.stringify(unique_(x.taskIds || [])), status,
    existingStarted || now, completedAt, x.lastEvent || ''
  ]];

  if (row) sh.getRange(row, 1, 1, HEAD[TAB_PROGRESS].length).setValues(values);
  else {
    sh.appendRow(values[0]);
    row = sh.getLastRow();
  }
  sh.getRange(row, 12).setNumberFormat('0%');
  return row;
}

function handleTest_(b) {
  var account = requireAuth_(b, 'Student');
  var sh = sheetFor_(TAB_TESTS, HEAD[TAB_TESTS]);
  var unit = String(b.unit || '');
  var attempt = activeTestAttempts_(account.id, unit) + 1;
  var total = Number(b.total || 0);
  var score = Number(b.score || 0);
  var pct = total ? score / total : Number(b.percent || 0) / 100;
  sh.appendRow([
    new Date(), account.id, account.name, account.email, account.section,
    unit, String(b.testName || ''), score, total, pct,
    String(b.result || ''), attempt, String(b.reason || 'Submitted'), '', ''
  ]);
  sh.getRange(sh.getLastRow(), 10).setNumberFormat('0%');
  touchMaster_(account.id, unit, String(b.testName || 'Unit test'));
  refreshStudentManagementRow_(account.id);
  return { ok: true, attempt: attempt };
}

function handleProject_(b) {
  var account = requireAuth_(b, 'Student');
  var unit = String(b.unit || '');
  var projectName = String(b.projectName || '');
  var existing = projectRecord_(account.id, unit);
  if (existing && existing.submissionStatus && existing.submissionStatus !== 'Reset') {
    throw new Error('A project has already been submitted for this unit. Faculty must reset it before another submission.');
  }

  var type = String(b.submissionType || 'Link');
  var url = '';
  var driveFileId = '';
  var fileName = '';
  var reviewText = '';

  if (type === 'File') {
    fileName = safeFileName_(b.fileName);
    if (!/\.(py|ipynb)$/i.test(fileName)) throw new Error('Only .py and .ipynb files are accepted.');
    var bytes = Utilities.base64Decode(String(b.fileBase64 || ''));
    if (!bytes.length || bytes.length > MAX_PROJECT_BYTES) throw new Error('The project file must be 5 MB or smaller.');
    var mime = /\.ipynb$/i.test(fileName) ? 'application/json' : 'text/x-python';
    var blob = Utilities.newBlob(bytes, mime, fileName);
    var folder = projectFolder_();
    var storedName = safeFileName_(account.id + '_' + slug_(unit) + '_' + Date.now() + '_' + fileName);
    blob.setName(storedName);
    var file = folder.createFile(blob);
    driveFileId = file.getId();
    url = file.getUrl();
    reviewText = extractCodeForReview_(fileName, Utilities.newBlob(bytes).getDataAsString('UTF-8'));
  } else {
    type = 'Link';
    url = validateProjectUrl_(String(b.link || ''));
    reviewText = fetchReviewableCode_(url);
  }

  var review = reviewProject_(reviewText, unit, projectName);
  var rowValues = [
    new Date(), account.id, account.name, account.email, account.section, unit,
    projectName, type, url, driveFileId, fileName,
    review.score === '' ? '' : review.score,
    review.summary || '', listText_(review.strengths), listText_(review.issues),
    listText_(review.improvements), review.status,
    '', '', '', '', 'Pending Faculty Approval', '', ''
  ];

  var sh = sheetFor_(TAB_PROJECTS, HEAD[TAB_PROJECTS]);
  var row;
  if (existing) {
    row = existing.row;
    sh.getRange(row, 1, 1, HEAD[TAB_PROJECTS].length).setValues([rowValues]);
  } else {
    sh.appendRow(rowValues);
    row = sh.getLastRow();
  }
  touchMaster_(account.id, unit, projectName);
  refreshStudentManagementRow_(account.id);
  return {
    ok: true,
    submission: projectPublicRecord_(projectAtRow_(row), false)
  };
}

function handleHeartbeat_(b) {
  var account = requireAuth_(b, 'Student');
  var sh = sheetFor_(TAB_SESSIONS, HEAD[TAB_SESSIONS]);
  var sessionId = String(b.sessionId || '');
  if (!sessionId) throw new Error('Session ID was missing.');
  var cache = CacheService.getScriptCache();
  var key = 'sess_' + sessionId;
  var row = Number(cache.get(key) || 0);
  var now = new Date();

  if (!row && sh.getLastRow() >= 2) {
    var ids = sh.getRange(2, 1, sh.getLastRow() - 1, 1).getValues();
    for (var i = ids.length - 1; i >= 0; i--) {
      if (String(ids[i][0]) === sessionId) { row = i + 2; break; }
    }
  }

  if (row) {
    sh.getRange(row, 5).setValue(now);
    sh.getRange(row, 6).setValue(round1_(b.minutes));
    sh.getRange(row, 7).setValue(String(b.screen || ''));
  } else {
    sh.appendRow([sessionId, account.id, account.name, now, now, round1_(b.minutes), String(b.screen || '')]);
    row = sh.getLastRow();
  }
  cache.put(key, String(row), 21600);
  touchMaster_(account.id, '', String(b.screen || ''));
  return { ok: true };
}

function handleFlag_(b) {
  var account = requireAuth_(b, 'Student');
  sheetFor_(TAB_INTEGRITY, HEAD[TAB_INTEGRITY]).appendRow([
    new Date(), account.id, account.name, String(b.event || ''),
    String(b.where || ''), String(b.detail || '')
  ]);
  refreshStudentManagementRow_(account.id);
  return { ok: true };
}

function handleAsk_(b) {
  var account = requireAuth_(b);
  var props = PropertiesService.getScriptProperties();
  var key = props.getProperty('GEMINI_API_KEY');
  if (!key) return { ok: false, error: 'The AI helper is not configured yet.' };
  var model = props.getProperty('GEMINI_MODEL') || 'gemini-2.5-flash';

  var system =
    'You are the study helper inside AbhyasLab, a beginner Python learning portal. ' +
    'Current topic context: ' + String(b.context || 'Python') + '. ' +
    'Use very simple English and short paragraphs. Use tiny examples when useful. ' +
    'Do not provide a finished answer to a marked practice task. Explain the idea, ' +
    'give a smaller example, or point out the error instead.';

  var contents = [];
  (b.history || []).slice(-6).forEach(function (m) {
    contents.push({ role: m.role === 'model' ? 'model' : 'user', parts: [{ text: String(m.text || '') }] });
  });
  contents.push({ role: 'user', parts: [{ text: String(b.question || '') }] });

  var response = geminiRequest_(model, {
    system_instruction: { parts: [{ text: system }] },
    contents: contents,
    generationConfig: { temperature: 0.4, maxOutputTokens: 700 }
  });
  var reply = response.text;
  if (!reply) throw new Error('No answer came back. Try rephrasing the question.');

  if (account.role === 'Student') {
    sheetFor_(TAB_DOUBTS, HEAD[TAB_DOUBTS]).appendRow([
      new Date(), account.id, account.name, String(b.context || ''), String(b.question || ''), reply
    ]);
    refreshStudentManagementRow_(account.id);
  }
  return { ok: true, reply: reply };
}

/* ========================================================================== */
/* PROJECT AI REVIEW                                                          */
/* ========================================================================== */

function reviewProject_(code, unit, projectName) {
  if (!code) {
    return {
      score: '', summary: 'Automatic review was unavailable for this submission link.',
      strengths: [], issues: ['Faculty review is required.'], improvements: [],
      status: 'Manual Review Required'
    };
  }
  var key = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!key) {
    return {
      score: '', summary: 'AI project review is not configured.', strengths: [],
      issues: [], improvements: [], status: 'AI Not Configured'
    };
  }

  var model = PropertiesService.getScriptProperties().getProperty('GEMINI_MODEL') || 'gemini-2.5-flash';
  var prompt =
    'Review the following beginner Python project using static source-code analysis only. ' +
    'Do not claim that you executed the program. Unit: ' + unit + '. Project: ' + projectName + '.\n' +
    'Give a suggested score from 0 to 100. Consider required Python concepts, logic visible ' +
    'in the code, readability, naming, comments, likely runtime or logic errors, and completeness. ' +
    'Return ONLY valid JSON with this exact shape: ' +
    '{"score":0,"summary":"","strengths":[""],"issues":[""],"improvements":[""]}.\n\n' +
    'SOURCE CODE:\n' + String(code).slice(0, 90000);

  try {
    var res = geminiRequest_(model, {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 1200,
        responseMimeType: 'application/json'
      }
    });
    var parsed = JSON.parse(stripCodeFence_(res.text));
    var score = Math.max(0, Math.min(100, Number(parsed.score || 0)));
    return {
      score: Math.round(score),
      summary: String(parsed.summary || ''),
      strengths: arrayStrings_(parsed.strengths),
      issues: arrayStrings_(parsed.issues),
      improvements: arrayStrings_(parsed.improvements),
      status: 'Suggested — Awaiting Faculty Approval'
    };
  } catch (err) {
    return {
      score: '', summary: 'AI review failed and faculty review is required.',
      strengths: [], issues: [String(err.message || err)], improvements: [],
      status: 'Manual Review Required'
    };
  }
}

function geminiRequest_(model, payload) {
  var key = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!key) throw new Error('Gemini API key is missing.');
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
    encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key);
  var response = UrlFetchApp.fetch(url, {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify(payload)
  });
  var data;
  try { data = JSON.parse(response.getContentText()); }
  catch (err) { throw new Error('The AI service returned an unreadable response.'); }
  if (response.getResponseCode() !== 200) {
    throw new Error((data.error && data.error.message) || 'AI service error.');
  }
  var text = '';
  try {
    text = data.candidates[0].content.parts.map(function (p) { return p.text || ''; }).join('');
  } catch (err) {}
  return { text: text };
}

function extractCodeForReview_(fileName, text) {
  text = String(text || '');
  if (/\.py$/i.test(fileName)) return text;
  try {
    var notebook = JSON.parse(text);
    return (notebook.cells || []).filter(function (c) { return c.cell_type === 'code'; })
      .map(function (c, i) {
        var source = Array.isArray(c.source) ? c.source.join('') : String(c.source || '');
        return '# Notebook code cell ' + (i + 1) + '\n' + source;
      }).join('\n\n');
  } catch (err) {
    return text;
  }
}

function fetchReviewableCode_(url) {
  try {
    var target = url;
    var gh = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/i);
    if (gh) target = 'https://raw.githubusercontent.com/' + gh[1] + '/' + gh[2] + '/' + gh[3] + '/' + gh[4];
    var drive = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([-\w]+)/i);
    if (drive) target = 'https://drive.google.com/uc?export=download&id=' + drive[1];
    if (!/raw\.githubusercontent\.com|drive\.google\.com\/uc/i.test(target)) return '';
    var res = UrlFetchApp.fetch(target, { muteHttpExceptions: true, followRedirects: true });
    if (res.getResponseCode() !== 200) return '';
    var text = res.getContentText();
    return text.length <= 200000 ? text : text.slice(0, 200000);
  } catch (err) {
    return '';
  }
}

function projectFolder_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('PROJECT_FOLDER_ID');
  if (id) {
    try { return DriveApp.getFolderById(id); }
    catch (err) {}
  }
  var folders = DriveApp.getFoldersByName('AbhyasLab Project Submissions');
  var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder('AbhyasLab Project Submissions');
  props.setProperty('PROJECT_FOLDER_ID', folder.getId());
  return folder;
}

function validateProjectUrl_(raw) {
  raw = String(raw || '').trim();
  if (!/^https:\/\//i.test(raw)) throw new Error('Use a complete https:// project link.');
  if (!/(^|\.)github\.com$|(^|\.)drive\.google\.com$|(^|\.)docs\.google\.com$/i.test(hostFromUrl_(raw))) {
    throw new Error('Only GitHub or Google Drive links are accepted.');
  }
  return raw;
}

function hostFromUrl_(url) {
  var m = String(url).match(/^https:\/\/([^/]+)/i);
  return m ? m[1].toLowerCase().replace(/:\d+$/, '') : '';
}

/* ========================================================================== */
/* FACULTY WEBSITE API                                                        */
/* ========================================================================== */

function handleFacultyDashboard_(b) {
  var faculty = requireAuth_(b, 'Faculty');
  var data = gatherAll_();
  var visible = data.students.filter(function (s) { return canManageStudent_(faculty, s.account); });
  var pending = [];
  visible.forEach(function (s) {
    Object.keys(s.projects).forEach(function (unit) {
      var p = s.projects[unit];
      if (p.submissionStatus === 'Pending Faculty Approval') {
        pending.push(projectPublicRecord_(p, true));
      }
    });
  });
  return {
    ok: true,
    faculty: publicAccount_(faculty),
    sections: getManagedSections_(faculty.id),
    summary: dashboardSummary_(visible),
    students: visible.map(snapshotPublic_),
    pendingProjects: pending
  };
}

function handleFacultyStudent_(b) {
  var faculty = requireAuth_(b, 'Faculty');
  var account = accountById_(b.studentId);
  if (!account || account.role !== 'Student') throw new Error('Student was not found.');
  if (!canManageStudent_(faculty, account)) throw new Error('This student is outside your assigned sections.');
  var data = gatherAll_();
  var snap = data.byId[norm_(account.id)];
  return { ok: true, student: snapshotDetailed_(snap) };
}

function handleStudentAction_(b) {
  var faculty = requireAuth_(b, 'Faculty');
  var student = accountById_(b.studentId);
  if (!student || student.role !== 'Student') throw new Error('Student was not found.');
  if (!canManageStudent_(faculty, student)) throw new Error('This student is outside your assigned sections.');
  var result = executeStudentAction_(String(b.operation || ''), student.id, String(b.unit || ''), String(b.confirmation || ''), faculty.id);
  return { ok: true, result: result };
}

function handleApproveProject_(b) {
  var faculty = requireAuth_(b, 'Faculty');
  var student = accountById_(b.studentId);
  if (!student || !canManageStudent_(faculty, student)) throw new Error('Student was not found in your sections.');
  var record = projectRecord_(student.id, b.unit);
  if (!record || record.submissionStatus === 'Reset') throw new Error('There is no active project submission for this unit.');
  var score = Number(b.score);
  if (!isFinite(score) || score < 0 || score > 100) throw new Error('Approved score must be between 0 and 100.');
  var sh = sheetFor_(TAB_PROJECTS, HEAD[TAB_PROJECTS]);
  sh.getRange(record.row, 18).setValue(Math.round(score));
  sh.getRange(record.row, 19).setValue(String(b.feedback || ''));
  sh.getRange(record.row, 20).setValue(faculty.id);
  sh.getRange(record.row, 21).setValue(new Date());
  sh.getRange(record.row, 17).setValue('Approved');
  sh.getRange(record.row, 22).setValue('Approved');
  refreshStudentManagementRow_(student.id);
  return { ok: true, submission: projectPublicRecord_(projectAtRow_(record.row), true) };
}

/* ========================================================================== */
/* STUDENT ACTIONS — SHEET AND WEBSITE                                        */
/* ========================================================================== */

function executeStudentAction_(operation, studentId, unit, confirmation, actor) {
  operation = String(operation || '').trim();
  var student = accountById_(studentId);
  if (!student || student.role !== 'Student') throw new Error('Student was not found.');

  if (operation === 'Block') {
    setMasterStatus_(student.id, 'Blocked', new Date(), actor);
    clearToken_(student.row);
    refreshStudentManagementRow_(student.id);
    return 'Student blocked. Existing data was preserved.';
  }
  if (operation === 'Unblock') {
    setMasterStatus_(student.id, 'Active', '', actor);
    refreshStudentManagementRow_(student.id);
    return 'Student unblocked. Previous progress remains available.';
  }
  if (operation === 'Reset Test') {
    if (!unit) throw new Error('Choose a unit for the test reset.');
    resetTest_(student.id, unit, actor);
    refreshStudentManagementRow_(student.id);
    return unit + ' test reset. The student can take it again.';
  }
  if (operation === 'Reset Project') {
    if (!unit) throw new Error('Choose a unit for the project reset.');
    resetProject_(student.id, unit, actor);
    refreshStudentManagementRow_(student.id);
    return unit + ' project reset. A new submission is now allowed.';
  }
  if (operation === 'Delete Permanently') {
    if (norm_(confirmation) !== norm_(student.id)) {
      throw new Error('Type the exact student ID in the Confirmation column.');
    }
    var removed = purgeStudent_(student.id);
    return 'Student permanently deleted. ' + removed + ' database rows were removed.';
  }
  if (operation === 'View Report') {
    buildStudentReport_(student.id);
    return 'Student report opened.';
  }
  throw new Error('Choose a valid action.');
}

function resetTest_(studentId, unit, actor) {
  var sh = sheetFor_(TAB_TESTS, HEAD[TAB_TESTS]);
  if (sh.getLastRow() < 2) return;
  var vals = sh.getRange(2, 1, sh.getLastRow() - 1, HEAD[TAB_TESTS].length).getValues();
  var now = new Date();
  for (var i = 0; i < vals.length; i++) {
    if (norm_(vals[i][1]) === norm_(studentId) && norm_(vals[i][5]) === norm_(unit) && !vals[i][13]) {
      sh.getRange(i + 2, 14).setValue(now);
      sh.getRange(i + 2, 15).setValue(actor);
    }
  }
}

function resetProject_(studentId, unit, actor) {
  var record = projectRecord_(studentId, unit);
  if (!record) return;
  if (record.driveFileId) {
    try { DriveApp.getFileById(record.driveFileId).setTrashed(true); }
    catch (err) {}
  }
  var sh = sheetFor_(TAB_PROJECTS, HEAD[TAB_PROJECTS]);
  sh.getRange(record.row, 22).setValue('Reset');
  sh.getRange(record.row, 23).setValue(new Date());
  sh.getRange(record.row, 24).setValue(actor);
}

function purgeStudent_(studentId) {
  var id = norm_(studentId);
  var removed = 0;

  var projects = sheetFor_(TAB_PROJECTS, HEAD[TAB_PROJECTS]);
  if (projects.getLastRow() >= 2) {
    var pvals = projects.getRange(2, 1, projects.getLastRow() - 1, HEAD[TAB_PROJECTS].length).getValues();
    pvals.forEach(function (r) {
      if (norm_(r[1]) === id && r[9]) {
        try { DriveApp.getFileById(String(r[9])).setTrashed(true); }
        catch (err) {}
      }
    });
  }

  [
    { name: TAB_MASTER, col: 2 },
    { name: TAB_MANAGEMENT, col: 1 },
    { name: TAB_PROGRESS, col: 2 },
    { name: TAB_TESTS, col: 2 },
    { name: TAB_PROJECTS, col: 2 },
    { name: TAB_DOUBTS, col: 2 },
    { name: TAB_SESSIONS, col: 2 },
    { name: TAB_INTEGRITY, col: 2 }
  ].forEach(function (t) {
    var sh = SpreadsheetApp.getActive().getSheetByName(t.name);
    if (!sh || sh.getLastRow() < 2) return;
    var vals = sh.getRange(2, t.col, sh.getLastRow() - 1, 1).getValues();
    for (var i = vals.length - 1; i >= 0; i--) {
      if (norm_(vals[i][0]) === id) { sh.deleteRow(i + 2); removed++; }
    }
  });
  refreshAll();
  return removed;
}

/* ========================================================================== */
/* DATA GATHERING AND PROGRESS CALCULATION                                    */
/* ========================================================================== */

function gatherAll_() {
  var students = [];
  var byId = {};
  masterRows_().filter(function (a) { return a.role === 'Student'; }).forEach(function (a) {
    var s = {
      account: a,
      progress: {}, tests: {}, projects: {}, minutes: 0, sessions: 0,
      doubts: 0, flags: 0, flagKinds: {}, lastDoubts: []
    };
    students.push(s);
    byId[norm_(a.id)] = s;
  });

  rowsByHeaders_(TAB_PROGRESS, HEAD[TAB_PROGRESS]).forEach(function (r) {
    var s = byId[norm_(r[1])]; if (!s) return;
    s.progress[String(r[6])] = {
      updatedAt: r[0], unit: r[5], stepId: r[6], stepType: r[7], stepName: r[8],
      mcqBest: Number(r[9]) || 0, mcqTotal: Number(r[10]) || 0,
      tasksCompleted: Number(r[12]) || 0, tasksTotal: Number(r[13]) || 0,
      taskIds: parseJsonArray_(r[14]), status: r[15], startedAt: r[16], completedAt: r[17]
    };
  });

  rowsByHeaders_(TAB_TESTS, HEAD[TAB_TESTS]).forEach(function (r) {
    var s = byId[norm_(r[1])]; if (!s) return;
    var unit = String(r[5] || '');
    if (!s.tests[unit]) s.tests[unit] = { attempts: [], best: null, total: 0, passed: false, resetAt: null };
    if (r[13]) {
      if (!s.tests[unit].resetAt || r[13] > s.tests[unit].resetAt) s.tests[unit].resetAt = r[13];
      return;
    }
    s.tests[unit].attempts.push({
      when: r[0], score: Number(r[7]) || 0, total: Number(r[8]) || 0,
      pct: normalPercent_(r[9]), result: r[10], attempt: r[11], reason: r[12]
    });
    s.tests[unit].total = Number(r[8]) || s.tests[unit].total;
    if (s.tests[unit].best == null || Number(r[7]) > s.tests[unit].best) s.tests[unit].best = Number(r[7]);
    if (String(r[10]) === 'Pass') s.tests[unit].passed = true;
  });

  rowsByHeaders_(TAB_PROJECTS, HEAD[TAB_PROJECTS]).forEach(function (r, idx) {
    var s = byId[norm_(r[1])]; if (!s) return;
    var p = projectFromValues_(r, idx + 2);
    s.projects[p.unit] = p;
  });

  rowsByHeaders_(TAB_SESSIONS, HEAD[TAB_SESSIONS]).forEach(function (r) {
    var s = byId[norm_(r[1])]; if (!s) return;
    s.minutes += Number(r[5]) || 0;
    s.sessions++;
  });

  rowsByHeaders_(TAB_DOUBTS, HEAD[TAB_DOUBTS]).forEach(function (r) {
    var s = byId[norm_(r[1])]; if (!s) return;
    s.doubts++;
    s.lastDoubts.push({ when: r[0], context: r[3], question: r[4] });
    if (s.lastDoubts.length > 10) s.lastDoubts.shift();
  });

  rowsByHeaders_(TAB_INTEGRITY, HEAD[TAB_INTEGRITY]).forEach(function (r) {
    var s = byId[norm_(r[1])]; if (!s) return;
    s.flags++;
    s.flagKinds[String(r[3] || '')] = (s.flagKinds[String(r[3] || '')] || 0) + 1;
  });

  students.forEach(calculateSnapshot_);
  return { students: students, byId: byId, schema: courseSchema_() };
}

function calculateSnapshot_(s) {
  var schema = courseSchema_();
  var units = schema.units || [];
  if (!units.length) units = inferUnits_(s);

  var totalSteps = 0, stepsDone = 0, weightedTotal = 0;
  var unitSummaries = [], testSummaries = [], projectSummaries = [];

  units.forEach(function (u) {
    var topicSteps = u.steps || [];
    var topicDone = topicSteps.filter(function (step) {
      return s.progress[step.id] && s.progress[step.id].status === 'Completed';
    }).length;
    var test = s.tests[u.unit] || { attempts: [], best: null, total: 0, passed: false };
    var project = s.projects[u.unit];
    var projectDone = !!project && project.submissionStatus !== 'Reset';
    var unitTotal = topicSteps.length + (u.testId ? 1 : 0) + (u.projectId ? 1 : 0);
    var unitDone = topicDone + (test.passed ? 1 : 0) + (projectDone ? 1 : 0);
    totalSteps += unitTotal;
    stepsDone += unitDone;

    var topicPct = topicSteps.length ? topicDone / topicSteps.length : 0;
    var weighted = topicPct * 0.60 + (test.passed ? 0.20 : 0) + (projectDone ? 0.20 : 0);
    weightedTotal += weighted;

    unitSummaries.push(u.unit + ': ' + unitDone + '/' + unitTotal + ' (' + Math.round((unitTotal ? unitDone / unitTotal : 0) * 100) + '%)');
    testSummaries.push(u.unit + ': ' + (test.attempts.length ? ((test.best == null ? 0 : test.best) + '/' + (test.total || 0) + (test.passed ? ' Pass' : ' Not cleared')) : 'Not attempted'));
    projectSummaries.push(u.unit + ': ' + (!project ? 'Not submitted' : project.submissionStatus));
  });

  if (!units.length) {
    var progressRows = Object.keys(s.progress);
    totalSteps = progressRows.length;
    stepsDone = progressRows.filter(function (id) { return s.progress[id].status === 'Completed'; }).length;
  }

  var days = s.account.lastSeen instanceof Date
    ? Math.max(0, Math.floor((Date.now() - s.account.lastSeen.getTime()) / 86400000)) : '';
  var status = s.account.status === 'Blocked' ? 'Blocked'
    : (!s.account.profileComplete ? 'Profile incomplete'
      : (totalSteps && stepsDone === totalSteps ? 'Completed'
      : (days !== '' && days >= INACTIVE_DAYS ? 'Inactive' : 'Active')));

  s.stepsDone = stepsDone;
  s.stepsTotal = totalSteps;
  s.stepProgress = totalSteps ? stepsDone / totalSteps : 0;
  s.weightedProgress = units.length ? weightedTotal / units.length : s.stepProgress;
  s.unitSummary = unitSummaries.join('\n');
  s.testSummary = testSummaries.join('\n');
  s.projectSummary = projectSummaries.join('\n');
  s.daysInactive = days;
  s.displayStatus = status;
  s.facultyOwners = sectionOwners_(s.account.section);
  return s;
}

function inferUnits_(s) {
  var map = {};
  Object.keys(s.progress).forEach(function (id) {
    var p = s.progress[id];
    map[p.unit] = map[p.unit] || { unit: p.unit, title: p.unit, steps: [], testId: '', projectId: '' };
    map[p.unit].steps.push({ id: p.stepId, type: p.stepType, title: p.stepName });
  });
  Object.keys(s.tests).forEach(function (unit) {
    map[unit] = map[unit] || { unit: unit, title: unit, steps: [], testId: 'test:' + unit, projectId: '' };
    map[unit].testId = 'test:' + unit;
  });
  Object.keys(s.projects).forEach(function (unit) {
    map[unit] = map[unit] || { unit: unit, title: unit, steps: [], testId: '', projectId: 'proj:' + unit };
    map[unit].projectId = 'proj:' + unit;
  });
  return Object.keys(map).sort().map(function (k) { return map[k]; });
}

function studentSyncState_(studentId) {
  var data = gatherAll_();
  var s = data.byId[norm_(studentId)];
  if (!s) return { progress: {}, tests: {}, projects: {} };
  var projects = {};
  Object.keys(s.projects).forEach(function (unit) {
    projects[unit] = projectPublicRecord_(s.projects[unit], false);
  });
  return {
    progress: s.progress,
    tests: s.tests,
    projects: projects,
    summary: snapshotPublic_(s)
  };
}

function snapshotPublic_(s) {
  return {
    id: s.account.id, name: s.account.name, email: s.account.email,
    section: s.account.section, status: s.displayStatus,
    registered: dateIso_(s.account.registered), lastSeen: dateIso_(s.account.lastSeen),
    currentUnit: s.account.currentUnit, currentStep: s.account.currentStep,
    daysInactive: s.daysInactive, stepsDone: s.stepsDone, stepsTotal: s.stepsTotal,
    stepProgress: s.stepProgress, weightedProgress: s.weightedProgress,
    unitSummary: s.unitSummary, testSummary: s.testSummary,
    projectSummary: s.projectSummary, minutes: round1_(s.minutes), sessions: s.sessions,
    doubts: s.doubts, flags: s.flags, facultyOwners: s.facultyOwners
  };
}

function snapshotDetailed_(s) {
  var base = snapshotPublic_(s);
  base.progress = s.progress;
  base.tests = s.tests;
  base.projects = {};
  Object.keys(s.projects).forEach(function (unit) { base.projects[unit] = projectPublicRecord_(s.projects[unit], true); });
  base.flagKinds = s.flagKinds;
  base.lastDoubts = s.lastDoubts;
  return base;
}

function dashboardSummary_(students) {
  var summary = {
    total: students.length, active: 0, inactive: 0, blocked: 0, completed: 0,
    projectsPending: 0, studentsNeedingAttention: 0, doubts: 0, minutes: 0
  };
  students.forEach(function (s) {
    if (s.displayStatus === 'Active') summary.active++;
    if (s.displayStatus === 'Inactive') summary.inactive++;
    if (s.displayStatus === 'Blocked') summary.blocked++;
    if (s.displayStatus === 'Completed') summary.completed++;
    if (s.flags >= 3 || (s.daysInactive !== '' && s.daysInactive >= INACTIVE_DAYS) || /Not cleared/.test(s.testSummary)) summary.studentsNeedingAttention++;
    summary.doubts += s.doubts;
    summary.minutes += s.minutes;
    Object.keys(s.projects).forEach(function (u) {
      if (s.projects[u].submissionStatus === 'Pending Faculty Approval') summary.projectsPending++;
    });
  });
  summary.minutes = Math.round(summary.minutes);
  return summary;
}

/* ========================================================================== */
/* GOOGLE SHEET VIEWS                                                         */
/* ========================================================================== */

function refreshAll() {
  ensureCoreSheets_();
  var data = gatherAll_();
  buildStudentManagement_(data);
  buildDashboard_(data);
  ensureStudentReportPicker_();
  var reportId = SpreadsheetApp.getActive().getSheetByName(TAB_REPORT).getRange('B2').getValue();
  if (reportId) buildStudentReport_(reportId, data);
}

function buildStudentManagement_(data) {
  data = data || gatherAll_();
  var sh = sheetFor_(TAB_MANAGEMENT, HEAD[TAB_MANAGEMENT]);
  sh.setConditionalFormatRules([]);
  sh.getRange(2, 1, Math.max(sh.getMaxRows() - 1, 1), HEAD[TAB_MANAGEMENT].length).clearContent();

  var rows = data.students.map(managementRow_);
  if (rows.length) sh.getRange(2, 1, rows.length, HEAD[TAB_MANAGEMENT].length).setValues(rows);
  styleManagement_(sh, rows.length);
}

function managementRow_(s) {
  return [
    s.account.id, s.account.name, s.account.email, s.account.section,
    s.displayStatus, s.account.registered || '', s.account.lastSeen || '',
    s.daysInactive, s.account.currentUnit || '', s.account.currentStep || '',
    s.stepsDone, s.stepsTotal, s.stepProgress, s.weightedProgress,
    s.unitSummary, s.testSummary, s.projectSummary, round1_(s.minutes),
    s.sessions, s.doubts, s.flags, s.facultyOwners.join(', '),
    'No Action', '', '', ''
  ];
}

function refreshStudentManagementRow_(studentId) {
  var data = gatherAll_();
  var s = data.byId[norm_(studentId)];
  var sh = sheetFor_(TAB_MANAGEMENT, HEAD[TAB_MANAGEMENT]);
  var row = findRow_(sh, 1, studentId);
  if (!s) {
    if (row) sh.deleteRow(row);
    return;
  }
  var values = [managementRow_(s)];
  if (row) sh.getRange(row, 1, 1, HEAD[TAB_MANAGEMENT].length).setValues(values);
  else {
    sh.appendRow(values[0]);
    row = sh.getLastRow();
  }
  styleManagement_(sh, Math.max(sh.getLastRow() - 1, 0));
}

function styleManagement_(sh, count) {
  styleHeader_(sh, HEAD[TAB_MANAGEMENT].length);
  sh.setFrozenColumns(2);
  if (count) {
    sh.getRange(2, 13, count, 2).setNumberFormat('0%');
    sh.getRange(2, 6, count, 2).setNumberFormat('dd-mmm-yyyy hh:mm');
    sh.getRange(2, 15, count, 3).setWrap(true);
    sh.getRange(2, 23, count, 1).setDataValidation(
      SpreadsheetApp.newDataValidation().requireValueInList(ACTIONS, true).setAllowInvalid(false).build()
    );
    addStatusRules_(sh.getRange(2, 5, count, 1));
    addProgressRules_(sh.getRange(2, 13, count, 2));
  }
  sh.setColumnWidth(1, 120); sh.setColumnWidth(2, 170); sh.setColumnWidth(3, 210);
  sh.setColumnWidth(4, 130); sh.setColumnWidth(9, 100); sh.setColumnWidth(10, 220);
  sh.setColumnWidth(15, 260); sh.setColumnWidth(16, 240); sh.setColumnWidth(17, 240);
  sh.setColumnWidth(23, 150); sh.setColumnWidth(24, 110); sh.setColumnWidth(25, 130);
  sh.setColumnWidth(26, 260);
}

function buildDashboard_(data) {
  data = data || gatherAll_();
  var sh = blankSheet_(TAB_DASHBOARD);
  sh.clear();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });
  var summary = dashboardSummary_(data.students);

  sh.getRange('A1:H1').merge().setValue('AbhyasLab Faculty Dashboard')
    .setBackground(INK).setFontColor(PAPER).setFontSize(20).setFontWeight('bold');
  sh.getRange('A2:H2').merge().setValue('Updated ' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd-MMM-yyyy HH:mm'))
    .setFontColor('#59617C');

  var cards = [
    ['Total students', summary.total], ['Active', summary.active],
    ['Inactive', summary.inactive], ['Blocked', summary.blocked],
    ['Completed', summary.completed], ['Pending projects', summary.projectsPending],
    ['Need attention', summary.studentsNeedingAttention], ['Total learning minutes', summary.minutes]
  ];
  for (var i = 0; i < cards.length; i++) {
    var col = (i % 4) * 2 + 1;
    var row = 4 + Math.floor(i / 4) * 3;
    sh.getRange(row, col, 2, 2).merge();
    sh.getRange(row, col).setValue(cards[i][1]).setFontSize(22).setFontWeight('bold')
      .setHorizontalAlignment('center').setVerticalAlignment('middle')
      .setBackground(i === 2 || i === 3 || i === 6 ? '#F9DCD7' : '#E8F2F0');
    sh.getRange(row + 2, col, 1, 2).merge().setValue(cards[i][0])
      .setHorizontalAlignment('center').setFontWeight('bold').setFontColor('#59617C');
  }

  var start = 11;
  sh.getRange(start, 1, 1, 7).setValues([[
    'Student ID', 'Name', 'Section', 'Status', 'Weighted Progress', 'Last Active', 'Attention'
  ]]).setBackground(INK).setFontColor(PAPER).setFontWeight('bold');
  var attention = data.students.slice().sort(function (a, b) {
    var aScore = (a.flags >= 3 ? 4 : 0) + (a.daysInactive >= INACTIVE_DAYS ? 3 : 0) + (/Not cleared/.test(a.testSummary) ? 2 : 0);
    var bScore = (b.flags >= 3 ? 4 : 0) + (b.daysInactive >= INACTIVE_DAYS ? 3 : 0) + (/Not cleared/.test(b.testSummary) ? 2 : 0);
    return bScore - aScore;
  }).slice(0, 20).map(function (s) {
    var notes = [];
    if (s.flags >= 3) notes.push(s.flags + ' integrity flags');
    if (s.daysInactive !== '' && s.daysInactive >= INACTIVE_DAYS) notes.push(s.daysInactive + ' inactive days');
    if (/Not cleared/.test(s.testSummary)) notes.push('test not cleared');
    if (!notes.length) notes.push('on track');
    return [s.account.id, s.account.name, s.account.section, s.displayStatus,
      s.weightedProgress, s.account.lastSeen || '', notes.join(', ')];
  });
  if (attention.length) {
    sh.getRange(start + 1, 1, attention.length, 7).setValues(attention);
    sh.getRange(start + 1, 5, attention.length, 1).setNumberFormat('0%');
    sh.getRange(start + 1, 6, attention.length, 1).setNumberFormat('dd-mmm-yyyy hh:mm');
  }

  sh.setFrozenRows(2);
  sh.setColumnWidth(1, 120); sh.setColumnWidth(2, 180); sh.setColumnWidth(3, 140);
  sh.setColumnWidth(4, 110); sh.setColumnWidth(5, 140); sh.setColumnWidth(6, 160);
  sh.setColumnWidth(7, 260);
}

function ensureStudentReportPicker_() {
  var sh = blankSheet_(TAB_REPORT);
  if (sh.getRange('A1').getValue() !== 'Student Report') {
    sh.clear();
    sh.getRange('A1:D1').merge().setValue('Student Report')
      .setBackground(INK).setFontColor(PAPER).setFontSize(18).setFontWeight('bold');
    sh.getRange('A2').setValue('Student ID').setFontWeight('bold');
    sh.getRange('C2').setValue('Select a student; the report updates automatically.').setFontColor('#59617C');
  }
  var management = sheetFor_(TAB_MANAGEMENT, HEAD[TAB_MANAGEMENT]);
  sh.getRange('B2').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInRange(management.getRange('A2:A'), true)
      .setAllowInvalid(false).build()
  );
}

function buildStudentReport_(studentId, data) {
  data = data || gatherAll_();
  var s = data.byId[norm_(studentId)];
  var sh = blankSheet_(TAB_REPORT);
  var picker = sh.getRange('B2').getValue();
  sh.getRange('A4:H1000').clearContent().clearFormat();
  if (!s) return;
  sh.getRange('B2').setValue(s.account.id);

  var r = 4;
  function head(text) {
    sh.getRange(r, 1, 1, 5).merge().setValue(text)
      .setBackground(INK).setFontColor(PAPER).setFontWeight('bold');
    r++;
  }
  function put(label, value) {
    sh.getRange(r, 1).setValue(label).setFontWeight('bold');
    sh.getRange(r, 2).setValue(value);
    r++;
  }

  head('Student profile');
  put('Name', s.account.name); put('Student ID', s.account.id); put('Email', s.account.email);
  put('Section', s.account.section); put('Status', s.displayStatus);
  put('Registered', s.account.registered || ''); put('Last active', s.account.lastSeen || '');
  put('Current unit', s.account.currentUnit || ''); put('Current step', s.account.currentStep || '');

  head('Overall progress');
  put('Completed steps', s.stepsDone + ' / ' + s.stepsTotal);
  put('Step progress', s.stepProgress); sh.getRange(r - 1, 2).setNumberFormat('0%');
  put('Weighted progress', s.weightedProgress); sh.getRange(r - 1, 2).setNumberFormat('0%');
  put('Unit summary', s.unitSummary);

  head('Time and engagement');
  put('Total minutes', round1_(s.minutes)); put('Sessions', s.sessions);
  put('Doubts asked', s.doubts); put('Integrity flags', s.flags);

  head('Topic and checkpoint progress');
  sh.getRange(r, 1, 1, 8).setValues([[
    'Unit', 'Step', 'Type', 'MCQ', 'MCQ %', 'Tasks', 'Status', 'Completed At'
  ]]).setBackground('#31436F').setFontColor(PAPER).setFontWeight('bold');
  r++;
  Object.keys(s.progress).sort(function (a, b) {
    return String(s.progress[a].unit + s.progress[a].stepName).localeCompare(String(s.progress[b].unit + s.progress[b].stepName));
  }).forEach(function (id) {
    var p = s.progress[id];
    sh.getRange(r, 1, 1, 8).setValues([[
      p.unit, p.stepName, p.stepType,
      p.mcqTotal ? p.mcqBest + '/' + p.mcqTotal : '—',
      p.mcqTotal ? p.mcqBest / p.mcqTotal : '',
      p.tasksCompleted + '/' + p.tasksTotal, p.status, p.completedAt || ''
    ]]);
    sh.getRange(r, 5).setNumberFormat('0%');
    r++;
  });

  head('Tests');
  Object.keys(s.tests).sort().forEach(function (unit) {
    var t = s.tests[unit];
    put(unit, t.attempts.length ? (t.best + '/' + t.total + (t.passed ? ' — Pass' : ' — Not cleared')) : 'Not attempted');
  });

  head('Projects');
  Object.keys(s.projects).sort().forEach(function (unit) {
    var p = s.projects[unit];
    put(unit, p.submissionStatus + (p.approvedScore !== '' ? ' — ' + p.approvedScore + '/100' : ''));
    if (p.url) put('Link', p.url);
    if (p.facultyFeedback) put('Faculty feedback', p.facultyFeedback);
  });

  head('Recent doubts');
  s.lastDoubts.slice().reverse().forEach(function (d) {
    put(dateIso_(d.when) + ' · ' + d.context, d.question);
  });

  sh.setColumnWidth(1, 200); sh.setColumnWidth(2, 260); sh.setColumnWidth(3, 130);
  sh.setColumnWidth(4, 100); sh.setColumnWidth(5, 100); sh.setColumnWidth(6, 100);
  sh.setColumnWidth(7, 120); sh.setColumnWidth(8, 150);
  sh.getRange('A1:H' + Math.max(r, 4)).setWrap(true).setVerticalAlignment('top');
}

function handleManagementEdit(e) {
  if (!e || !e.range) return;
  var sh = e.range.getSheet();
  if (sh.getName() === TAB_REPORT && e.range.getA1Notation() === 'B2') {
    buildStudentReport_(e.value || '');
    return;
  }
  if (sh.getName() !== TAB_MANAGEMENT || e.range.getColumn() !== 23 || e.range.getRow() < 2) return;
  var row = e.range.getRow();
  var id = sh.getRange(row, 1).getValue();
  var action = sh.getRange(row, 23).getValue();
  var unit = sh.getRange(row, 24).getValue();
  var confirmation = sh.getRange(row, 25).getValue();
  var resultCell = sh.getRange(row, 26);
  try {
    if (!action || action === 'No Action') return;
    var result = executeStudentAction_(action, id, unit, confirmation, 'Sheet faculty action');
    if (action === 'Delete Permanently') return;
    resultCell.setValue(result).setFontColor('#1E5B32');
  } catch (err) {
    resultCell.setValue(String(err.message || err)).setFontColor('#8C2318');
  } finally {
    if (sh.getLastRow() >= row) sh.getRange(row, 23).setValue('No Action');
  }
}

function ensureManagementValidation_() {
  var sh = sheetFor_(TAB_MANAGEMENT, HEAD[TAB_MANAGEMENT]);
  sh.getRange('W2:W').setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(ACTIONS, true).setAllowInvalid(false).build()
  );
}

/* ========================================================================== */
/* SHEET MENU ACTIONS                                                         */
/* ========================================================================== */

function addFacultyPrompt() {
  var ui = SpreadsheetApp.getUi();
  var idRes = ui.prompt('Faculty account', 'Faculty ID:', ui.ButtonSet.OK_CANCEL);
  if (idRes.getSelectedButton() !== ui.Button.OK) return;
  var id = cleanId_(idRes.getResponseText());
  validateIdForRole_(id, 'Faculty');
  var nameRes = ui.prompt('Faculty account', 'Faculty full name:', ui.ButtonSet.OK_CANCEL);
  if (nameRes.getSelectedButton() !== ui.Button.OK) return;
  var name = cleanName_(nameRes.getResponseText());
  if (name.length < 3) throw new Error('Faculty name is too short.');
  var pinRes = ui.prompt('Faculty account', 'Private four-digit PIN:', ui.ButtonSet.OK_CANCEL);
  if (pinRes.getSelectedButton() !== ui.Button.OK) return;
  var pin = String(pinRes.getResponseText()).trim();
  validatePin_(pin);

  var account = accountById_(id);
  var salt = newSalt_();
  var values = {
    id: id, role: 'Faculty', name: name, email: account ? account.email : '',
    section: '', managedSections: account ? account.managedSections : '',
    status: 'Active', course: 'Python Programming',
    registered: account ? account.registered : new Date(), lastSeen: account ? account.lastSeen : '',
    currentUnit: '', currentStep: '', salt: salt, pinHash: pinHash_(id, pin, salt),
    tokenHash: '', tokenExpiry: '', lastLogin: '', profileComplete: true,
    notes: account ? account.notes : 'Faculty account created from the Sheet menu.'
  };
  if (account) updateMaster_(account.row, values); else appendMaster_(values);
  ui.alert('Faculty account saved.');
}

function createSectionPrompt() {
  var ui = SpreadsheetApp.getUi();
  var idRes = ui.prompt('Create or assign section', 'Faculty ID:', ui.ButtonSet.OK_CANCEL);
  if (idRes.getSelectedButton() !== ui.Button.OK) return;
  var faculty = accountById_(idRes.getResponseText());
  if (!faculty || faculty.role !== 'Faculty') return ui.alert('Faculty ID was not found.');
  var sectionRes = ui.prompt('Create or assign section', 'Section name:', ui.ButtonSet.OK_CANCEL);
  if (sectionRes.getSelectedButton() !== ui.Button.OK) return;
  var section = cleanSection_(sectionRes.getResponseText());
  var sh = sheetFor_(TAB_SYSTEM, HEAD[TAB_SYSTEM]);
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === 'Section' && norm_(rows[i][1]) === norm_(section) && norm_(rows[i][3]) === norm_(faculty.id)) {
      sh.getRange(i + 1, 5).setValue(true);
      syncManagedSectionsText_(faculty.id);
      return ui.alert('Section assigned.');
    }
  }
  sh.appendRow(['Section', norm_(section), section, faculty.id, true, new Date(), 'Created from Sheet menu.']);
  syncManagedSectionsText_(faculty.id);
  refreshAll();
  ui.alert('Section created and assigned.');
}

function selectedManagementStudent_() {
  var sh = SpreadsheetApp.getActiveSheet();
  if (sh.getName() !== TAB_MANAGEMENT || sh.getActiveRange().getRow() < 2) {
    throw new Error('Select a student row in Student_Management first.');
  }
  return String(sh.getRange(sh.getActiveRange().getRow(), 1).getValue());
}

function openSelectedStudentReport() {
  var id = selectedManagementStudent_();
  buildStudentReport_(id);
  SpreadsheetApp.getActive().setActiveSheet(SpreadsheetApp.getActive().getSheetByName(TAB_REPORT));
}
function blockSelectedStudent() { executeStudentAction_('Block', selectedManagementStudent_(), '', '', 'Sheet menu'); refreshAll(); }
function unblockSelectedStudent() { executeStudentAction_('Unblock', selectedManagementStudent_(), '', '', 'Sheet menu'); refreshAll(); }
function resetSelectedStudentTest() {
  var id = selectedManagementStudent_();
  var unit = promptUnit_('Reset test'); if (!unit) return;
  executeStudentAction_('Reset Test', id, unit, '', 'Sheet menu'); refreshAll();
}
function resetSelectedStudentProject() {
  var id = selectedManagementStudent_();
  var unit = promptUnit_('Reset project'); if (!unit) return;
  executeStudentAction_('Reset Project', id, unit, '', 'Sheet menu'); refreshAll();
}
function deleteSelectedStudent() {
  var id = selectedManagementStudent_();
  var ui = SpreadsheetApp.getUi();
  var res = ui.prompt('Permanent deletion', 'Type the exact student ID to confirm:', ui.ButtonSet.OK_CANCEL);
  if (res.getSelectedButton() !== ui.Button.OK) return;
  executeStudentAction_('Delete Permanently', id, '', res.getResponseText(), 'Sheet menu');
  ui.alert('Student permanently deleted.');
}
function promptUnit_(title) {
  var res = SpreadsheetApp.getUi().prompt(title, 'Type the unit exactly, for example Unit 1:', SpreadsheetApp.getUi().ButtonSet.OK_CANCEL);
  return res.getSelectedButton() === SpreadsheetApp.getUi().Button.OK ? res.getResponseText().trim() : '';
}

/* ========================================================================== */
/* MASTER SHEET HELPERS                                                       */
/* ========================================================================== */

function masterRows_() {
  var sh = sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]);
  if (sh.getLastRow() < 2) return [];
  var vals = sh.getRange(2, 1, sh.getLastRow() - 1, HEAD[TAB_MASTER].length).getValues();
  return vals.map(function (r, i) { return accountFromValues_(r, i + 2); });
}

function accountById_(id) {
  var target = norm_(id);
  var rows = masterRows_();
  for (var i = 0; i < rows.length; i++) if (norm_(rows[i].id) === target) return rows[i];
  return null;
}

function accountAtRow_(row) {
  var sh = sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]);
  return accountFromValues_(sh.getRange(row, 1, 1, HEAD[TAB_MASTER].length).getValues()[0], row);
}

function accountFromValues_(r, row) {
  return {
    row: row, created: r[0], id: String(r[1] || ''), role: String(r[2] || ''),
    name: String(r[3] || ''), email: String(r[4] || ''), section: String(r[5] || ''),
    managedSections: String(r[6] || ''), status: String(r[7] || 'Active'),
    course: String(r[8] || ''), registered: r[9], lastSeen: r[10],
    currentUnit: String(r[11] || ''), currentStep: String(r[12] || ''),
    salt: String(r[13] || ''), pinHash: String(r[14] || ''), tokenHash: String(r[15] || ''),
    authExpires: r[16], lastLogin: r[17], profileComplete: r[18] === true || String(r[18]).toLowerCase() === 'true',
    blockedOn: r[19], blockedBy: r[20], notes: String(r[21] || '')
  };
}

function appendMaster_(x) {
  var sh = sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]);
  sh.appendRow(masterValues_(x, null));
  return sh.getLastRow();
}

function updateMaster_(row, x) {
  var existing = accountAtRow_(row);
  sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]).getRange(row, 1, 1, HEAD[TAB_MASTER].length)
    .setValues([masterValues_(x, existing)]);
  return row;
}

function masterValues_(x, old) {
  old = old || {};
  return [
    old.created || x.created || new Date(), x.id || old.id || '', x.role || old.role || 'Student',
    x.name != null ? x.name : old.name || '', x.email != null ? x.email : old.email || '',
    x.section != null ? x.section : old.section || '',
    x.managedSections != null ? x.managedSections : old.managedSections || '',
    x.status || old.status || 'Active', x.course || old.course || 'Python Programming',
    x.registered || old.registered || new Date(), x.lastSeen != null ? x.lastSeen : old.lastSeen || '',
    x.currentUnit != null ? x.currentUnit : old.currentUnit || '',
    x.currentStep != null ? x.currentStep : old.currentStep || '',
    x.salt != null ? x.salt : old.salt || '', x.pinHash != null ? x.pinHash : old.pinHash || '',
    x.tokenHash != null ? x.tokenHash : old.tokenHash || '',
    x.tokenExpiry != null ? x.tokenExpiry : old.authExpires || '',
    x.lastLogin != null ? x.lastLogin : old.lastLogin || '',
    x.profileComplete != null ? !!x.profileComplete : !!old.profileComplete,
    x.blockedOn != null ? x.blockedOn : old.blockedOn || '',
    x.blockedBy != null ? x.blockedBy : old.blockedBy || '',
    x.notes != null ? x.notes : old.notes || ''
  ];
}

function setMasterStatus_(id, status, blockedOn, actor) {
  var a = accountById_(id);
  if (!a) return;
  var sh = sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]);
  sh.getRange(a.row, 8).setValue(status);
  sh.getRange(a.row, 20).setValue(status === 'Blocked' ? (blockedOn || new Date()) : '');
  sh.getRange(a.row, 21).setValue(status === 'Blocked' ? actor : '');
  if (status === 'Blocked') clearToken_(a.row);
}

function touchMaster_(id, unit, step) {
  var a = accountById_(id); if (!a) return;
  var sh = sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]);
  sh.getRange(a.row, 11).setValue(new Date());
  if (unit) sh.getRange(a.row, 12).setValue(unit);
  if (step) sh.getRange(a.row, 13).setValue(step);
}

function syncManagedSectionsText_(facultyId) {
  var a = accountById_(facultyId); if (!a) return;
  sheetFor_(TAB_MASTER, HEAD[TAB_MASTER]).getRange(a.row, 7).setValue(getManagedSections_(facultyId).join(', '));
}

function ensureUniqueEmail_(email, exceptId) {
  var target = norm_(email);
  masterRows_().forEach(function (a) {
    if (a.role === 'Student' && norm_(a.email) === target && norm_(a.id) !== norm_(exceptId)) {
      throw new Error('This email address is already linked to another student account.');
    }
  });
}

/* ========================================================================== */
/* TEST AND PROJECT RECORD HELPERS                                             */
/* ========================================================================== */

function activeTestAttempts_(studentId, unit) {
  return rowsByHeaders_(TAB_TESTS, HEAD[TAB_TESTS]).filter(function (r) {
    return norm_(r[1]) === norm_(studentId) && norm_(r[5]) === norm_(unit) && !r[13];
  }).length;
}

function projectRecord_(studentId, unit) {
  var rows = rowsByHeaders_(TAB_PROJECTS, HEAD[TAB_PROJECTS]);
  for (var i = rows.length - 1; i >= 0; i--) {
    if (norm_(rows[i][1]) === norm_(studentId) && norm_(rows[i][5]) === norm_(unit)) {
      return projectFromValues_(rows[i], i + 2);
    }
  }
  return null;
}

function projectAtRow_(row) {
  var sh = sheetFor_(TAB_PROJECTS, HEAD[TAB_PROJECTS]);
  return projectFromValues_(sh.getRange(row, 1, 1, HEAD[TAB_PROJECTS].length).getValues()[0], row);
}

function projectFromValues_(r, row) {
  return {
    row: row, submittedAt: r[0], studentId: r[1], studentName: r[2], email: r[3],
    section: r[4], unit: String(r[5] || ''), projectName: r[6], submissionType: r[7],
    url: r[8], driveFileId: r[9], fileName: r[10], suggestedScore: r[11],
    aiSummary: r[12], strengths: r[13], issues: r[14], improvements: r[15],
    aiStatus: r[16], approvedScore: r[17], facultyFeedback: r[18], approvedBy: r[19],
    approvedAt: r[20], submissionStatus: r[21], resetAt: r[22], resetBy: r[23]
  };
}

function projectPublicRecord_(p, facultyView) {
  var approved = p.submissionStatus === 'Approved';
  var base = {
    studentId: p.studentId, studentName: p.studentName, section: p.section,
    unit: p.unit, projectName: p.projectName, submittedAt: dateIso_(p.submittedAt),
    submissionType: p.submissionType, url: p.url, fileName: p.fileName,
    submissionStatus: p.submissionStatus, aiStatus: p.aiStatus
  };
  if (facultyView) {
    base.suggestedScore = p.suggestedScore;
    base.aiSummary = p.aiSummary;
    base.strengths = p.strengths;
    base.issues = p.issues;
    base.improvements = p.improvements;
    base.approvedScore = p.approvedScore;
    base.facultyFeedback = p.facultyFeedback;
  } else if (approved) {
    base.approvedScore = p.approvedScore;
    base.facultyFeedback = p.facultyFeedback;
    base.aiSummary = p.aiSummary;
    base.strengths = p.strengths;
    base.issues = p.issues;
    base.improvements = p.improvements;
  }
  return base;
}

/* ========================================================================== */
/* SYSTEM DATA AND GENERIC HELPERS                                             */
/* ========================================================================== */

function setSystemValue_(type, key, value, owner, active, notes) {
  var sh = sheetFor_(TAB_SYSTEM, HEAD[TAB_SYSTEM]);
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(type) && String(rows[i][1]) === String(key) && norm_(rows[i][3]) === norm_(owner || '')) {
      sh.getRange(i + 1, 3, 1, 5).setValues([[value, owner || '', active !== false, new Date(), notes || '']]);
      return;
    }
  }
  sh.appendRow([type, key, value, owner || '', active !== false, new Date(), notes || '']);
}

function systemValue_(type, key) {
  var sh = sheetFor_(TAB_SYSTEM, HEAD[TAB_SYSTEM]);
  if (sh.getLastRow() < 2) return '';
  var rows = sh.getRange(2, 1, sh.getLastRow() - 1, HEAD[TAB_SYSTEM].length).getValues();
  for (var i = rows.length - 1; i >= 0; i--) {
    if (rows[i][0] === type && rows[i][1] === key && rows[i][4] === true) return rows[i][2];
  }
  return '';
}

function rowsByHeaders_(name, headers) {
  var sh = sheetFor_(name, headers);
  if (sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, headers.length).getValues();
}

function findRow_(sh, col, value) {
  if (sh.getLastRow() < 2) return 0;
  var vals = sh.getRange(2, col, sh.getLastRow() - 1, 1).getValues();
  for (var i = 0; i < vals.length; i++) if (norm_(vals[i][0]) === norm_(value)) return i + 2;
  return 0;
}

function headerMap_(headers) {
  var map = {};
  headers.forEach(function (h, i) { map[String(h)] = i; });
  return map;
}
function valueBy_(row, map, name) { return map[name] == null ? '' : row[map[name]]; }
function norm_(v) { return String(v == null ? '' : v).trim().toLowerCase(); }
function cleanId_(v) { return String(v || '').trim(); }
function cleanName_(v) { return String(v || '').trim().replace(/\s+/g, ' '); }
function cleanEmail_(v) { return String(v || '').trim().toLowerCase(); }
function cleanSection_(v) { return String(v || '').trim().replace(/\s+/g, ' '); }
function titleCaseRole_(v) { return /^f/i.test(String(v || '')) ? 'Faculty' : 'Student'; }
function validEmail_(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '')); }
function safeFileName_(v) { return String(v || 'project.py').replace(/[^A-Za-z0-9._-]/g, '_').slice(0, 160); }
function slug_(v) { return String(v || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80); }
function unique_(arr) {
  var seen = {}; return (arr || []).filter(function (x) {
    var key = String(x); if (seen[key]) return false; seen[key] = true; return true;
  });
}
function round1_(v) { return Math.round((Number(v) || 0) * 10) / 10; }
function dateIso_(v) { return v instanceof Date ? v.toISOString() : (v || ''); }
function normalPercent_(v) {
  var n = Number(v); if (!isFinite(n)) return 0; return n > 1 ? n / 100 : n;
}
function parseJsonArray_(v) {
  try { var a = JSON.parse(String(v || '[]')); return Array.isArray(a) ? a : []; }
  catch (err) { return []; }
}
function parseScore_(v) {
  if (v instanceof Date) return { score: v.getMonth() + 1, total: v.getDate() };
  var m = String(v || '').match(/(\d+)\s*\/\s*(\d+)/);
  return m ? { score: Number(m[1]), total: Number(m[2]) } : { score: 0, total: 0 };
}
function listText_(arr) { return (arr || []).map(function (x) { return '• ' + x; }).join('\n'); }
function arrayStrings_(v) { return Array.isArray(v) ? v.map(String).filter(Boolean).slice(0, 10) : []; }
function stripCodeFence_(v) { return String(v || '').replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim(); }

function addStatusRules_(range) {
  var sh = range.getSheet();
  var rules = sh.getConditionalFormatRules().filter(function (r) {
    return true;
  });
  function add(text, bg, fg) {
    rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo(text)
      .setBackground(bg).setFontColor(fg).setRanges([range]).build());
  }
  add('Active', '#E6F4E9', '#1E5B32');
  add('Inactive', '#E7E7EA', '#4A5069');
  add('Blocked', '#F9DCD7', '#8C2318');
  add('Completed', '#CDEDE7', '#0F4F47');
  add('Profile incomplete', '#FFF0CC', '#7A4A08');
  sh.setConditionalFormatRules(rules);
}

function addProgressRules_(range) {
  var sh = range.getSheet();
  var rules = sh.getConditionalFormatRules();
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .setGradientMinpointWithValue(RED, SpreadsheetApp.InterpolationType.NUMBER, '0')
    .setGradientMidpointWithValue(AMBER, SpreadsheetApp.InterpolationType.NUMBER, '0.6')
    .setGradientMaxpointWithValue(GREEN, SpreadsheetApp.InterpolationType.NUMBER, '1')
    .setRanges([range]).build());
  sh.setConditionalFormatRules(rules);
}
