import { initCarousel } from "./carousel.js";
import { initLanguageToggle } from "./i18n.js";
import { initJourneyLinks, initThanksSummary } from "./journey.js";
import { initThemeToggle } from "./theme.js";
import { initUpsellReveal } from "./upsell.js";

document.addEventListener("DOMContentLoaded", function () {
  initLanguageToggle();
  initThemeToggle();
  initJourneyLinks();
  initCarousel();
  initUpsellReveal();
  initThanksSummary();
});
