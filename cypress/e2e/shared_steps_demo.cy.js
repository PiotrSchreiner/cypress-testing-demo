// cypress/e2e/shared_steps_demo.cy.js (Wiederhole die korrekte Version)

describe("Shared Steps Demo: Searching for a city", () => {
  // Vor jedem Test die Seite besuchen und die API-Mocks setzen
  beforeEach(() => {
    // DAS cy.visit() WIRD JETZT FUNKTIONIEREN, WENN DER SERVER LÄUFT UND baseUrl KORREKT IST
    cy.visit("/");

    // API Mock für den Erfolgsfall (Paris)
    cy.intercept(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?q=Paris*",
      {
        statusCode: 200,
        body: {
          main: { temp: 20 },
          name: "Paris",
          weather: [{ description: "cloudy" }],
        },
      }
    ).as("getWeatherSuccess");

    // API Mock für den Fehlerfall (Invalid City Name)
    cy.intercept(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        "Invalid City Name"
      )}*`,
      {
        statusCode: 404, // Ungültige Stadt
        body: {
          cod: "404",
          message: "city not found",
        },
      }
    ).as("getWeatherError");
  });

  it("SSD-01: should successfully display weather details for Paris using the custom command", () => {
    // Shared Step: Suche nach Paris
    cy.searchForCity("Paris");

    // Assertion (Prüfung)
    cy.wait("@getWeatherSuccess"); // Warten auf den erfolgreichen Mock
    cy.contains("Paris").should("be.visible");
    cy.get('[data-testid="temperature"]').should("exist").and("contain", "20");
  });

  it("SSD-02: should display an error for an invalid city using the custom command", () => {
    // Shared Step: Suche nach einer ungültigen Stadt
    cy.searchForCity("Invalid City Name");

    // Assertion: Prüfung auf die Fehlermeldung
    cy.wait("@getWeatherError"); // Warten auf den Fehler-Mock
    cy.contains("Stadt nicht gefunden. Bitte erneut versuchen.").should(
      "be.visible"
    );
  });
});
