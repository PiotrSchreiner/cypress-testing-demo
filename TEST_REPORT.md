# 📝 Testbericht: Wetter-App

---

## 1. Zusammenfassung

Dieses Dokument fasst die Qualitätssicherung und die Testergebnisse für die Wetter-App zusammen.  
Die Tests wurden durchgeführt, um die Funktionalität, Stabilität und Leistung der Anwendung zu überprüfen.  
Ziel war es sicherzustellen, dass die App zuverlässig funktioniert und den Benutzern eine gute Erfahrung bietet.

---

## 2. Testübersicht

Die Tests wurden in verschiedene Kategorien unterteilt, um alle wichtigen Bereiche der Anwendung abzudecken.

| Testkategorie    | Anzahl der Testfälle | Bestanden | Fehlgeschlagen |
| ---------------- | -------------------- | --------- | -------------- |
| End-to-End (E2E) | 8                    | 7         | 1              |
| Integration      | 3                    | 3         | 0              |
| Performance      | 2                    | 2         | 0              |
| **Gesamt**       | 13                   | 12        | 1              |

_Hinweis: Die Tabelle kann bei Bedarf in Google Sheets exportiert werden._

---

## 3. Detaillierte Testergebnisse

### End-to-End (E2E) & Edge Cases

- **Bestanden:**  
  Alle Tests für die grundlegende Funktionalität (gültige/ungültige Suche, Wiederherstellung nach Fehler, leere Eingabe) wurden erfolgreich abgeschlossen. Die App verhält sich in diesen Szenarien wie erwartet.

- **Fehlgeschlagen:**  
  Ein Testfall (**EC-04**) ist fehlgeschlagen. Dieser Test sollte die Eingabe einer Zahl (z. B. `"12345"`) als ungültig behandeln.  
  Tatsächlich erkennt die externe Wetter-API diese Eingabe als gültigen Ort und liefert Daten zurück. Der Fehler liegt somit nicht in der App-Logik, sondern in einer falschen Annahme über die API.  
  Der Test wurde entsprechend angepasst.

---

### Integrationstests

- **Bestanden:**  
  Alle drei Integrationstests, die das Verhalten der API simulieren, wurden erfolgreich abgeschlossen.  
  Die App-Logik verarbeitet die Daten korrekt, und die Benutzeroberfläche passt sich erwartungsgemäß an, egal ob die API eine erfolgreiche Antwort, eine Fehlermeldung oder einen Netzwerkfehler zu
