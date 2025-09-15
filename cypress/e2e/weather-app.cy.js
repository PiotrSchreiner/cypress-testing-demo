describe("Wetter-App E2E Tests", () => {
  // Führe dies vor jedem einzelnen Test aus, um sicherzustellen,
  // dass die App-Seite neu geladen wird und jeder Test in einem
  // sauberen Zustand beginnt.
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // E2E-01: Erfolgreiche Suche nach einer gültigen Stadt
  it("sollte die Wetterdaten für eine gültige Stadt anzeigen", () => {
    // Verifizierung der initialen Sichtbarkeit der Eingabefelder und Buttons
    cy.get('[data-testid="city-input"]').should("be.visible");
    cy.get('[data-testid="search-button"]').should("be.visible");

    // Gib eine gültige Stadt in das Eingabefeld ein
    cy.get('[data-testid="city-input"]').type("Berlin");

    // Klicke auf den Suchen-Button
    cy.get('[data-testid="search-button"]').click();

    // Überprüfe, ob die Wetterinformationen angezeigt werden
    cy.get('[data-testid="weather-info"]').should("be.visible");

    // Überprüfe, ob der Stadtname korrekt angezeigt wird
    cy.get('[data-testid="city-name"]').should("contain", "Berlin");

    // Stelle sicher, dass die Fehlermeldung nicht existiert
    cy.get('[data-testid="error-message"]').should("not.exist");
  });

  // E2E-02: Fehlgeschlagene Suche nach einer ungültigen Stadt
  it("sollte eine Fehlermeldung für eine ungültige Stadt anzeigen", () => {
    // Gib einen ungültigen Stadtnamen ein
    cy.get('[data-testid="city-input"]').type("ungültigeStadt123");

    // Klicke auf den Suchen-Button
    cy.get('[data-testid="search-button"]').click();

    // Überprüfe, ob die Fehlermeldung sichtbar ist
    cy.get('[data-testid="error-message"]').should("be.visible");

    // Überprüfe den Text der Fehlermeldung
    cy.get('[data-testid="error-message"]').should(
      "contain",
      "Stadt nicht gefunden"
    );

    // Überprüfe, dass die Wetterinformationen nicht angezeigt werden
    cy.get('[data-testid="weather-info"]').should("not.exist");
  });

  // E2E-03: Verhalten bei leerem Eingabefeld
  it("sollte nichts tun bei leerem Eingabefeld", () => {
    // Klicke auf den Suchen-Button, ohne etwas einzugeben
    cy.get('[data-testid="search-button"]').click();

    // Stelle sicher, dass weder Wetterinformationen noch Fehlermeldungen angezeigt werden
    cy.get('[data-testid="weather-info"]').should("not.exist");
    cy.get('[data-testid="error-message"]').should("not.exist");
  });

  // E2E-05: Wiederherstellung der Benutzeroberfläche nach einem Fehler
  it("sollte nach einem Fehler eine gültige Suche durchführen können", () => {
    // Schritt 1: Führe eine ungültige Suche durch, um den Fehlerzustand zu erzeugen
    cy.get('[data-testid="city-input"]').type("xyz");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="error-message"]').should("be.visible");

    // Schritt 2: Eingabefeld leeren und eine neue, gültige Suche durchführen
    cy.get('[data-testid="city-input"]').clear().type("London");
    cy.get('[data-testid="search-button"]').click();

    // Überprüfe, ob die neuen Wetterdaten angezeigt werden
    cy.get('[data-testid="weather-info"]').should("be.visible");

    // Überprüfe, ob der Stadtname "London" angezeigt wird
    cy.get('[data-testid="city-name"]').should("contain", "London");

    // Stelle sicher, dass die Fehlermeldung nicht mehr existiert
    cy.get('[data-testid="error-message"]').should("not.exist");
  });

  // E2E-06: Überprüfung der initialen Sichtbarkeit von UI-Elementen
  it("sollte die korrekten Elemente beim Seitenstart anzeigen", () => {
    // Überprüfe, ob das Eingabefeld und der Suchen-Button beim Start sichtbar sind
    cy.get('[data-testid="city-input"]').should("be.visible");
    cy.get('[data-testid="search-button"]').should("be.visible");

    // Überprüfe, ob die Bereiche für Wetterinformationen und Fehlermeldungen unsichtbar sind
    cy.get('[data-testid="weather-info"]').should("not.exist");
    cy.get('[data-testid="error-message"]').should("not.exist");
  });
});
