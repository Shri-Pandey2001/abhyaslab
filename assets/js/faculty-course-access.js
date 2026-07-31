/* ==========================================================================
   AbhyasLab — Faculty course workspace access
   ========================================================================== */

(() => {
  "use strict";

  const SESSION_KEY = "abhyaslab.student";

  function getAccount() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }

  function initialise() {
    const account = getAccount();

    if (!account || !account.token) {
      window.location.replace("index.html");
      return;
    }

    if (account.role !== "faculty") {
      window.location.replace(
        account.role === "admin"
          ? "admin.html"
          : account.role === "ta"
            ? "faculty.html"
            : "index.html",
      );
      return;
    }

    document.documentElement.classList.add("faculty-course-mode");

    const topbarRight = document.querySelector(".topbar__right");

    if (topbarRight && !document.getElementById("facultyDashboardBack")) {
      const back = document.createElement("a");
      back.id = "facultyDashboardBack";
      back.className = "faculty-course-back";
      back.href = "faculty.html";
      back.textContent = "← Faculty dashboard";

      topbarRight.insertBefore(
        back,
        topbarRight.firstChild,
      );
    }

    const whoTag = document.getElementById("whoTag");

    if (whoTag) {
      whoTag.hidden = false;
      whoTag.textContent = "Faculty · All units";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialise,
      { once: true },
    );
  } else {
    initialise();
  }
})();
