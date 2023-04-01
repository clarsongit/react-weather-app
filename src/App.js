import React from "react";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <div className="footer">
          <footer>
            This project was coded by{" "}
            <a
              href="https://clarson.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Chloe Larson
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/clarsongit/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github.
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
