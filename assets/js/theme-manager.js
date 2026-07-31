/* ==========================================================================
   AbhyasLab — student theme manager
   Themes affect the logged-in learning interface, not the premium login page.
   ========================================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "abhyaslab.student-theme";
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
      description: "Calming deep-ocean blues and cyan accents.",
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

  function validTheme(value) {
    return themes.some((theme) => theme.id === value)
      ? value
      : DEFAULT_THEME;
  }

  function applyTheme(themeId) {
    const safeTheme = validTheme(themeId);
    document.documentElement.dataset.abhyasTheme = safeTheme;

    try {
      localStorage.setItem(STORAGE_KEY, safeTheme);
    } catch {
      // Theme still applies for the current page.
    }

    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      const selected = button.dataset.themeOption === safeTheme;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    const activeTheme = themes.find((theme) => theme.id === safeTheme);
    const label = document.querySelector("#themeTrigger .theme-trigger__label");

    if (label && activeTheme) {
      label.textContent = activeTheme.name;
    }
  }

  function closeThemeDialog() {
    const dialog = document.getElementById("themeDialog");
    const trigger = document.getElementById("themeTrigger");

    if (!dialog) return;

    dialog.hidden = true;
    trigger?.setAttribute("aria-expanded", "false");
  }

  function openThemeDialog() {
    const dialog = document.getElementById("themeDialog");
    const trigger = document.getElementById("themeTrigger");

    if (!dialog) return;

    dialog.hidden = false;
    trigger?.setAttribute("aria-expanded", "true");
    dialog.querySelector("[data-theme-option].is-selected, [data-theme-option]")?.focus();
  }

  function createThemeUi() {
    const topbarRight = document.querySelector(".topbar__right");

    if (!topbarRight || document.getElementById("themeTrigger")) {
      return;
    }

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.id = "themeTrigger";
    trigger.className = "theme-trigger";
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = `
      <span class="theme-trigger__icon" aria-hidden="true">◐</span>
      <span class="theme-trigger__label">Theme</span>`;

    const logoutButton = document.getElementById("logoutBtn");
    topbarRight.insertBefore(trigger, logoutButton || null);

    const dialog = document.createElement("div");
    dialog.id = "themeDialog";
    dialog.className = "theme-dialog";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="theme-dialog__backdrop" data-close-theme></div>
      <section
        class="theme-dialog__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="themeDialogTitle"
      >
        <header class="theme-dialog__head">
          <div>
            <span>Appearance</span>
            <h2 id="themeDialogTitle">Choose your learning theme</h2>
            <p>Only the logged-in student workspace changes.</p>
          </div>
          <button type="button" class="theme-dialog__close" data-close-theme aria-label="Close theme chooser">×</button>
        </header>

        <div class="theme-options">
          ${themes.map((theme) => `
            <button
              type="button"
              class="theme-option"
              data-theme-option="${theme.id}"
              aria-pressed="false"
            >
              <span class="theme-option__swatches" aria-hidden="true">
                ${theme.colors.map((color) =>
                  `<i style="--swatch:${color}"></i>`
                ).join("")}
              </span>
              <span class="theme-option__copy">
                <strong>${theme.name}</strong>
                <small>${theme.description}</small>
              </span>
              <span class="theme-option__check" aria-hidden="true">✓</span>
            </button>`
          ).join("")}
        </div>
      </section>`;

    document.body.appendChild(dialog);

    trigger.addEventListener("click", () => {
      if (dialog.hidden) {
        openThemeDialog();
      } else {
        closeThemeDialog();
      }
    });

    dialog.querySelectorAll("[data-close-theme]").forEach((button) => {
      button.addEventListener("click", closeThemeDialog);
    });

    dialog.querySelectorAll("[data-theme-option]").forEach((button) => {
      button.addEventListener("click", () => {
        applyTheme(button.dataset.themeOption);
        window.setTimeout(closeThemeDialog, 160);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !dialog.hidden) {
        closeThemeDialog();
        trigger.focus();
      }
    });
  }

  let saved = DEFAULT_THEME;

  try {
    saved = validTheme(localStorage.getItem(STORAGE_KEY));
  } catch {
    saved = DEFAULT_THEME;
  }

  applyTheme(saved);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      createThemeUi();
      applyTheme(saved);
    }, { once: true });
  } else {
    createThemeUi();
    applyTheme(saved);
  }
})();
