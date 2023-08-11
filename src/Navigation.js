import React from "react";

import "./Navigation.css";

export default function Navigation() {
  return (
    <div>
      <div className="container">
        <div id="weather" className="weather-container">
          <header>
            <ul className="navigation-items">
              <li className="navigation-item">
                <a href="/">Lagos</a>
              </li>
              <li className="navigation-item">
                <a href="/paris">Paris</a>
              </li>
              <li className="navigation-item">
                <a href="/sydney">Sydney</a>
              </li>
              <li className="navigation-item">
                <a href="/san-francisco">New York</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>
  );
}