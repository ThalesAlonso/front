(function () {
  var STORAGE_KEY = "frontpro-journey";

  function readJourney() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  function writeJourney(nextJourney) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextJourney));
    } catch (error) {
      return;
    }
  }

  function saveJourneyStep(step) {
    var journey = readJourney();
    journey[step] = true;
    writeJourney(journey);
  }

  function initThemeToggle() {
    var toggle = document.querySelector("[data-theme-toggle]");
    var label = document.querySelector("[data-theme-label]");
    var icon = document.querySelector("[data-theme-icon]");

    if (!toggle) {
      return;
    }

    function applyTheme(theme) {
      var isDark = theme === "dark";
      document.documentElement.dataset.theme = theme;
      toggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");

      if (label) {
        label.textContent = isDark ? "Dark" : "Light";
      }

      if (icon) {
        icon.textContent = isDark ? "☾" : "☀";
      }
    }

    applyTheme(document.documentElement.dataset.theme || "light");

    toggle.addEventListener("click", function () {
      var nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("frontpro-theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  function initJourneyLinks() {
    var links = document.querySelectorAll("[data-track-step]");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        saveJourneyStep(link.dataset.trackStep);
      });
    });
  }

  function initCarousel() {
    var carousel = document.querySelector("[data-carousel]");

    if (!carousel) {
      return;
    }

    var slides = Array.prototype.slice.call(carousel.querySelectorAll("[data-slide]"));
    var prevButton = carousel.querySelector("[data-carousel-prev]");
    var nextButton = carousel.querySelector("[data-carousel-next]");
    var dotsContainer = carousel.querySelector("[data-carousel-dots]");
    var currentIndex = 0;
    var dots = [];

    function showSlide(nextIndex) {
      currentIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, index) {
        var isActive = index === currentIndex;
        slide.hidden = !isActive;
        slide.classList.toggle("is-active", isActive);
      });

      dots.forEach(function (dot, index) {
        var isSelected = index === currentIndex;
        dot.setAttribute("aria-current", String(isSelected));
        dot.setAttribute("tabindex", isSelected ? "0" : "-1");
      });
    }

    slides.forEach(function (slide, index) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot-button";
      dot.setAttribute("aria-label", "Mostrar slide " + (index + 1));
      dot.setAttribute("aria-current", index === 0 ? "true" : "false");
      dot.setAttribute("tabindex", index === 0 ? "0" : "-1");

      dot.addEventListener("click", function () {
        showSlide(index);
      });

      dotsContainer.appendChild(dot);
      dots.push(dot);
      slide.hidden = index !== 0;
    });

    prevButton.addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(currentIndex + 1);
      }
    });
  }

  function initUpsellReveal() {
    var reveal = document.querySelector("[data-upsell-reveal]");

    if (!reveal) {
      return;
    }

    var delay = Number(reveal.dataset.delay) || 12000;
    var title = reveal.querySelector("[data-reveal-title]");

    window.setTimeout(function () {
      reveal.hidden = false;
      reveal.scrollIntoView({ behavior: "smooth", block: "start" });

      if (title) {
        title.focus({ preventScroll: true });
      }
    }, delay);
  }

  function initThanksSummary() {
    var summaryList = document.querySelector("[data-summary-list]");

    if (!summaryList) {
      return;
    }

    var journey = readJourney();

    if (journey["upsell-accepted"]) {
      var item = document.createElement("li");
      item.textContent = "Mentoria Express FrontPro";
      summaryList.appendChild(item);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initJourneyLinks();
    initCarousel();
    initUpsellReveal();
    initThanksSummary();
  });
})();
