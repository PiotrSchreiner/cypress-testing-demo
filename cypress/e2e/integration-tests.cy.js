describe("Integration Tests", () => {
  // IT-01: Sollte die Wetterdaten mit einer gemockten API-Antwort korrekt anzeigen
  it("IT-01: sollte die Wetterdaten mit einer gemockten API-Antwort korrekt anzeigen", () => {
    // API-Anfrage abfangen und eine simulierte (gemockte) erfolgreiche Antwort zurückgeben
    cy.intercept("GET", "**/weather**", {
      statusCode: 200,
      body: {
        name: "Berlin",
        main: {
          temp: 18.5,
          humidity: 65,
        },
        weather: [
          {
            description: "leichter Regen",
          },
        ],
      },
    }).as("getWeatherData");

    cy.visit("http://localhost:3000");

    // Eingabe und Klick, der die simulierte API-Anfrage auslöst
    cy.get('[data-testid="city-input"]').type("Berlin");
    cy.get('[data-testid="search-button"]').click();

    // Warten, bis die gemockte Anfrage abgeschlossen ist
    cy.wait("@getWeatherData");

    // Überprüfen, ob die UI die gemockten Daten korrekt anzeigt
    cy.get('[data-testid="city-name"]').should("contain", "Berlin");
    cy.get('[data-testid="temperature"]').should("contain", "19°C");
    cy.get('[data-testid="description"]').should("contain", "leichter Regen");
  });

  // IT-02: Sollte eine Fehlermeldung für eine fehlgeschlagene API-Antwort anzeigen
  it("IT-02: sollte eine Fehlermeldung für eine fehlgeschlagene API-Antwort anzeigen", () => {
    // API-Anfrage abfangen und eine simulierte (gemockte) fehlerhafte Antwort zurückgeben
    cy.intercept("GET", "**/weather**", {
      statusCode: 404,
      body: {
        cod: "404",
        message: "city not found",
      },
    }).as("getWeatherData");

    cy.visit("http://localhost:3000");

    // Eingabe und Klick, der die simulierte fehlerhafte API-Anfrage auslöst
    cy.get('[data-testid="city-input"]').type("ungültigeStadt");
    cy.get('[data-testid="search-button"]').click();

    cy.wait("@getWeatherData");

    // Überprüfen, ob die UI die Fehlermeldung anzeigt und die Wetterdaten nicht sichtbar sind
    cy.get('[data-testid="error-message"]').should("be.visible");
    cy.get('[data-testid="error-message"]').should(
      "contain",
      "Stadt nicht gefunden"
    );
    cy.get('[data-testid="weather-info"]').should("not.exist");
  });

  // IT-03: Sollte einen Netzwerkfehler korrekt behandeln
  it("IT-03: sollte einen Netzwerkfehler korrekt behandeln", () => {
    // API-Anfrage abfangen und einen Timeout-Fehler auslösen
    cy.intercept("GET", "**/weather**", {
      forceNetworkError: true,
    }).as("getWeatherData");

    cy.visit("http://localhost:3000");

    cy.get('[data-testid="city-input"]').type("Berlin");
    cy.get('[data-testid="search-button"]').click();

    cy.wait("@getWeatherData");

    // Überprüfen, ob die Fehlermeldung sichtbar ist
    cy.get('[data-testid="error-message"]').should("be.visible");
    cy.get('[data-testid="error-message"]').should(
      "contain",
      "Stadt nicht gefunden"
    );
    cy.get('[data-testid="weather-info"]').should("not.exist");
  });
});
