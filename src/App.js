import React from "react";

import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <WeatherSearch />
      <div class="footer">
        <footer>
          <a href="https://github.com/clarsongit/react-weather-app">
            Open-source code
          </a>{" "}
          by Chloe Larson
        </footer>
      </div>
    </div>
  );
}

export default App;
