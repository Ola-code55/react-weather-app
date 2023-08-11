import React from "react";
import WeatherSearch from "./WeatherSearch";
import Navigation from "./Navigation";
import './App.css';

export default function App() {
  return (
    <div className="App-container">
      <div className="App">
        <Navigation />
        <WeatherSearch />
        <footer>
          <small>
            <a
              href="https://github.com/Ola-code55/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            , by Olakusibe Animashaun
          </small>
        </footer>
      </div>
    </div>
  );
}


