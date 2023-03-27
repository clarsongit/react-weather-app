import React from "react";

import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>React Weather App</h1>
        </header>
        <WeatherSearch />
        <div className="footer">
          <footer>
            <a
              href="https://github.com/clarsongit/react-weather-app"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by Chloe Larson
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
