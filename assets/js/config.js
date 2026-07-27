/* ==========================================================================
   AbhyasLab — SETTINGS
   This is the only file you must edit before going live.
   ========================================================================== */

const CONFIG = {

  /* 1. Paste your Google Apps Script Web App URL here.
        It looks like: https://script.google.com/macros/s/AKfy...../exec
        Leave it as "" and the site still works — progress is just kept in the
        browser and nothing is logged to your Google Sheet. */
  endpoint: "",

  /* 2. Turn the AI doubt panel on or off.
        Needs the endpoint above AND a GEMINI_API_KEY set inside Apps Script. */
  aiEnabled: true,

  /* 3. Shown on screen. */
  institution: "Shri Khushal Das University",
  courseName: "Python Programming",

  /* 4. Marks needed to clear a topic's quiz (percent). */
  mcqPassPercent: 60,

  /* 5. Python engine. Bump this version if you want a newer Pyodide. */
  pyodideUrl: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js",
  pyodideIndex: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",

  /* 6. Set false while you are still writing content, so you can open any
        topic without clearing the earlier ones. Set true before rollout. */
  lockingEnabled: true
};
