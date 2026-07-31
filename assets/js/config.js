/* ==========================================================================
   AbhyasLab — browser settings
   Backend communication is handled by assets/js/api.js and Supabase.
   ========================================================================== */

const CONFIG = {
  aiEnabled: true,

  institution: "",
  courseName: "Python Programming",

  mcqPassPercent: 60,

  pyodideUrl: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js",
  pyodideIndex: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",

  lockingEnabled: true,
  runTimeoutSeconds: 5,

  focusGuard: true,
  testPassPercent: 60,

  projectHosts: [
    "github.com",
    "drive.google.com",
    "docs.google.com"
  ],

  heartbeatSeconds: 120,
  integrityLogging: true,

  author: "Shridhar Pandey",
  authorGithub: "https://github.com/shridhar-pandey",
  authorInstagram:
    "https://www.instagram.com/shridhar_siddheshwar_pandey?igsh=N3pxYzNjYWl3OWlw"
};
