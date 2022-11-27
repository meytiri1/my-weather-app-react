import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  console.log(props.data.icon);
  return (
    <div className="WeatherDisplay">
      <div className="d-flex row w-100 mt-2 m-0 justify-content-between weather-all">
        <div className="col-7 my-auto p-0 sun-info">
          <div className="cityWeather">
            <div className="city">
              <h1>{props.data.city}</h1>
              <p className="mb-2 date">
                <span>{props.data.country}</span>,{" "}
                <span>
                  <FormattedDate date={props.data.date} />
                </span>
                <br />
                <span className="text-capitalize">
                  {props.data.description}
                </span>
              </p>
            </div>
            <div className="iconTemp">
              <WeatherUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5 px-0 text-center my-auto">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
      <div className="container mt-4 weather-info">
        <div className="d-flex row w-100 py-2 text-center justify-content-between min-max-temp">
          <div className="col-3">
            <p>
              Min. temperature:
              <br />
              <span>{props.data.minTemp}</span>°C
            </p>
          </div>
          <div className="col-3 border-start">
            <p>
              Max. temperature:
              <br />
              <span>{props.data.maxTemp}</span>°C
            </p>
          </div>
          <div className="col-3 border-start">
            <p>
              Wind speed:
              <br />
              <span>{Math.round(props.data.wind)}</span> km/h
            </p>
          </div>
          <div className="col-3 border-start">
            <p>
              Humidity:
              <br />
              <span>{props.data.humidity}</span> %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
