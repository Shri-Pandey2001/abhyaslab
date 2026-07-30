/* AbhyasLab frontend-only interaction polish. No API or backend calls. */
(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function scrollToAuth() {
    const card = $("#authCard");
    const input = $("#regId");
    if (card) card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    window.setTimeout(() => input && input.focus(), reduceMotion ? 0 : 420);
  }

  $("#startMissionBtn")?.addEventListener("click", scrollToAuth);
  $("#viewRoadmapBtn")?.addEventListener("click", () => {
    $("#roadmapPreview")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  });

  const focusButton = $("#focusModeBtn");
  function setFocusMode(enabled) {
    document.body.classList.toggle("focus-mode", enabled);
    focusButton?.setAttribute("aria-pressed", String(enabled));
    if (focusButton) {
      const label = $("em", focusButton);
      if (label) label.textContent = enabled ? "Exit focus" : "Focus";
      focusButton.title = enabled ? "Show navigation and exit focus mode" : "Hide distractions and focus on the lesson";
    }
    try { localStorage.setItem("abhyaslab.focusMode", enabled ? "1" : "0"); } catch {}
  }

  let savedFocus = false;
  try { savedFocus = localStorage.getItem("abhyaslab.focusMode") === "1"; } catch {}
  setFocusMode(savedFocus);
  focusButton?.addEventListener("click", () => setFocusMode(!document.body.classList.contains("focus-mode")));
  document.addEventListener("keydown", event => {
    if (event.altKey && event.key.toLowerCase() === "m") {
      event.preventDefault();
      setFocusMode(!document.body.classList.contains("focus-mode"));
    }
  });

  if (!reduceMotion) {
    window.addEventListener("pointermove", event => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    }, { passive: true });
  }

  function addRipple(event) {
    const button = event.target.closest(".btn, .quest, .career-card, .prow, .snack-options button");
    if (!button || reduceMotion || button.disabled) return;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ui-ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    button.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 650);
  }
  document.addEventListener("pointerdown", addRipple);

  const readingBar = document.createElement("div");
  readingBar.className = "reading-progress";
  readingBar.setAttribute("aria-hidden", "true");
  readingBar.innerHTML = "<i></i>";
  document.body.appendChild(readingBar);

  const main = $("#main");
  function updateReadingProgress() {
    if (!main || $("#app")?.hidden) {
      readingBar.classList.remove("is-visible");
      return;
    }
    const max = Math.max(1, main.scrollHeight - main.clientHeight);
    const percent = Math.min(100, Math.max(0, main.scrollTop / max * 100));
    $("i", readingBar).style.width = `${percent}%`;
    readingBar.classList.toggle("is-visible", max > 10);
  }
  main?.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress, { passive: true });

  function animateScreen() {
    if (!main) return;
    main.classList.remove("screen-enter");
    void main.offsetWidth;
    main.classList.add("screen-enter");
    updateReadingProgress();
  }

  if (main) {
    new MutationObserver(animateScreen).observe(main, { childList: true });
  }

  function celebrate() {
    if (reduceMotion) return;
    const layer = document.createElement("div");
    layer.className = "celebration-layer";
    const symbols = ["★", "✦", "◆", "</>", "Py"];
    for (let i = 0; i < 30; i += 1) {
      const particle = document.createElement("i");
      particle.textContent = symbols[i % symbols.length];
      particle.style.setProperty("--x", `${10 + Math.random() * 80}vw`);
      particle.style.setProperty("--delay", `${Math.random() * .25}s`);
      particle.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
      particle.style.setProperty("--spin", `${-180 + Math.random() * 360}deg`);
      layer.appendChild(particle);
    }
    document.body.appendChild(layer);
    window.setTimeout(() => layer.remove(), 1800);
  }
  window.addEventListener("abhyaslab:celebrate", celebrate);

  function attachTilt(card) {
    if (reduceMotion || card.dataset.tiltReady) return;
    card.dataset.tiltReady = "1";
    card.addEventListener("pointermove", event => {
      if (window.innerWidth < 900) return;
      const rect = card.getBoundingClientRect();
      const rx = ((event.clientY - rect.top) / rect.height - .5) * -3;
      const ry = ((event.clientX - rect.left) / rect.width - .5) * 4;
      card.style.setProperty("--tilt-x", `${rx}deg`);
      card.style.setProperty("--tilt-y", `${ry}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    });
  }

  function scanInteractiveCards() {
    $$(".career-card, .command-card, .daily-snack").forEach(attachTilt);
  }
  scanInteractiveCards();
  if (main) new MutationObserver(scanInteractiveCards).observe(main, { childList: true, subtree: true });
})();
