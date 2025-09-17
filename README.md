# 🧪 Software-Testing-Portfolio: Wetter-App

Dieses Projekt ist eine umfassende Demonstration von Fähigkeiten im Software-Testing und in der Qualitätssicherung (QA).  
Es umfasst eine voll funktionsfähige Wetter-App, die mit **Next.js** und **Tailwind CSS** erstellt wurde, und eine vollständige Test-Suite, die verschiedene Testkategorien abdeckt.

Das Ziel dieses Projekts ist es, einen systematischen Ansatz für das Testen einer Webanwendung zu demonstrieren.

---

## 🚀 Technologien

- **Next.js** – Das React-Framework für die App
- **Tailwind CSS** – Für schnelles und modernes Styling
- **Cypress** – Primäres End-to-End (E2E) und Integration Testing Framework

---

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
- [Testberichte generieren](#testberichte-generieren)

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

Um die Tests auszuführen, muss der Entwicklungsserver laufen.

1.  **Server starten:**

    ```bash
    npm run dev
    ```

2.  **Tests im Headless-Modus ausführen:**
    Führe die Tests in deinem Terminal aus. Dies ist der Modus, der auch die Testberichte generiert.
    ```bash
    npx cypress run
    ```

---

## 📄 Testberichte generieren

Nachdem die Tests mit `npx cypress run` abgeschlossen sind, werden die Ergebnisse als JSON-Datei in einem neuen Ordner namens `cypress/results` gespeichert.

1.  **JSON-Bericht in HTML umwandeln:**
    Um einen lesbaren, interaktiven HTML-Bericht zu erstellen, führe folgenden Befehl aus:

    ```bash
    npx mochawesome-report-generator cypress/results/*.json --output cypress/results/html --report-title "Wetter-App Testbericht"
    ```

2.  **Bericht öffnen:**
    Den generierten Bericht findest du unter `cypress/results/html/mochawesome.html`. Öffne diese Datei in deinem Browser, um einen detaillierten Überblick über die Testergebnisse zu erhalten.
