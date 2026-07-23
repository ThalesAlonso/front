import { getLanguage } from "./i18n.js";

function updateCarouselLabels(language) {
  var dots = document.querySelectorAll("[data-carousel-dot]");

  dots.forEach(function (dot) {
    var slideNumber = dot.dataset.carouselDot;
    dot.setAttribute(
      "aria-label",
      language === "en" ? "Show slide " + slideNumber : "Mostrar slide " + slideNumber
    );
  });
}

export function initCarousel() {
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
    dot.dataset.carouselDot = String(index + 1);
    dot.setAttribute("aria-current", index === 0 ? "true" : "false");
    dot.setAttribute("tabindex", index === 0 ? "0" : "-1");

    dot.addEventListener("click", function () {
      showSlide(index);
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
    slide.hidden = index !== 0;
  });

  updateCarouselLabels(getLanguage());

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

  document.addEventListener("frontpro:languagechange", function (event) {
    updateCarouselLabels(event.detail.language);
  });
}
