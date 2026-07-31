/* ==========================================================================
   AbhyasLab — clean student dashboard v3
   Replaces only the newer gamification dashboard after it renders.
   Topic, quiz, test, project, registration and course logic remain untouched.
   ========================================================================== */

(() => {
  "use strict";

  const SESSION_KEY = "abhyaslab.student";
  let rendering = false;

  function savedUser() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }

  function textOf(element, fallback = "") {
    const value = element && element.textContent
      ? element.textContent.replace(/\s+/g, " ").trim()
      : "";

    return value || fallback;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getRoadmap() {
    return Array.from(document.querySelectorAll("#railList .tnode"))
      .slice(0, 8)
      .map((node, index) => {
        const button = node.querySelector("[data-goto]");
        const title = textOf(node.querySelector(".tnode__t"), `Learning step ${index + 1}`);
        const meta = textOf(node.querySelector(".tnode__k"), "Python learning");
        const target = button ? button.dataset.goto : "";
        const locked = !button || button.disabled || node.classList.contains("is-locked");
        const done = node.classList.contains("is-done");
        const current = node.classList.contains("is-current");

        return {
          title,
          meta,
          target,
          locked,
          done,
          current
        };
      });
  }

  function findMetric(container, labelText) {
    const cards = Array.from(
      container.querySelectorAll(".command-card__stats > div, .stat, .metric-card")
    );

    const card = cards.find((item) =>
      textOf(item).toLowerCase().includes(labelText.toLowerCase())
    );

    if (!card) return "—";

    return textOf(card.querySelector("strong, b"), "—");
  }

  function buildDashboard(main) {
    if (rendering || main.dataset.cleanDashboard === "true") return;

    const missionHero = main.querySelector(".mission-hero");
    if (!missionHero) return;

    const account = savedUser();
    if (!account || String(account.role || "").toLowerCase() !== "student") {
      return;
    }

    rendering = true;

    const firstName =
      textOf(document.getElementById("whoName"), account.name || "Student")
        .split(/\s+/)[0] || "Student";

    const continueButton = missionHero.querySelector("[data-goto]");
    const currentTarget = continueButton ? continueButton.dataset.goto : "";

    const completion =
      textOf(main.querySelector(".mission-orbit strong")) ||
      (() => {
        const meter = document.getElementById("railMeterFill");
        return meter && meter.style.width ? meter.style.width : "0%";
      })();

    const completedSteps =
      textOf(document.getElementById("railCount"), "Course progress");

    const currentTitle =
      textOf(main.querySelector(".command-card h3")) ||
      textOf(document.querySelector("#railList .tnode.is-current .tnode__t")) ||
      "Continue your Python course";

    const currentSummary =
      textOf(main.querySelector(".command-card p")) ||
      "Continue the next unlocked topic, complete its quiz and practise the code tasks.";

    const tasks = findMetric(main, "Code tasks");
    const tests = findMetric(main, "Tests passed");
    const projects = findMetric(main, "Projects");

    const roadmap = getRoadmap();

    const roadmapHtml = roadmap.length
      ? roadmap.map((item, index) => {
          const state = item.done
            ? "is-done"
            : item.current
              ? "is-current"
              : item.locked
                ? "is-locked"
                : "is-open";

          const symbol = item.done ? "✓" : item.locked ? "🔒" : String(index + 1).padStart(2, "0");

          return `
            <button
              class="clean-roadmap__item ${state}"
              type="button"
              ${item.locked || !item.target ? "disabled" : `data-clean-goto="${escapeHtml(item.target)}"`}
            >
              <span class="clean-roadmap__number">${symbol}</span>
              <span class="clean-roadmap__copy">
                <small>${escapeHtml(item.meta)}</small>
                <strong>${escapeHtml(item.title)}</strong>
              </span>
              <span class="clean-roadmap__arrow">${item.done ? "Done" : item.locked ? "Locked" : "Open →"}</span>
            </button>`;
        }).join("")
      : `<div class="clean-empty">Your learning roadmap will appear here.</div>`;

    main.innerHTML = `
      <div class="clean-dashboard">
        <section class="clean-welcome">
          <div class="clean-welcome__copy">
            <span class="clean-kicker">Python programming</span>
            <h1>Welcome back, ${escapeHtml(firstName)}.</h1>
            <p>
              Continue from your latest unlocked lesson. Read the concept,
              clear the quiz and practise Python directly in your browser.
            </p>

            <div class="clean-welcome__actions">
              ${currentTarget
                ? `<button class="btn btn--go clean-primary" type="button" data-clean-goto="${escapeHtml(currentTarget)}">Continue learning</button>`
                : ""}
              <button class="btn btn--ghost clean-ai-action" type="button" data-open-ai>
                Ask AI tutor
              </button>
            </div>
          </div>

          <div class="clean-progress-ring" style="--clean-progress:${escapeHtml(completion)}">
            <div>
              <strong>${escapeHtml(completion)}</strong>
              <span>course complete</span>
            </div>
          </div>
        </section>

        <section class="clean-metrics" aria-label="Course summary">
          <article>
            <span>Learning progress</span>
            <strong>${escapeHtml(completedSteps)}</strong>
          </article>
          <article>
            <span>Code tasks passed</span>
            <strong>${escapeHtml(tasks)}</strong>
          </article>
          <article>
            <span>Tests passed</span>
            <strong>${escapeHtml(tests)}</strong>
          </article>
          <article>
            <span>Projects submitted</span>
            <strong>${escapeHtml(projects)}</strong>
          </article>
        </section>

        <section class="clean-grid">
          <article class="clean-current-card">
            <div>
              <span class="clean-kicker">Current learning step</span>
              <h2>${escapeHtml(currentTitle)}</h2>
              <p>${escapeHtml(currentSummary)}</p>
            </div>

            ${currentTarget
              ? `<button class="btn btn--go" type="button" data-clean-goto="${escapeHtml(currentTarget)}">Open current topic</button>`
              : ""}
          </article>

          <article class="clean-ai-card">
            <span class="clean-ai-card__icon" aria-hidden="true">AI</span>
            <div>
              <span class="clean-kicker">Doubt support</span>
              <h2>Stuck on Python?</h2>
              <p>
                Ask about a concept, an error message or why your output looks
                different. The tutor guides your thinking without completing
                graded work for you.
              </p>
              <button class="btn btn--quiet" type="button" data-open-ai>Ask AI tutor</button>
            </div>
          </article>
        </section>

        <section class="clean-roadmap-section">
          <header>
            <div>
              <span class="clean-kicker">Course roadmap</span>
              <h2>Your Python learning path</h2>
            </div>
            <p>Lessons unlock step by step as you complete the required work.</p>
          </header>

          <div class="clean-roadmap">
            ${roadmapHtml}
          </div>
        </section>

        <footer class="clean-dashboard__footer">
          <span>AbhyasLab · Concept To Code</span>
          <span>Learn carefully. Practise consistently. Build confidently.</span>
        </footer>
      </div>`;

    main.dataset.cleanDashboard = "true";

    main.querySelectorAll("[data-clean-goto]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.cleanGoto;
        const railButton = document.querySelector(
          `#railList [data-goto="${CSS.escape(target)}"]`
        );

        if (railButton && !railButton.disabled) {
          railButton.click();
        }
      });
    });

    main.querySelectorAll("[data-open-ai]").forEach((button) => {
      button.addEventListener("click", () => {
        const askButton = document.getElementById("askBtn");

        if (askButton && !askButton.hidden) {
          askButton.click();
        } else {
          const toast = document.getElementById("toast");
          if (toast) {
            toast.textContent = "AI tutor is still starting. Please try again in a moment.";
            toast.hidden = false;
            window.setTimeout(() => {
              toast.hidden = true;
            }, 3200);
          }
        }
      });
    });

    rendering = false;
  }

  function watchDashboard() {
    const main = document.getElementById("main");
    if (!main) return;

    const observer = new MutationObserver(() => {
      if (!main.querySelector(".mission-hero")) {
        delete main.dataset.cleanDashboard;
      }

      window.requestAnimationFrame(() => buildDashboard(main));
    });

    observer.observe(main, {
      childList: true,
      subtree: true
    });

    window.requestAnimationFrame(() => buildDashboard(main));

    document.getElementById("homeLink")?.addEventListener("click", () => {
      delete main.dataset.cleanDashboard;
      window.setTimeout(() => buildDashboard(main), 0);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", watchDashboard, { once: true });
  } else {
    watchDashboard();
  }
})();
