/* ==========================================================================
   AbhyasLab — Supabase login compatibility layer
   Loaded after the existing app.js to avoid rewriting course logic.
   ========================================================================== */

(() => {
  "use strict";

  const form = document.getElementById("regForm");
  const roleInput = document.getElementById("regRole");
  const idInput = document.getElementById("regId");
  const pinInput = document.getElementById("regPin");
  const button = document.getElementById("authSubmit");
  const note = document.getElementById("regNote");
  const registerFields = document.getElementById("registerFields");
  const confirmPinField = document.getElementById("confirmPinField");

  if (!form || !roleInput || !idInput || !pinInput || !button || !note) {
    console.error("AbhyasLab login form is incomplete.");
    return;
  }

  document
    .querySelectorAll('[data-auth-mode="register"]')
    .forEach((element) => element.remove());

  if (registerFields) {
    registerFields.hidden = true;
  }

  if (confirmPinField) {
    confirmPinField.hidden = true;
  }

  pinInput.pattern = "[0-9]{4,12}";
  pinInput.maxLength = 12;
  pinInput.placeholder = "4–12 digit PIN";
  pinInput.autocomplete = "current-password";

  note.textContent =
    "Accounts are created by the administrator. Your secure session remains active for up to 24 hours.";

  form.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const accountId = idInput.value.trim().toUpperCase();
      const pin = pinInput.value.trim();

      note.classList.remove("is-bad");

      if (!/^[A-Z][A-Z0-9_-]{2,29}$/.test(accountId)) {
        note.textContent =
          "Enter a valid account ID without spaces.";
        note.classList.add("is-bad");
        idInput.focus();
        return;
      }

      if (!/^\d{4,12}$/.test(pin)) {
        note.textContent =
          "Enter the 4–12 digit PIN assigned to your account.";
        note.classList.add("is-bad");
        pinInput.focus();
        return;
      }

      button.disabled = true;
      button.textContent = "Signing in…";
      note.textContent = "Checking your secure AbhyasLab account…";

      const result = await API.login(
        roleInput.value,
        accountId,
        pin
      );

      if (!result || !result.ok) {
        button.disabled = false;
        button.textContent = "Sign in to AbhyasLab";
        note.textContent =
          (result && result.error) ||
          "Sign-in failed. Check your ID and PIN.";
        note.classList.add("is-bad");
        return;
      }

      const account = result.account || {};

      const savedSession = {
        id: account.id || accountId,
        name: account.name || "AbhyasLab User",
        email: account.email || "",
        section: account.section || "",
        role: account.role || roleInput.value || "student",
        status: account.status || "active",
        token: result.token,
        expiresAt: result.expiresAt,
        since: new Date().toISOString()
      };

      try {
        localStorage.setItem(
          "abhyaslab.student",
          JSON.stringify(savedSession)
        );
      } catch {
        button.disabled = false;
        button.textContent = "Sign in to AbhyasLab";
        note.textContent =
          "Your browser blocked session storage. Allow site storage and try again.";
        note.classList.add("is-bad");
        return;
      }

      window.location.reload();
    },
    true
  );
})();
