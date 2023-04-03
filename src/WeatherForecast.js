import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <img
            className="WeatherForecast-icons"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
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
