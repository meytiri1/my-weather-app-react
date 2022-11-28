import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `3t89a3048deco3ffc8f06ed499bd33b4`;
  let units = `metrics`;
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
  axios.get(apiURL).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row d-flex text-center mx-auto">
        <div className="col-2">
          <div className="forecast-day">Tue</div>
          <WeatherIcon code={"broken-clouds-day"} size={45} color={"#000"} />
          <div className="forecast-temperatures">
            <span className="forecast-temp-min">{10}°C</span>{" "}
            <span className="forecast-temp-max">19°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
