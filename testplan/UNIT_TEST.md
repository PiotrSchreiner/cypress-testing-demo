# Unit Tests (Logik-Tests)

| Test Case-ID | Testbeschreibung                                                                             | Erwartetes Ergebnis                                                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **UT-01**    | **Gültiger API-Aufruf:** Funktion `getWeatherData` mit einer gültigen Stadt aufrufen.        | Die Funktion sollte die API erfolgreich aufrufen, die Wetterdaten zurückgeben und den State (`weatherData`) korrekt aktualisieren.         |
| **UT-02**    | **Fehlerbehandlung:** Funktion `getWeatherData` mit einer ungültigen Stadt aufrufen.         | Die Funktion sollte den Fehler korrekt behandeln, den `error`-State auf `true` setzen und den `weatherData`-State auf `null` zurücksetzen. |
| **UT-03**    | **Netzwerkfehler:** Funktion `getWeatherData` bei einem simulierten Netzwerkfehler aufrufen. | Die Funktion sollte den Fehler abfangen und den `error`-State auf `true` setzen.                                                           |
| **UT-04**    | **Datenformat:** Die zurückgegebenen Daten in `weatherData` auf Korrektheit prüfen.          | Überprüfen, ob die Datenfelder (`name`, `main.temp`, `weather[0].description`, `main.humidity`) vorhanden und vom korrekten Datentyp sind. |
