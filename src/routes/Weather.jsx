// TODO: This is not working.

import { useState, useEffect } from "react";
import axios from "axios";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const apiKey = "53998ba971968effc3a9401c38704355"; // Replace with your API key

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // Use the user's coordinates to fetch weather data
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          )
          .then((response) => {
            setWeather(response.data);
            setLocation(response.data.name);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          });
      });
    }
  }, [apiKey]);

  return (
    <div className="weather-app h-screen text-center">
      <h1 className="text-2xl font-semibold">Weather App</h1>
      {weather ? (
        <div>
          <h2 className="text-xl">Weather in {location}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherApp;
