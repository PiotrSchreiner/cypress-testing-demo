"use client";

import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const getWeatherData = async () => {
    if (!city.trim()) {
      setError(false);
      setWeatherData(null);
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric&lang=de`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Stadt nicht gefunden");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(false);
    } catch (err) {
      setError(true);
      setWeatherData(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeatherData();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Wetter-App</h1>
        <div className="flex flex-col items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Stadt eingeben"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
            className="p-2 border border-gray-300 rounded-md w-full"
            data-testid="city-input"
          />
          <button
            onClick={getWeatherData}
            className="bg-blue-500 text-black p-2 rounded-md hover:bg-blue-600 transition duration-300 w-full"
            data-testid="search-button"
          >
            Suchen
          </button>
        </div>

        {weatherData && (
          <div
            className="bg-blue-200 p-4 text-gray-600 rounded-md mt-4"
            data-testid="weather-info"
          >
            <h2 className="text-2xl font-semibold mb-2" data-testid="city-name">
              {weatherData.name}
            </h2>
            <p className="text-lg" data-testid="temperature">
              Temperatur: {Math.round(weatherData.main.temp)}°C
            </p>
            <p className="text-lg capitalize" data-testid="description">
              Beschreibung: {weatherData.weather[0].description}
            </p>
            <p className="text-lg" data-testid="humidity">
              Luftfeuchtigkeit: {weatherData.main.humidity}%
            </p>
          </div>
        )}

        {error && (
          <div
            className="text-red-500 font-bold mt-4"
            data-testid="error-message"
          >
            <p>Stadt nicht gefunden. Bitte erneut versuchen.</p>
          </div>
        )}
      </div>
    </div>
  );
}
