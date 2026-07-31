/* ==========================================================================
   AbhyasLab — Supabase Edge Functions API client
   Keeps the response format expected by the existing application.
   ========================================================================== */

const API = (() => {
  "use strict";

  const settings = () => window.ABHYASLAB_CONFIG || {};
  const functions = () => settings().functions || {};

  function isConfigured() {
    const cfg = settings();

    return Boolean(
      cfg &&
      typeof cfg.publishableKey === "string" &&
      cfg.publishableKey.startsWith("sb_") &&
      typeof functions().auth === "string" &&
      functions().auth.includes("/functions/v1/")
    );
  }

  function tokenFrom(account) {
    return account && typeof account.token === "string"
      ? account.token.trim()
      : "";
  }

  function messageOf(value, fallback) {
    return typeof value === "string" && value.trim()
      ? value.trim()
      : fallback;
  }

  function normaliseUser(user = {}) {
    return {
      id: user.accountId || user.account_id || "",
      name: user.fullName || user.full_name || "AbhyasLab User",
      email: user.email || "",
      section:
        user.sectionCode ||
        user.section_code ||
        user.sectionName ||
        user.section_name ||
        "",
      role: user.role || "student",
      status: user.status || "active",
      userId: user.userId || user.user_id || ""
    };
  }

  function normaliseState(state) {
    const safe = state && typeof state === "object" ? state : {};

    return {
      progress:
        safe.progress && typeof safe.progress === "object"
          ? safe.progress
          : {},
      tests:
        safe.tests && typeof safe.tests === "object"
          ? safe.tests
          : {},
      projects:
        safe.projects && typeof safe.projects === "object"
          ? safe.projects
          : {},
      summary: safe.summary || null
    };
  }

  async function request(url, payload, token = "", options = {}) {
    if (!isConfigured()) {
      return {
        success: false,
        message: "Supabase frontend configuration is missing."
      };
    }

    if (!url) {
      return {
        success: false,
        message: "This AbhyasLab service has not been deployed yet."
      };
    }

    const headers = {
      "Content-Type": "application/json",
      "apikey": settings().publishableKey
    };

    if (token) {
      headers["x-abhyaslab-session"] = token;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        keepalive: options.keepalive === true
      });

      const raw = await response.text();
      let data = {};

      if (raw) {
        try {
          data = JSON.parse(raw);
        } catch {
          return {
            success: false,
            message: "The server returned an unreadable response."
          };
        }
      }

      if (!response.ok || data.success === false) {
        return {
          ...data,
          success: false,
          message: messageOf(
            data.message,
            `Request failed with status ${response.status}.`
          )
        };
      }

      return {
        ...data,
        success: true
      };
    } catch (error) {
      console.error("AbhyasLab request failed:", error);

      return {
        success: false,
        message:
          "Could not reach AbhyasLab. Check your internet connection and try again."
      };
    }
  }

  function legacyResult(result, fallback) {
    return result.success
      ? {
          ...result,
          ok: true
        }
      : {
          ...result,
          ok: false,
          error: messageOf(result.message, fallback)
        };
  }

  async function core(action, account, values = {}, options = {}) {
    const result = await request(
      functions().core,
      {
        action,
        ...values
      },
      tokenFrom(account),
      options
    );

    return legacyResult(result, "The requested course operation failed.");
  }

  return {
    isLive: isConfigured,

    async login(_selectedRole, accountId, pin) {
      const result = await request(functions().auth, {
        action: "login",
        accountId: String(accountId || "").trim(),
        pin: String(pin || "").trim()
      });

      if (!result.success) {
        return {
          ok: false,
          error: messageOf(result.message, "Sign-in failed.")
        };
      }

      const session = result.session || {};

      return {
        ok: true,
        token: session.token || "",
        expiresAt: session.expiresAt || session.expires_at || "",
        account: normaliseUser(result.user),
        state: normaliseState(result.state)
      };
    },

    async resume(account) {
      const token = tokenFrom(account);

      if (!token) {
        return {
          ok: false,
          error: "Your saved session is missing. Sign in again."
        };
      }

      const result = await request(
        functions().auth,
        {
          action: "validate-session"
        },
        token
      );

      if (!result.success) {
        return {
          ok: false,
          error: messageOf(result.message, "Your session has ended.")
        };
      }

      const session = result.session || {};
      const current = normaliseUser(result.user);

      return {
        ok: true,
        expiresAt:
          session.expiresAt ||
          session.expires_at ||
          account.expiresAt ||
          "",
        account: {
          ...current,
          section: current.section || account.section || ""
        },
        state: normaliseState(result.state)
      };
    },

    async logout(account) {
      const token = tokenFrom(account);

      if (!token) {
        return {
          ok: true
        };
      }

      const result = await request(
        functions().auth,
        {
          action: "logout"
        },
        token
      );

      return legacyResult(result, "Sign-out could not be completed.");
    },

    async listSections() {
      const result = await request(functions().auth, {
        action: "list-sections"
      });

      return legacyResult(result, "Sections are currently unavailable.");
    },

    async registerStudent(values = {}) {
      const result = await request(functions().auth, {
        action: "register-student",
        accountId: String(values.id || values.accountId || "").trim(),
        fullName: String(values.name || values.fullName || "").trim(),
        email: String(values.email || "").trim(),
        section: String(values.section || values.sectionCode || "").trim(),
        pin: String(values.pin || "").trim()
      });

      if (!result.success) {
        return {
          ...result,
          ok: false,
          error: messageOf(
            result.message,
            "The student account could not be created."
          )
        };
      }

      const session = result.session || {};

      return {
        ...result,
        ok: true,
        token: session.token || "",
        expiresAt: session.expiresAt || session.expires_at || "",
        account: normaliseUser(result.user),
        state: normaliseState(result.state)
      };
    },

    syncCourse(account, schema) {
      return core("sync-course", account, {
        schema
      });
    },

    logProgress(account, row) {
      return core("save-progress", account, {
        progress: row
      });
    },

    logTest(account, row) {
      return core("save-test-result", account, {
        test: row
      });
    },

    submitProject(account, row) {
      return core("submit-project", account, {
        project: row
      });
    },

    heartbeat(account, row) {
      return core("heartbeat", account, {
        heartbeat: row
      });
    },

    beacon(account, row) {
      const token = tokenFrom(account);

      if (!token || !functions().core) {
        return false;
      }

      request(
        functions().core,
        {
          action: "heartbeat",
          heartbeat: row
        },
        token,
        {
          keepalive: true
        }
      );

      return true;
    },

    flag(account, row) {
      if (!CONFIG.integrityLogging) {
        return Promise.resolve({
          ok: false
        });
      }

      return core("integrity-event", account, {
        event: row
      });
    },

    async ask(account, question, context, history) {
      const result = await request(
        functions().ai,
        {
          action: "ask-doubt",
          question,
          context,
          history: Array.isArray(history) ? history.slice(-6) : []
        },
        tokenFrom(account)
      );

      return legacyResult(result, "The AI doubt service is unavailable.");
    },

    facultyDashboard(account) {
      return core("faculty-dashboard", account);
    },

    facultyStudent(account, studentId) {
      return core("faculty-student", account, {
        studentId
      });
    },

    createSection(account, sectionName) {
      return core("create-section", account, {
        sectionName
      });
    },

    studentAction(
      account,
      studentId,
      operation,
      unit = "",
      confirmation = ""
    ) {
      return core("student-action", account, {
        studentId,
        operation,
        unit,
        confirmation
      });
    },

    approveProject(account, studentId, unit, score, feedback) {
      return core("approve-project", account, {
        studentId,
        unit,
        score,
        feedback
      });
    }
  };
})();
