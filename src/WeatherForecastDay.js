import React from "react";

export default function WeatherForecastDay(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <img className="WeatherForecast-icons" src={iconUrl} alt="weather icon" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max-temperature">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-min-temperature">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
