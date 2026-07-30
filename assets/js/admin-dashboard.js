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

  if (account.role !== "admin") {
    window.location.replace(account.role === "student" ? "index.html" : "faculty.html");
    return;
  }

  const validation = await API.resume(account);
  if (!validation.ok || validation.account.role !== "admin") {
    localStorage.removeItem(ABHYASLAB_SESSION_KEY);
    window.location.replace("index.html");
    return;
  }

  account.name = validation.account.name || account.name;
  account.email = validation.account.email || account.email;
  account.expiresAt = validation.expiresAt || account.expiresAt;
  localStorage.setItem(ABHYASLAB_SESSION_KEY, JSON.stringify(account));

  document.getElementById("userName").textContent = account.name;
  document.getElementById("userMeta").textContent = `${account.id} · Secure session`;
  document.getElementById("userAvatar").textContent = (account.name || "A").charAt(0).toUpperCase();

  initialiseNavigation();
  document.getElementById("logoutButton").addEventListener("click", () => secureLogout(account));

  async function adminRequest(payload) {
    const config = window.ABHYASLAB_CONFIG || {};
    const response = await fetch(config.functions.admin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": config.publishableKey,
        "x-abhyaslab-session": account.token
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({
      success: false,
      message: "The server returned an unreadable response."
    }));

    if (!response.ok || data.success === false) {
      throw new Error(data.message || "The administration request failed.");
    }

    return data;
  }

  function formValues(form) {
    return Object.fromEntries(new FormData(form).entries());
  }

  function attachForm(id, buildPayload, successMessage) {
    const form = document.getElementById(id);
    if (!form) return;

    form.addEventListener("submit", async event => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      const oldText = button.textContent;
      button.textContent = "Working…";

      try {
        const result = await adminRequest(buildPayload(formValues(form)));
        showDashboardNotice(result.message || successMessage);
        form.reset();
      } catch (error) {
        showDashboardNotice(error.message || "The operation failed.", true);
      } finally {
        button.disabled = false;
        button.textContent = oldText;
      }
    });
  }

  attachForm("createStudentForm", values => ({
    action: "create-student",
    accountId: values.accountId,
    fullName: values.fullName,
    sectionCode: values.sectionCode,
    pin: values.pin,
    email: values.email
  }), "Student created successfully.");

  attachForm("createStaffForm", values => ({
    action: "create-staff",
    role: values.role,
    accountId: values.accountId,
    fullName: values.fullName,
    email: values.email,
    pin: values.pin
  }), "Staff account created successfully.");

  attachForm("createSectionForm", values => ({
    action: "create-section",
    sectionCode: values.sectionCode,
    sectionName: values.sectionName,
    academicYear: values.academicYear,
    term: values.term
  }), "Section created successfully.");

  attachForm("assignStaffForm", values => ({
    action: "assign-staff-section",
    accountId: values.accountId,
    sectionCode: values.sectionCode
  }), "Staff assigned successfully.");
})();
