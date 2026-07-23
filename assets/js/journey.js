import { readJourney, saveJourneyStep } from "./storage.js";

export function initJourneyLinks() {
  var links = document.querySelectorAll("[data-track-step]");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      saveJourneyStep(link.dataset.trackStep);
    });
  });
}

export function initThanksSummary() {
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
