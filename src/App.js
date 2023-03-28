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
