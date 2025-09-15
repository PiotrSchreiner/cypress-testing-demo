describe("Performance Tests", () => {
  it("PT-01: sollte die Seite schnell laden", () => {
    // Startet die Zeitmessung
    const start = performance.now();

    // Besucht die Seite
    cy.visit("http://localhost:3000").then(() => {
      // Stoppt die Zeitmessung und berechnet die Differenz
      const end = performance.now();
      const loadTime = end - start;

      // Überprüft, ob die Ladezeit unter einem Schwellenwert liegt (z.B. 3000ms)
      expect(loadTime).to.be.lessThan(3000); // 3 Sekunden
      cy.log(`Seitenladezeit: ${loadTime.toFixed(2)}ms`);
    });
  });

  it("PT-02: sollte eine schnelle API-Antwort haben", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="city-input"]').type("Berlin");

    // Startet die Zeitmessung für den API-Aufruf
    cy.window().then((win) => {
      win.performance.mark("startFetch");
    });

    cy.get('[data-testid="search-button"]').click();

    cy.wait(500); // Eine kleine Pause, um die UI-Änderungen zu ermöglichen

    // Wartet, bis die Wetterinformationen sichtbar sind
    cy.get('[data-testid="weather-info"]')
      .should("be.visible")
      .then(() => {
        // Stoppt die Zeitmessung
        cy.window().then((win) => {
          win.performance.mark("endFetch");
          win.performance.measure("fetchTime", "startFetch", "endFetch");
          const fetchTime =
            win.performance.getEntriesByName("fetchTime")[0].duration;

          // Überprüft, ob die API-Antwortzeit unter einem Schwellenwert liegt (z.B. 2000ms)
          expect(fetchTime).to.be.lessThan(2000); // 2 Sekunden
          cy.log(`API-Antwortzeit: ${fetchTime.toFixed(2)}ms`);
        });
      });
  });
});
