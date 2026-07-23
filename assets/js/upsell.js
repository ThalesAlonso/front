export function initUpsellReveal() {
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
