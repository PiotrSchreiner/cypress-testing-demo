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

- **Unit Tests (Logik-Tests)** – Korrekte Verarbeitung von API-Daten und Fehlerbehandlung in der Logik
- **Integrationstests** – Zusammenspiel von UI-Komponenten und Logik mit simulierten API-Antworten
- **End-to-End (E2E) Tests** – Nutzerverhalten simulieren und End-to-End-Fluss überprüfen
- **Edge Case Tests** – Robustheit bei extremen Eingaben prüfen
- **Performance- und Lasttests** – Geschwindigkeit und Stabilität unter Last messen

---

## 📑 Inhaltsverzeichnis

- [Unit Tests (Logik-Tests)](#unit-tests-logik-tests)
- [Integrationstests (IT)](#integrationstests-it)
- [End-to-End (E2E) Tests](#end-to-end-e2e-tests-cypress)
- [Edge Case Tests](#edge-case-tests-ec)
- [Performance- und Lasttests](#performance--und-lasttests-pt)
- [Installation & Setup](#️-installation-und-start)
- [Tests ausführen](#-tests-ausführen)

---

## Unit Tests (Logik-Tests)

| Test Case-ID | Testbeschreibung                                                                             | Erwartetes Ergebnis                                                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **UT-01**    | **Gültiger API-Aufruf:** Funktion `getWeatherData` mit einer gültigen Stadt aufrufen.        | Die Funktion sollte die API erfolgreich aufrufen, die Wetterdaten zurückgeben und den State (`weatherData`) korrekt aktualisieren.         |
| **UT-02**    | **Fehlerbehandlung:** Funktion `getWeatherData` mit einer ungültigen Stadt aufrufen.         | Die Funktion sollte den Fehler korrekt behandeln, den `error`-State auf `true` setzen und den `weatherData`-State auf `null` zurücksetzen. |
| **UT-03**    | **Netzwerkfehler:** Funktion `getWeatherData` bei einem simulierten Netzwerkfehler aufrufen. | Die Funktion sollte den Fehler abfangen und den `error`-State auf `true` setzen.                                                           |
| **UT-04**    | **Datenformat:** Die zurückgegebenen Daten in `weatherData` auf Korrektheit prüfen.          | Überprüfen, ob die Datenfelder (`                                                                                                          |
