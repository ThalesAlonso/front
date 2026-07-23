import { LANGUAGE_KEY, TRANSLATIONS } from "./translations.js";

export function getLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "pt";
}

export function translate(key, language) {
  var dictionary = TRANSLATIONS[language] || TRANSLATIONS.pt;
  return dictionary[key] || TRANSLATIONS.pt[key] || key;
}

export function applyLanguage(language) {
  document.documentElement.lang = language === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    element.textContent = translate(element.dataset.i18n, language);
  });

  document.querySelectorAll("[data-language-toggle]").forEach(function (toggle) {
    toggle.setAttribute("aria-label", translate("language.toggle", language));
  });

  document.querySelectorAll("[data-language-label]").forEach(function (label) {
    label.textContent = language === "en" ? "EN" : "PT";
  });

  document.dispatchEvent(new CustomEvent("frontpro:languagechange", { detail: { language: language } }));
}

export function initLanguageToggle() {
  var toggles = document.querySelectorAll("[data-language-toggle]");

  applyLanguage(getLanguage());

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var nextLanguage = getLanguage() === "en" ? "pt" : "en";
      localStorage.setItem(LANGUAGE_KEY, nextLanguage);
      applyLanguage(nextLanguage);
    });
  });
}
