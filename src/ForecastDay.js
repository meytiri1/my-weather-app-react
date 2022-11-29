import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.time);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={45} color={"#000"} />
      <div className="forecast-temperatures">
        <span className="me-2 forecast-temp-min">{minTemp()}°C</span>{" "}
        <span className="forecast-temp-max">{Math.round(maxTemp())}°C</span>
      </div>
    </div>
  );
}
