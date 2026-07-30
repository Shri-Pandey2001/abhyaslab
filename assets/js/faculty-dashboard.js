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

(async () => {
  "use strict";

  const account = getSavedAccount();

  if (!account || !account.token) {
    window.location.replace("index.html");
    return;
  }

  if (!["faculty", "ta"].includes(account.role)) {
    window.location.replace(account.role === "admin" ? "admin.html" : "index.html");
    return;
  }

  const validation = await API.resume(account);
  if (!validation.ok || !["faculty", "ta"].includes(validation.account.role)) {
    localStorage.removeItem(ABHYASLAB_SESSION_KEY);
    window.location.replace("index.html");
    return;
  }

  account.name = validation.account.name || account.name;
  account.role = validation.account.role || account.role;
  account.expiresAt = validation.expiresAt || account.expiresAt;
  localStorage.setItem(ABHYASLAB_SESSION_KEY, JSON.stringify(account));

  const roleLabel = account.role === "ta" ? "Teaching Assistant" : "Faculty";
  document.getElementById("userName").textContent = account.name;
  document.getElementById("userMeta").textContent = `${account.id} · ${roleLabel}`;
  document.getElementById("userAvatar").textContent = (account.name || "F").charAt(0).toUpperCase();
  document.getElementById("roleMetric").textContent = roleLabel;
  document.getElementById("welcomeHeading").textContent = `Welcome, ${account.name.split(" ")[0]}.`;

  initialiseNavigation();
  document.getElementById("logoutButton").addEventListener("click", () => secureLogout(account));
})();
