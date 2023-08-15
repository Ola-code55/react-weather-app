import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [currentTime, setCurrentDateTime] = useState("");

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    });

    const currentDate = new Date();
    const options = {
      weekday: "long",
      hour: "numeric",
      minute: "numeric"
    };
    const formatDate = currentDate.toLocaleDateString("en-US", options);
    setCurrentDateTime(formatDate);
    setLoaded(true);
  }

  function search() {
    let apiKey = "1e6f081375a3810cea4761b8aae319a8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let weatherDisplay = null;

  if (loaded) {
   
    weatherDisplay = (
      <div className="weather-display">
        <div className="weather-header">
          <h2 className="city-name">{city}</h2>
          <p className="current-time">{currentTime}</p>
          <p className="weather-description">{weather.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form
        id="search-form"
        className="mb-3 float-left"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            id="city-input"
            onInput={updateCity}
            autoComplete="off"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
            <button className="btn btn-success ml-2" type="button">
              Current
            </button>
          </div>
        </div>
      </form>
      {weatherDisplay}
    </div>
  );
}
