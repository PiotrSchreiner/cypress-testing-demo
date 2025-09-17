const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementiere hier die Node-Ereignis-Listener, falls nötig.
    },
    // Lege den Pfad für die Testdateien fest.
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },

  // Konfiguration für den Mochawesome-Reporter.
  // Er erstellt eine 'Logging-Datei' in einem speziellen Format.
  reporter: "mochawesome",
  reporterOptions: {
    // Der Ordner, in dem die Berichte gespeichert werden.
    reportDir: "cypress/results",

    // Überschreibe bestehende Berichte nicht, um eine Historie zu erhalten.
    overwrite: false,

    // Erstelle keinen direkten HTML-Bericht (das machen wir später manuell).
    html: false,

    // Speichere die Ergebnisse als JSON-Datei (unsere 'Logging-Datei').
    json: true,
  },
});
