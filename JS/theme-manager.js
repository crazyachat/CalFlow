// =============================================
// CalFlow - Global Theme Manager
// Place this file in: D:/CalFlow/JS/theme-manager.js
// =============================================

(function () {
  const THEME_KEY = "calflow_theme";
  const DEFAULT_THEME = "theme_style_1";

  // ── 1. Apply the saved theme immediately (prevents flash) ──
  function applyTheme(themeName) {
    // Remove any existing theme link
    const existing = document.getElementById("calflow-theme");
    if (existing) existing.remove();

    // Insert the chosen theme CSS
    const link = document.createElement("link");
    link.id = "calflow-theme";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "../CSS/" + themeName + ".css"; // Adjust path if needed
    document.head.appendChild(link);

    // Save choice to localStorage so all pages remember it
    localStorage.setItem(THEME_KEY, themeName);

    // Highlight the active button (if theme panel is present)
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.classList.toggle("active-theme", btn.dataset.theme === themeName);
    });
  }

  // ── 2. Load saved theme on page load ──
  function loadSavedTheme() {
    const saved = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    applyTheme(saved);
  }

  // ── 3. Hook up theme buttons when DOM is ready ──
  function initThemeButtons() {
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        applyTheme(this.dataset.theme);
      });
    });

    // Highlight whichever is currently active
    const current = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.classList.toggle("active-theme", btn.dataset.theme === current);
    });
  }

  // Apply theme ASAP to prevent flash of unstyled content
  if (document.head) {
    loadSavedTheme();
  }

  // Init buttons after DOM loads
  document.addEventListener("DOMContentLoaded", function () {
    loadSavedTheme();
    initThemeButtons();
  });

  // Expose globally in case you need to call it manually
  window.CalFlowTheme = { apply: applyTheme };
})();