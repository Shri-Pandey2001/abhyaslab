/* ==========================================================================
   AbhyasLab — SETTINGS
   This is the only file you must edit before going live.
   ========================================================================== */

const CONFIG = {

  /* 1. Paste your Google Apps Script Web App URL here.
        It looks like: https://script.google.com/macros/s/AKfy...../exec
        Leave it as "" and the site still works — progress is just kept in the
        browser and nothing is logged to your Google Sheet. */
  endpoint: "https://script.google.com/macros/s/AKfycbyroQlsWtADAjzbQHNX2arEcFYA1fcSuoHfm2exEVib7zJoTsmlI2dWNedV7rT0ALk3/exec",

  /* 2. Turn the AI doubt panel on or off.
        Needs the endpoint above AND a GEMINI_API_KEY set inside Apps Script. */
  aiEnabled: true,

  /* 3. Shown on screen. */
  institution: "LPU",
  courseName: "Python Programming",

  /* 4. Marks needed to clear a topic's quiz (percent). */
  mcqPassPercent: 60,

  /* 5. Python engine. Bump this version if you want a newer Pyodide. */
  pyodideUrl: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js",
  pyodideIndex: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",

  /* 6. Set false while you are still writing content, so you can open any
        topic without clearing the earlier ones. Set true before rollout. */
  lockingEnabled: true

  /* 7. Focus guard. When true, leaving the tab in the middle of a topic wipes
        that topic's progress, and leaving during a test submits it instantly.
        Set to false if you'd rather not police it. */
  focusGuard: true,

  /* 8. Marks needed to pass the end-of-unit test (percent). */
  testPassPercent: 60,

  /* 9. Where students may host their unit project. A submitted link must
        contain one of these. */
  projectHosts: ["github.com", "drive.google.com", "docs.google.com"],

  /* 10. Shown in the footer of every screen. */
  author: "Shridhar Pandey",
  authorGithub: "https://github.com/shridhar-pandey",
  authorInstagram: "https://www.instagram.com/shridhar_siddheshwar_pandey?igsh=N3pxYzNjYWl3OWlw"
};
