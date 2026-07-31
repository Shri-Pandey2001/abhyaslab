/* ==========================================================================
   AbhyasLab — global experience
   One theme system and one AI entry point across:
   - Main login / registration page
   - Student learning dashboard
   - Faculty dashboard
   - Teaching Assistant dashboard
   - Administrator dashboard
   ========================================================================== */

(() => {
  "use strict";

  const THEME_KEY = "abhyaslab.global-theme";
  const SESSION_KEY = "abhyaslab.student";
  const DEFAULT_THEME = "dark-galaxy";

  const themes = [
    {
      id: "classic-white",
      name: "Classic White",
      description: "Bright, clean and professional.",
      colors: ["#ffffff", "#edf2f8", "#2457d6", "#172033"]
    },
    {
      id: "dark-galaxy",
      name: "Dark Galaxy",
      description: "Focused dark mode with indigo highlights.",
      colors: ["#0c142d", "#18264d", "#7c66ff", "#f4f1e8"]
    },
    {
      id: "ocean-blue",
      name: "Ocean Blue",
      description: "Calming deep-ocean blue and cyan tones.",
      colors: ["#071b2c", "#103654", "#1bb9df", "#e7f8ff"]
    },
    {
      id: "forest-green",
      name: "Forest Green",
      description: "Natural green tones for long study sessions.",
      colors: ["#09251d", "#174535", "#39cb83", "#effff7"]
    },
    {
      id: "sunset-warm",
      name: "Sunset Warm",
      description: "Warm amber and rose highlights.",
      colors: ["#28150f", "#553023", "#ffad33", "#fff2d1"]
    }
  ];

  function safeTheme(value) {
    return themes.some((theme) => theme.id === value)
      ? value
      : DEFAULT_THEME;
  }

  function getApiClient() {
    /*
     * api.js declares `const API` as a global lexical binding. Such bindings
     * are available by identifier but are not properties of window.
     */
    if (typeof API !== "undefined" && API) {
      return API;
    }

    return window.API || window.ABHYASLAB_API || null;
  }

  function savedAccount() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }

  function activeTheme() {
    try {
      return safeTheme(localStorage.getItem(THEME_KEY));
    } catch {
      return DEFAULT_THEME;
    }
  }

  function applyTheme(themeId) {
    const selected = safeTheme(themeId);

    document.documentElement.dataset.abhyasTheme = selected;
    document.documentElement.style.colorScheme =
      selected === "classic-white" ? "light" : "dark";

    const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
    if (colorSchemeMeta) {
      colorSchemeMeta.setAttribute(
        "content",
        selected === "classic-white" ? "light" : "dark"
      );
    }

    try {
      localStorage.setItem(THEME_KEY, selected);
    } catch {
      // Theme remains active for this page.
    }

    document.querySelectorAll("[data-global-theme]").forEach((button) => {
      const chosen = button.dataset.globalTheme === selected;
      button.classList.toggle("is-selected", chosen);
      button.setAttribute("aria-pressed", String(chosen));
    });

    const current = themes.find((theme) => theme.id === selected);
    document.querySelectorAll("[data-theme-label]").forEach((label) => {
      label.textContent = current?.name || "Theme";
    });
  }

  function pageContext() {
    if (document.querySelector(".gate") && !document.querySelector(".gate")?.hidden) {
      return "AbhyasLab login and first-time student registration page";
    }

    if (document.body.classList.contains("admin-page") || document.querySelector("#adminNav")) {
      const active = document.querySelector("#adminNav .is-active")?.textContent?.trim();
      return `AbhyasLab Administrator workspace${active ? `, ${active} section` : ""}`;
    }

    if (document.body.classList.contains("faculty-page") || document.querySelector("#facultyNav")) {
      const active = document.querySelector("#facultyNav .is-active")?.textContent?.trim();
      const account = savedAccount();
      const role = account?.role === "ta" ? "Teaching Assistant" : "Faculty";
      return `AbhyasLab ${role} workspace${active ? `, ${active} section` : ""}`;
    }

    const heading =
      document.querySelector("#main h1, #main h2, #main .thead__t")
        ?.textContent?.trim();

    return `AbhyasLab student learning workspace${heading ? `, current view: ${heading}` : ""}`;
  }

  function loginHelpAnswer(question) {
    const q = question.toLowerCase();

    if (/register|first.?time|create.*account/.test(q)) {
      return "Choose “First-time student”, enter your Student ID, full name, email, active section and a new four-digit PIN. Faculty, Teaching Assistant and Administrator accounts are created by the Administrator.";
    }

    if (/admin.*pin|administrator.*pin|8.?digit|pin/.test(q)) {
      return "Student PINs use exactly 4 digits. Faculty and Teaching Assistant PINs may use 4–12 digits. Administrator PINs may use 6–12 digits, so an existing 8-digit Administrator PIN is valid.";
    }

    if (/section/.test(q)) {
      return "A first-time student must select an active section. When no section appears, ask the Administrator or Faculty to create and activate the section first.";
    }

    if (/forgot|reset/.test(q)) {
      return "PIN reset is controlled by the Administrator. Contact the Administrator with your Account ID; do not share your old PIN publicly.";
    }

    if (/faculty|teaching assistant|ta/.test(q)) {
      return "Faculty and Teaching Assistant accounts are created by the Administrator. Use the assigned Account ID and private 4–12 digit PIN on the Secure sign in tab.";
    }

    return "I can help with signing in, first-time student registration, role-specific PIN rules, section selection and account access. For course doubts, sign in and use the authenticated AI tutor.";
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function addBubble(log, role, text) {
    const bubble = document.createElement("div");
    bubble.className = `global-ai-bubble global-ai-bubble--${role}`;
    bubble.textContent = text;
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
  }

  function buildGlobalUi() {
    if (document.getElementById("globalExperienceRoot")) return;

    const root = document.createElement("div");
    root.id = "globalExperienceRoot";
    root.innerHTML = `
      <div class="global-toolbar" id="globalToolbar">
        <button type="button" class="global-tool-button" id="globalThemeButton" aria-haspopup="dialog" aria-expanded="false">
          <span aria-hidden="true">◐</span>
          <span data-theme-label>Theme</span>
        </button>
        <button type="button" class="global-tool-button global-tool-button--ai" id="globalAiButton" aria-haspopup="dialog" aria-expanded="false">
          <span aria-hidden="true">AI</span>
          <span>AI help</span>
        </button>
      </div>

      <div class="global-theme-dialog" id="globalThemeDialog" hidden>
        <div class="global-modal-backdrop" data-close-theme></div>
        <section class="global-theme-panel" role="dialog" aria-modal="true" aria-labelledby="globalThemeTitle">
          <header class="global-modal-head">
            <div>
              <span>Appearance</span>
              <h2 id="globalThemeTitle">Choose theme</h2>
              <p>The same theme is used on login, student, faculty, TA and Administrator pages.</p>
            </div>
            <button type="button" data-close-theme aria-label="Close">×</button>
          </header>
          <div class="global-theme-options">
            ${themes.map((theme) => `
              <button type="button" class="global-theme-option" data-global-theme="${theme.id}" aria-pressed="false">
                <span class="global-theme-swatches" aria-hidden="true">
                  ${theme.colors.map((color) => `<i style="--swatch:${color}"></i>`).join("")}
                </span>
                <span>
                  <strong>${theme.name}</strong>
                  <small>${theme.description}</small>
                </span>
                <b aria-hidden="true">✓</b>
              </button>
            `).join("")}
          </div>
        </section>
      </div>

      <aside class="global-ai-panel" id="globalAiPanel" hidden aria-label="AbhyasLab AI assistant">
        <header class="global-ai-head">
          <div>
            <strong id="globalAiTitle">AbhyasLab AI</strong>
            <span id="globalAiContext">Help and guidance</span>
          </div>
          <button type="button" id="globalAiClose" aria-label="Close">×</button>
        </header>
        <div class="global-ai-log" id="globalAiLog" aria-live="polite"></div>
        <form class="global-ai-form" id="globalAiForm">
          <textarea id="globalAiInput" rows="2" maxlength="1000" placeholder="Ask your question…"></textarea>
          <button type="submit">Send</button>
        </form>
        <p class="global-ai-note" id="globalAiNote"></p>
      </aside>
    `;

    document.body.appendChild(root);

    const toolbar = document.getElementById("globalToolbar");
    const topbarRight = document.querySelector(".topbar__right");
    const dashTopbar = document.querySelector(".dash-topbar");
    const gate = document.querySelector(".gate");

    if (topbarRight) {
      toolbar.classList.add("global-toolbar--embedded");
      topbarRight.insertBefore(
        toolbar,
        document.querySelector(".who") || document.getElementById("logoutBtn")
      );
    } else if (dashTopbar) {
      toolbar.classList.add("global-toolbar--dashboard");
      dashTopbar.insertBefore(
        toolbar,
        document.getElementById("logoutButton")
      );
    } else if (gate) {
      toolbar.classList.add("global-toolbar--login");
    }

    const themeButton = document.getElementById("globalThemeButton");
    const themeDialog = document.getElementById("globalThemeDialog");
    const aiButton = document.getElementById("globalAiButton");
    const aiPanel = document.getElementById("globalAiPanel");
    const aiLog = document.getElementById("globalAiLog");
    const aiForm = document.getElementById("globalAiForm");
    const aiInput = document.getElementById("globalAiInput");
    const aiNote = document.getElementById("globalAiNote");
    const aiContext = document.getElementById("globalAiContext");

    function closeTheme() {
      themeDialog.hidden = true;
      themeButton.setAttribute("aria-expanded", "false");
    }

    function openTheme() {
      themeDialog.hidden = false;
      themeButton.setAttribute("aria-expanded", "true");
      themeDialog.querySelector(".is-selected, [data-global-theme]")?.focus();
    }

    themeButton.addEventListener("click", () => {
      themeDialog.hidden ? openTheme() : closeTheme();
    });

    themeDialog.querySelectorAll("[data-close-theme]").forEach((button) => {
      button.addEventListener("click", closeTheme);
    });

    themeDialog.querySelectorAll("[data-global-theme]").forEach((button) => {
      button.addEventListener("click", () => {
        applyTheme(button.dataset.globalTheme);
        window.setTimeout(closeTheme, 120);
      });
    });

    function openAi() {
      /*
       * Student pages already have the full course-aware Ask a doubt panel.
       * Reuse it rather than showing a second chatbot.
       */
      const nativeStudentButton = document.getElementById("askBtn");
      const app = document.getElementById("app");

      if (
        nativeStudentButton &&
        app &&
        !app.hidden &&
        !nativeStudentButton.hidden
      ) {
        nativeStudentButton.click();
        return;
      }

      aiPanel.hidden = false;
      aiButton.setAttribute("aria-expanded", "true");
      aiContext.textContent = pageContext();

      if (!aiLog.childElementCount) {
        const account = savedAccount();

        if (account?.token) {
          addBubble(
            aiLog,
            "assistant",
            `Hello ${String(account.name || "there").split(/\s+/)[0]}. Ask for guidance related to your ${account.role || "AbhyasLab"} workspace.`
          );
          aiNote.textContent =
            "Authenticated AI guidance is sent through the AbhyasLab AI Edge Function.";
        } else {
          addBubble(
            aiLog,
            "assistant",
            "I can help with sign-in, first-time student registration, PIN rules, sections and account access."
          );
          aiNote.textContent =
            "Pre-login help stays local. Sign in to use the Gemini-powered course assistant.";
        }
      }

      aiInput.focus();
    }

    function closeAi() {
      aiPanel.hidden = true;
      aiButton.setAttribute("aria-expanded", "false");
    }

    aiButton.addEventListener("click", openAi);
    document.getElementById("globalAiClose").addEventListener("click", closeAi);

    aiForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const question = aiInput.value.trim();
      if (!question) return;

      addBubble(aiLog, "user", question);
      aiInput.value = "";

      const account = savedAccount();

      if (!account?.token) {
        addBubble(aiLog, "assistant", loginHelpAnswer(question));
        return;
      }

      const waiting = document.createElement("div");
      waiting.className =
        "global-ai-bubble global-ai-bubble--assistant is-waiting";
      waiting.textContent = "Thinking…";
      aiLog.appendChild(waiting);
      aiLog.scrollTop = aiLog.scrollHeight;

      try {
        const apiClient = getApiClient();

        if (!apiClient || typeof apiClient.ask !== "function") {
          throw new Error(
            "The AbhyasLab AI client did not load. Refresh the page once."
          );
        }

        const history = Array.from(
          aiLog.querySelectorAll(".global-ai-bubble:not(.is-waiting)")
        )
          .slice(-6)
          .map((bubble) => ({
            role: bubble.classList.contains("global-ai-bubble--user")
              ? "user"
              : "assistant",
            text: bubble.textContent || ""
          }));

        const result = await apiClient.ask(
          account,
          question,
          pageContext(),
          history
        );

        waiting.remove();

        if (!result?.ok) {
          throw new Error(
            result?.error ||
            "The AI assistant is currently unavailable."
          );
        }

        addBubble(
          aiLog,
          "assistant",
          result.reply ||
          result.answer ||
          result.message ||
          "The AI assistant returned no text."
        );
      } catch (error) {
        waiting.remove();
        addBubble(
          aiLog,
          "assistant",
          error instanceof Error
            ? error.message
            : "The AI assistant is currently unavailable."
        );
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (!themeDialog.hidden) closeTheme();
      if (!aiPanel.hidden) closeAi();
    });

    applyTheme(activeTheme());
  }

  applyTheme(activeTheme());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildGlobalUi, { once: true });
  } else {
    buildGlobalUi();
  }
})();
