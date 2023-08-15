import React from "react";
import Navigation from "./Navigation";
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import './App.css';

export default function App() {
  return (
    <div className="App">
       <div className="App-container"> 
         <Navigation /> 
        <WeatherSearch />
         <Weather />  
            <footer className= "App-footer">
            <a
              href="https://github.com/Ola-code55/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            , by Olakusibe Animashaun
        </footer>
       </div>  
          </div>
  );
}


