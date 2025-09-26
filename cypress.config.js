// cypress.config.js

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // 💡 FEHLERBEHEBUNG: Fügen Sie die Basis-URL Ihrer laufenden App hinzu.
    // **WICHTIG: Ersetzen Sie '3000' durch den tatsächlichen Port Ihrer App!**
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // Implementiere hier die Node-Ereignis-Listener, falls nötig.
    },

    // Expliziter Pfad zur Support-Datei ist gut, um sicherzustellen, dass Custom Commands geladen werden.
    supportFile: "cypress/support/e2e.js",

    // Lege den Pfad für die Testdateien fest.
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },

  // Konfiguration für den Mochawesome-Reporter.
  reporter: "mochawesome",
  reporterOptions: {
    // Der Ordner, in dem die Berichte gespeichert werden.
    reportDir: "cypress/results",

    // Überschreibe bestehende Berichte nicht, um eine Historie zu erhalten.
    overwrite: false,

    // Erstelle keinen direkten HTML-Bericht.
    html: false,

    // Speichere die Ergebnisse als JSON-Datei.
    json: true,
  },
});
