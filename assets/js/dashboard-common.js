const ABHYASLAB_SESSION_KEY = "abhyaslab.student";

function getSavedAccount() {
  try {
    return JSON.parse(localStorage.getItem(ABHYASLAB_SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function showDashboardNotice(message, isError = false) {
  const notice = document.getElementById("notice");
  if (!notice) return;
  notice.textContent = message;
  notice.className = `notice is-visible${isError ? " is-error" : ""}`;
  window.setTimeout(() => {
    notice.className = "notice";
  }, 5000);
}

function initialiseNavigation() {
  document.querySelectorAll("[data-panel]").forEach(button => {
    button.addEventListener("click", () => openDashboardPanel(button.dataset.panel));
  });
  document.querySelectorAll("[data-open-panel]").forEach(button => {
    button.addEventListener("click", () => openDashboardPanel(button.dataset.openPanel));
  });
  document.getElementById("menuButton")?.addEventListener("click", () => {
    document.getElementById("sidebar")?.classList.toggle("is-open");
  });
}

function openDashboardPanel(name) {
  document.querySelectorAll("[data-panel-view]").forEach(panel => {
    panel.classList.toggle("is-active", panel.dataset.panelView === name);
  });
  document.querySelectorAll("[data-panel]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.panel === name);
  });
  document.getElementById("sidebar")?.classList.remove("is-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function secureLogout(account) {
  try {
    await API.logout(account);
  } finally {
    localStorage.removeItem(ABHYASLAB_SESSION_KEY);
    window.location.replace("index.html");
  }
}
