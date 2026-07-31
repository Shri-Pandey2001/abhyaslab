/* ==========================================================================
   AbhyasLab — authentication UI compatibility v3
   - Student login: exactly 4 digits
   - Faculty / Teaching Assistant login: 4–12 digits
   - Administrator login: 6–12 digits
   - First-time student registration: exactly 4 digits
   ========================================================================== */

(() => {
  "use strict";

  const SESSION_KEY = "abhyaslab.student";

  const form = document.getElementById("regForm");
  const roleInput = document.getElementById("regRole");
  const idInput = document.getElementById("regId");
  const pinInput = document.getElementById("regPin");
  const pinLabel = pinInput?.closest(".field")?.querySelector("span");
  const confirmPinInput = document.getElementById("regPin2");
  const submitButton = document.getElementById("authSubmit");
  const note = document.getElementById("regNote");

  if (
    !form ||
    !roleInput ||
    !idInput ||
    !pinInput ||
    !submitButton ||
    !note
  ) {
    console.error("AbhyasLab authentication form is incomplete.");
    return;
  }

  function currentMode() {
    return document
      .querySelector('[data-auth-mode].is-active')
      ?.dataset.authMode === "register"
      ? "register"
      : "login";
  }

  function rolePolicy(role, mode) {
    if (mode === "register" || role === "student") {
      return {
        min: 4,
        max: 4,
        pattern: "[0-9]{4}",
        label:
          mode === "register"
            ? "Create 4-digit student PIN"
            : "Student PIN",
        placeholder: "Exactly 4 digits",
        message: "Enter your four-digit student PIN."
      };
    }

    if (role === "admin") {
      return {
        min: 6,
        max: 12,
        pattern: "[0-9]{6,12}",
        label: "Administrator PIN",
        placeholder: "6–12 digit PIN",
        message: "Enter your 6–12 digit Administrator PIN."
      };
    }

    return {
      min: 4,
      max: 12,
      pattern: "[0-9]{4,12}",
      label:
        role === "ta"
          ? "Teaching Assistant PIN"
          : "Faculty PIN",
      placeholder: "4–12 digit PIN",
      message: "Enter your 4–12 digit staff PIN."
    };
  }

  function applyPinRules() {
    const mode = currentMode();
    const role = mode === "register" ? "student" : roleInput.value;
    const policy = rolePolicy(role, mode);

    pinInput.minLength = policy.min;
    pinInput.maxLength = policy.max;
    pinInput.pattern = policy.pattern;
    pinInput.placeholder = policy.placeholder;
    pinInput.setAttribute("aria-label", policy.label);

    if (pinLabel) {
      pinLabel.textContent = policy.label;
    }

    if (mode === "register") {
      roleInput.value = "student";
      confirmPinInput?.setAttribute("minlength", "4");
      confirmPinInput?.setAttribute("maxlength", "4");
      confirmPinInput?.setAttribute("pattern", "[0-9]{4}");
    }

    idInput.placeholder =
      role === "admin"
        ? "Example: A001"
        : role === "faculty"
          ? "Example: F101"
          : role === "ta"
            ? "Example: TA101"
            : "Example: S001";
  }

  function schedulePinRules() {
    applyPinRules();
    requestAnimationFrame(applyPinRules);
    window.setTimeout(applyPinRules, 0);
  }

  // Keep IDs uppercase and space-free.
  idInput.addEventListener("input", () => {
    idInput.value = idInput.value
      .toUpperCase()
      .replace(/\s+/g, "");
  });

  roleInput.addEventListener("change", schedulePinRules);

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", schedulePinRules);
  });

  new MutationObserver(schedulePinRules).observe(form, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "hidden", "disabled"]
  });

  /*
   * app.js historically checks every login as exactly four digits.
   * Non-student login is handled here in the capture phase so an existing
   * 8-digit Administrator PIN and longer staff PINs reach Supabase correctly.
   */
  form.addEventListener(
    "submit",
    async (event) => {
      const mode = currentMode();
      const selectedRole = roleInput.value;

      if (mode !== "login" || selectedRole === "student") {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      const accountId = idInput.value.trim().toUpperCase();
      const pin = pinInput.value.trim();
      const policy = rolePolicy(selectedRole, mode);
      const pinRegex = new RegExp(`^\\d{${policy.min},${policy.max}}$`);

      note.classList.remove("is-bad");

      if (!/^[A-Za-z][A-Za-z0-9_-]{2,29}$/.test(accountId)) {
        note.textContent = "Enter a valid account ID without spaces.";
        note.classList.add("is-bad");
        return;
      }

      if (!pinRegex.test(pin)) {
        note.textContent = policy.message;
        note.classList.add("is-bad");
        return;
      }

      const config = window.ABHYASLAB_CONFIG || {};
      const authUrl = config.functions?.auth;

      if (!authUrl || !config.publishableKey) {
        note.textContent = "Supabase authentication is not configured.";
        note.classList.add("is-bad");
        return;
      }

      const previousText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Signing in…";
      note.innerHTML = '<span class="spin"></span> Checking your account…';

      try {
        const response = await fetch(authUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": config.publishableKey
          },
          body: JSON.stringify({
            action: "login",
            accountId,
            pin
          })
        });

        const data = await response.json().catch(() => ({
          success: false,
          message: "The server returned an unreadable response."
        }));

        if (!response.ok || data.success === false) {
          throw new Error(data.message || "Sign-in failed.");
        }

        const user = data.user || {};
        const session = data.session || {};
        const actualRole = String(user.role || selectedRole).toLowerCase();

        const saved = {
          id: user.accountId || user.account_id || accountId,
          name:
            user.fullName ||
            user.full_name ||
            "AbhyasLab User",
          email: user.email || "",
          section:
            user.sectionCode ||
            user.section_code ||
            user.sectionName ||
            user.section_name ||
            "",
          role: actualRole,
          status: user.status || "active",
          userId: user.userId || user.user_id || "",
          token: session.token || "",
          expiresAt:
            session.expiresAt ||
            session.expires_at ||
            "",
          since: new Date().toISOString()
        };

        localStorage.setItem(SESSION_KEY, JSON.stringify(saved));

        if (actualRole === "admin") {
          window.location.replace("admin.html");
          return;
        }

        if (actualRole === "faculty" || actualRole === "ta") {
          window.location.replace("faculty.html");
          return;
        }

        window.location.replace("index.html");
      } catch (error) {
        note.textContent =
          error instanceof Error
            ? error.message
            : "Sign-in failed. Try again.";
        note.classList.add("is-bad");
        submitButton.disabled = false;
        submitButton.textContent = previousText;
      }
    },
    true
  );

  schedulePinRules();
})();
