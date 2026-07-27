/* ==========================================================================
   AbhyasLab — talking to Google Apps Script
   Every call is fire-and-forget for logging, awaited only for the AI reply.
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

  return {
    isLive: live,

    /* Written to the Students_Master tab. */
    register(student) {
      return post({
        action: "register",
        studentId: student.id,
        studentName: student.name,
        course: CONFIG.courseName
      });
    },

    /* Written to the Activity_Log tab, and updates the student's furthest topic. */
    logProgress(student, row) {
      return post({
        action: "progress",
        studentId: student.id,
        studentName: student.name,
        unit: row.unit,
        topic: row.topic,
        mcqScore: row.mcqScore,
        codeStatus: row.codeStatus,
        progression: row.progression
      });
    },

    /* Proxied to Gemini inside Apps Script so the key never reaches the browser. */
    ask(student, question, context, history) {
      return post({
        action: "ask",
        studentId: student.id,
        studentName: student.name,
        question,
        context,
        history: history.slice(-6)
      });
    }
  };
})();
