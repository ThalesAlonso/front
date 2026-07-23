import { getLanguage, translate } from "./i18n.js";

var THEME_KEY = "frontpro-theme";

export function updateThemeToggleCopy() {
  var toggle = document.querySelector("[data-theme-toggle]");
  var label = document.querySelector("[data-theme-label]");
  var icon = document.querySelector("[data-theme-icon]");

  if (!toggle) {
    return;
  }

  var isDark = document.documentElement.dataset.theme === "dark";
  var language = getLanguage();

  toggle.setAttribute("aria-label", translate(isDark ? "theme.toLight" : "theme.toDark", language));

  if (label) {
    label.textContent = translate(isDark ? "theme.dark" : "theme.light", language);
  }

  if (icon) {
    icon.textContent = isDark ? "\u263e" : "\u2600";
  }
}

export function initThemeToggle() {
  var toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) {
    return;
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    updateThemeToggleCopy();
  }

  applyTheme(document.documentElement.dataset.theme || "light");

  toggle.addEventListener("click", function () {
    var nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });

  document.addEventListener("frontpro:languagechange", updateThemeToggleCopy);
}
