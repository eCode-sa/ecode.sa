// assets/js/features/theme-toggle.js

(function () {
  const root = document.documentElement; // <html>
  const THEME_KEY = "ecode-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
      theme = "light";
    }
    localStorage.setItem(THEME_KEY, theme);

    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    const icon = btn.querySelector("i");
    if (icon) {
      if (theme === "dark") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    }
  }

  // تحميل الثيم المخزّن
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  // حدث الضغط على الزر
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("#themeToggle");
    if (!btn) return;

    const current = localStorage.getItem(THEME_KEY) || "light";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
  });
})();