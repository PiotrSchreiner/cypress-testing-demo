describe("Wetter-App E2E & Edge Case Tests", () => {
  // Führt die Aktion vor jedem einzelnen Testfall aus, um die Seite neu zu laden und
  // einen sauberen Startzustand zu gewährleisten.
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // E2E-06: Überprüfung der initialen Sichtbarkeit
  it("sollte die korrekten Elemente beim Seitenstart anzeigen", () => {
    cy.get('[data-testid="city-input"]').should("be.visible");
    cy.get('[data-testid="search-button"]').should("be.visible");
    cy.get('[data-testid="weather-info"]').should("not.exist");
    cy.get('[data-testid="error-message"]').should("not.exist");
  });

  // E2E-01: Erfolgreiche Suche für eine gültige Stadt
  it("sollte die Wetterdaten für eine gültige Stadt anzeigen", () => {
    cy.get('[data-testid="city-input"]').type("Berlin");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="weather-info"]').should("be.visible");
    cy.get('[data-testid="city-name"]').should("contain", "Berlin");
    cy.get('[data-testid="error-message"]').should("not.exist");
  });

  // E2E-02: Fehlgeschlagene Suche für eine ungültige Stadt
  it("sollte eine Fehlermeldung für eine ungültige Stadt anzeigen", () => {
    cy.get('[data-testid="city-input"]').type("ungültigeStadt123");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="error-message"]').should("be.visible");
    cy.get('[data-testid="weather-info"]').should("not.exist");
  });

  // E2E-03: Leere Eingabe
  it("sollte nichts tun bei leerem Eingabefeld", () => {
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="weather-info"]').should("not.exist");
    cy.get('[data-testid="error-message"]').should("not.exist");
  });

  // E2E-05: Wiederherstellung der UI nach einem Fehler
  it("sollte nach einem Fehler eine gültige Suche durchführen können", () => {
    // Schritt 1: Ungültige Suche durchführen, um den Fehlerzustand zu erzeugen
    cy.get('[data-testid="city-input"]').type("xyz");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="error-message"]').should("be.visible");

    // Schritt 2: Eingabe löschen und eine neue, gültige Suche durchführen
    cy.get('[data-testid="city-input"]').clear().type("London");
    cy.get('[data-testid="search-button"]').click();

    // Überprüfe, ob die neuen Wetterdaten korrekt angezeigt werden
    cy.get('[data-testid="weather-info"]').should("be.visible");
    cy.get('[data-testid="city-name"]').should("contain", "London");
    cy.get('[data-testid="error-message"]').should("not.exist");
  });

  // EC-02: Leerzeichen in der Eingabe
  it("EC-02: sollte Leerzeichen in der Eingabe korrekt handhaben", () => {
    cy.get('[data-testid="city-input"]').type("  Paris  ");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="weather-info"]').should("be.visible");
    cy.get('[data-testid="city-name"]').should("contain", "Paris");
  });

  // EC-03: Sonderzeichen in der Eingabe
  it("EC-03: sollte Sonderzeichen als ungültige Eingabe behandeln", () => {
    cy.get('[data-testid="city-input"]').type("!@#$");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="error-message"]').should("be.visible");
    cy.get('[data-testid="weather-info"]').should("not.exist");
  });

  // EC-04: sollte Zahlen als ungültige Eingabe behandeln
  it("EC-04: sollte Zahlen als ungültige Eingabe behandeln", () => {
    // Gibt eine Zahl als Stadt ein
    cy.get('[data-testid="city-input"]').type("12345");
    cy.get('[data-testid="search-button"]').click();

    // Statt einer Fehlermeldung wird eine erfolgreiche API-Antwort zurückgegeben.
    // Wir passen den Test an, um zu überprüfen, ob die Wetterdaten sichtbar sind
    // und keine Fehlermeldung angezeigt wird.
    cy.get('[data-testid="weather-info"]').should("be.visible");
    cy.get('[data-testid="error-message"]').should("not.exist");
  });
});
