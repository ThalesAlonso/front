var STORAGE_KEY = "frontpro-journey";

export function readJourney() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

export function writeJourney(nextJourney) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextJourney));
  } catch (error) {
    return;
  }
}

export function saveJourneyStep(step) {
  var journey = readJourney();
  journey[step] = true;
  writeJourney(journey);
}
