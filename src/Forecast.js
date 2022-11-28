import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row d-flex text-center mx-auto">
        <div className="col-2">
          <div className="forecast-day">Tue</div>
          <WeatherIcon code={"broken-clouds-day"} size={45} color={"#000"} />
          <div className="forecast-temperatures">
            <span className="forecast-temp-min">10°C</span>{" "}
            <span className="forecast-temp-max">19°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
