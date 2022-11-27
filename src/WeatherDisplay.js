import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherDisplay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDisplay(props) {
  console.log(props.data);
  return (
    <div className="WeatherDisplay">
      <div className="d-flex row w-100 mt-2 m-0 justify-content-between weather-all">
        <div className="col-6 my-auto p-0 sun-info">
          <div className="cityWeather">
            <div className="city">
              <h1>
                {props.data.city},{" "}
                <span className="country">{props.data.country}</span>
              </h1>
              <p className="mb-2 date">
                Last updated:{" "}
                <span>
                  <FormattedDate date={props.data.date} />
                </span>
                <br />
                <span className="text-capitalize">
                  {props.data.description}
                </span>
              </p>
            </div>
            <div>
              <p className="iconTemp">
                {Math.round(props.data.temperature)}
                <span className="degree">
                  <sup>°C</sup>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 px-0 text-center my-auto">
          <WeatherIcon code={props.data.icon} />
          <ReactAnimatedWeather
            icon={`CLEAR_DAY`}
            color={`#e4f5a3`}
            size={125}
            animate={true}
          />
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
