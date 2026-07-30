/* ==========================================================================
   AbhyasLab — role router v2
   Preserves the preferred landing design while routing each role correctly.
   Load this file after api.js and before app.js.
   ========================================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "abhyaslab.student";

  function destinationFor(role) {
    const value = String(role || "").trim().toLowerCase();

    if (value === "admin") return "admin.html";
    if (value === "faculty" || value === "ta") return "faculty.html";

    return "";
  }

  function readSavedAccount() {
    try {
      const account = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

      if (!account || !account.token || !account.role) return null;

      if (
        account.expiresAt &&
        Number.isFinite(Date.parse(account.expiresAt)) &&
        Date.parse(account.expiresAt) <= Date.now()
      ) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      return account;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }

  function saveLoginResult(result) {
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

  const existing = readSavedAccount();
  const existingDestination = existing
    ? destinationFor(existing.role)
    : "";

  if (existingDestination) {
    window.location.replace(existingDestination);
    return;
  }

  if (typeof API === "undefined" || typeof API.login !== "function") {
    console.error("AbhyasLab role router could not find the API client.");
    return;
  }

  const originalLogin = API.login.bind(API);

  API.login = async (...args) => {
    const result = await originalLogin(...args);

    if (!result || !result.ok || !result.account) {
      return result;
    }

    const destination = destinationFor(result.account.role);

    if (!destination) {
      return result;
    }

    saveLoginResult(result);
    window.location.replace(destination);

    // Prevent app.js from rendering the student dashboard while navigation occurs.
    return new Promise(() => {});
  };
})();
