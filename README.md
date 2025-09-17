# 🧪 Software-Testing-Portfolio: Wetter-App

Dieses Projekt ist eine umfassende Demonstration von Fähigkeiten im Software-Testing und in der Qualitätssicherung (QA).  
Es umfasst eine voll funktionsfähige Wetter-App, die mit **Next.js** und **Tailwind CSS** erstellt wurde, und eine vollständige Test-Suite, die verschiedene Testkategorien abdeckt.

Das Ziel dieses Projekts ist es, einen systematischen Ansatz für das Testen einer Webanwendung zu demonstrieren.

---

## 🚀 Technologien

- **Next.js** – Das React-Framework für die App
- **Tailwind CSS** – Für schnelles und modernes Styling
- **Cypress** – Primäres End-to-End (E2E) und Integration Testing Framework

--

## 🧪 Teststrategie

Die Testfälle sind in verschiedene Kategorien unterteilt:

- **[Unit Tests (Logik-Tests)](testplan/UNIT_TEST.md)** – Korrekte Verarbeitung von API-Daten und Fehlerbehandlung in der Logik
- **[Integrationstests](testplan/INTIGRATION_TEST.md)** – Zusammenspiel von UI-Komponenten und Logik mit simulierten API-Antworten
- **[End-to-End (E2E) Tests](testplan/E2E_TEST.md)** – Nutzerverhalten simulieren und End-to-End-Fluss überprüfen
- **[Edge Case Tests](testplan/EDGE_CASES.md)** – Robustheit bei extremen Eingaben prüfen
- **[Performance- und Lasttests](testplan/PERFORMANCE_TEST.md)** – Geschwindigkeit und Stabilität unter Last messen

---

## 📑 Inhaltsverzeichnis

- [Unit Tests](testplan/UNIT_TEST.md)
- [Integrationstests](testplan/INTIGRATION_TEST.md)
- [End-to-End (E2E) Tests](testplan/E2E_TEST.md)
- [Edge Case Tests](testplan/EDGE_CASES.md)
- [Performance- und Lasttests](testplan/PERFORMANCE_TEST.md)
- [Installation & Setup](#installation--setup)
- [Tests ausführen](#tests-ausführen)

---

## 🛠️ Installation & Setup

1.  **Repository klonen:**

    ```bash
    git clone [https://github.com/PiotrSchreiner/cypress-testing-demo.git](https://github.com/PiotrSchreiner/cypress-testing-demo.git)
    cd cypress-testing-demo
    ```

2.  **Abhängigkeiten installieren:**

    ```bash
    npm install
    ```

3.  **API-Schlüssel einrichten:**
    Erstelle eine `.env.local`-Datei im Hauptverzeichnis des Projekts und füge deinen OpenWeatherMap API-Schlüssel hinzu:

    ```
    NEXT_PUBLIC_API_KEY=dein_api_schlüssel_hier
    ```

4.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```

---

## 🔍 Tests ausführen

1.  **Stelle sicher, dass der Entwicklungsserver läuft:**

    ```bash
    npm run dev
    ```

2.  **Öffne Cypress:**
    ```bash
    npx cypress open
    ```
    Wähle im Cypress Test Runner die Option **"E2E Testing"**. Du kannst die Testdateien (`weather-app.cy.js`, `integration-tests.cy.js`, `performance-tests.cy.js`) nun einzeln oder alle zusammen ausführen.
