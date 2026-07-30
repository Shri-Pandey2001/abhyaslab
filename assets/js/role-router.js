/* ==========================================================================
   AbhyasLab — role router
   Sends administrator, faculty and TA accounts to their own dashboards.
   ========================================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "abhyaslab.student";

  function dashboardFor(role) {
    if (role === "admin") return "admin.html";
    if (role === "faculty" || role === "ta") return "faculty.html";
    return "";
  }

  function saveAccount(result) {
    const account = result.account || {};
    const saved = {
      id: account.id || "",
      name: account.name || "AbhyasLab User",
      email: account.email || "",
      section: account.section || "",
      role: account.role || "student",
      status: account.status || "active",
      token: result.token || "",
      expiresAt: result.expiresAt || "",
      since: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    return saved;
  }

  function redirectSavedRole() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || !saved.token || !saved.role) return false;
      if (saved.expiresAt && Date.parse(saved.expiresAt) <= Date.now()) {
        localStorage.removeItem(STORAGE_KEY);
        return false;
      }

      const destination = dashboardFor(saved.role);
      if (!destination) return false;

      window.location.replace(destination);
      return true;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
  }

  if (redirectSavedRole()) return;
  if (!window.API || typeof window.API.login !== "function") return;

  const originalLogin = window.API.login.bind(window.API);

  window.API.login = async (...args) => {
    const result = await originalLogin(...args);

    if (!result || !result.ok || !result.account) {
      return result;
    }

    const destination = dashboardFor(result.account.role);
    if (!destination) return result;

    saveAccount(result);
    window.location.replace(destination);

    // Keep the existing student application from rendering while navigation occurs.
    return new Promise(() => {});
  };
})();
