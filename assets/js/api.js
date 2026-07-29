/* ==========================================================================
   AbhyasLab — secure Google Apps Script API client
   ========================================================================== */

const API = (() => {
  const live = () => typeof CONFIG.endpoint === "string" && CONFIG.endpoint.includes("script.google.com");

  async function post(payload) {
    if (!live()) return { ok: false, offline: true, error: "The backend is not connected." };
    try {
      const response = await fetch(CONFIG.endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      const text = await response.text();
      try { return JSON.parse(text); }
      catch { return { ok: false, error: "The server returned an unreadable response." }; }
    } catch {
      return { ok: false, error: "Could not reach the server. Check your internet connection." };
    }
  }

  const auth = (account) => ({ authToken: account && account.token ? account.token : "" });

  return {
    isLive: live,

    listSections() {
      return post({ action: "sections" });
    },

    registerStudent(data) {
      return post({
        action: "studentRegister",
        studentId: data.id,
        studentName: data.name,
        email: data.email,
        section: data.section,
        pin: data.pin,
        course: CONFIG.courseName
      });
    },

    login(role, id, pin) {
      return post({ action: "login", role, accountId: id, pin });
    },

    resume(account) {
      return post(Object.assign({ action: "resume" }, auth(account)));
    },

    logout(account) {
      return post(Object.assign({ action: "logout" }, auth(account)));
    },

    syncCourse(account, schema) {
      return post(Object.assign({ action: "syncCourse", schema }, auth(account)));
    },

    logProgress(account, row) {
      return post(Object.assign({
        action: "progress",
        unit: row.unit,
        stepId: row.stepId,
        stepType: row.stepType,
        stepName: row.stepName,
        mcqBest: row.mcqBest,
        mcqTotal: row.mcqTotal,
        tasksCompleted: row.tasksCompleted,
        tasksTotal: row.tasksTotal,
        taskIds: row.taskIds,
        status: row.status,
        lastEvent: row.lastEvent || ""
      }, auth(account)));
    },

    logTest(account, row) {
      return post(Object.assign({
        action: "test",
        unit: row.unit,
        testName: row.testName,
        score: row.score,
        total: row.total,
        percent: row.percent,
        result: row.result,
        reason: row.reason || "Submitted"
      }, auth(account)));
    },

    submitProject(account, row) {
      return post(Object.assign({
        action: "project",
        unit: row.unit,
        projectName: row.projectName,
        submissionType: row.submissionType,
        link: row.link || "",
        fileName: row.fileName || "",
        fileBase64: row.fileBase64 || ""
      }, auth(account)));
    },

    heartbeat(account, row) {
      return post(Object.assign({
        action: "heartbeat",
        sessionId: row.sessionId,
        minutes: Math.round(row.minutes * 10) / 10,
        screen: row.screen || ""
      }, auth(account)));
    },

    beacon(account, row) {
      if (!live() || !navigator.sendBeacon || !account || !account.token) return false;
      const body = JSON.stringify({
        action: "heartbeat",
        authToken: account.token,
        sessionId: row.sessionId,
        minutes: Math.round(row.minutes * 10) / 10,
        screen: row.screen || ""
      });
      try {
        return navigator.sendBeacon(
          CONFIG.endpoint,
          new Blob([body], { type: "text/plain;charset=utf-8" })
        );
      } catch { return false; }
    },

    flag(account, row) {
      if (!CONFIG.integrityLogging) return Promise.resolve({ ok: false });
      return post(Object.assign({
        action: "flag",
        event: row.event,
        where: row.where || "",
        detail: row.detail || ""
      }, auth(account)));
    },

    ask(account, question, context, history) {
      return post(Object.assign({
        action: "ask",
        question,
        context,
        history: history.slice(-6)
      }, auth(account)));
    },

    facultyDashboard(account) {
      return post(Object.assign({ action: "facultyDashboard" }, auth(account)));
    },

    facultyStudent(account, studentId) {
      return post(Object.assign({ action: "facultyStudent", studentId }, auth(account)));
    },

    createSection(account, sectionName) {
      return post(Object.assign({ action: "createSection", sectionName }, auth(account)));
    },

    studentAction(account, studentId, operation, unit = "", confirmation = "") {
      return post(Object.assign({
        action: "studentAction",
        studentId,
        operation,
        unit,
        confirmation
      }, auth(account)));
    },

    approveProject(account, studentId, unit, score, feedback) {
      return post(Object.assign({
        action: "approveProject",
        studentId,
        unit,
        score,
        feedback
      }, auth(account)));
    }
  };
})();
