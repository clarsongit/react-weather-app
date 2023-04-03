import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs </div>
          <img
            className="WeatherForecast-icons"
            src="http://openweathermap.org/img/wn/01d@2x.png"
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max-temperature">19°</span>
            <span className="WeatherForecast-min-temperature">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
