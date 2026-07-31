/* ==========================================================================
   AbhyasLab — Supabase UI compatibility v2
   Registration and login are handled by app.js through the Supabase API client.
   This file intentionally does not intercept form submission.
   ========================================================================== */

(() => {
  "use strict";

  const form = document.getElementById("regForm");
  const note = document.getElementById("regNote");

  if (!form || !note) {
    console.error("AbhyasLab authentication form is incomplete.");
    return;
  }

  // Keep account IDs consistently uppercase while students type.
  document.getElementById("regId")?.addEventListener("input", event => {
    const input = event.currentTarget;
    input.value = input.value.toUpperCase().replace(/\s+/g, "");
  });
})();
