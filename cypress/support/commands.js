// cypress/support/commands.js

/**
 * Custom Command, um nach einer bestimmten Stadt zu suchen,
 * unter der Annahme, dass die Suchseite bereits geladen ist.
 *
 * @param {string} cityName - Der Name der Stadt, die gesucht werden soll.
 */
Cypress.Commands.add("searchForCity", (cityName) => {
  // Best Practice: Element-Selektoren in Konstanten/Variablen speichern.
  const SEARCH_INPUT = 'input[placeholder="Stadt eingeben"]';
  const SEARCH_BUTTON = 'button:contains("Suchen")';

  // Eingabefeld leeren, falls es Reste vom vorherigen Test gibt
  cy.get(SEARCH_INPUT).clear();

  // Stadt eingeben und auf den Such-Button klicken
  cy.get(SEARCH_INPUT).type(cityName);
  cy.get(SEARCH_BUTTON).click();
});

// HIER KÖNNTEN SPÄTER WEITERE CUSTOM COMMANDS FOLGEN, WENN NÖTIG
// z.B. Cypress.Commands.add('login', (user) => { ... })
