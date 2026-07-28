/* ==========================================================================
   AbhyasLab — talking to Google Apps Script
   Logging calls are fire-and-forget; only the AI reply is awaited.
   Content-Type is text/plain on purpose: it keeps the browser from sending a
   CORS preflight, which Apps Script cannot answer.
   ========================================================================== */

const API = (() => {

  const live = () => typeof CONFIG.endpoint === "string" && CONFIG.endpoint.indexOf("script.google.com") > -1;

  async function post(payload) {
    if (!live()) return { ok: false, offline: true };
    try {
      const res = await fetch(CONFIG.endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      const text = await res.text();
      try { return JSON.parse(text); }
      catch { return { ok: false, error: "Server sent something that isn't JSON." }; }
    } catch (err) {
      return { ok: false, error: "Could not reach the server. Check your connection." };
    }
  }

  const who = (s) => ({ studentId: s.id, studentName: s.name });

  return {
    isLive: live,

    /* Students_Master */
    register(student) {
      return post(Object.assign({ action: "register", course: CONFIG.courseName }, who(student)));
    },

    /* Activity_Log */
    logProgress(student, row) {
      return post(Object.assign({
        action: "progress",
        unit: row.unit, topic: row.topic,
        mcqScore: row.mcqScore, codeStatus: row.codeStatus, progression: row.progression
      }, who(student)));
    },

    /* Test_Results */
    logTest(student, row) {
      return post(Object.assign({
        action: "test",
        unit: row.unit, testName: row.testName,
        score: row.score, total: row.total, percent: row.percent,
        result: row.result, attempt: row.attempt, reason: row.reason || "Submitted"
      }, who(student)));
    },

    /* Project_Submissions */
    logProject(student, row) {
      return post(Object.assign({
        action: "project",
        unit: row.unit, projectName: row.projectName, link: row.link
      }, who(student)));
    },

    /* Proxied to Gemini inside Apps Script, so the key never reaches the browser. */
    ask(student, question, context, history) {
      return post(Object.assign({ action: "ask", question, context, history: history.slice(-6) }, who(student)));
    }
  };
})();
