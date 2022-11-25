import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./WeatherDisplay.css";

export default function WeatherDisplay() {
  let defaultWeatherDisplay = {
    sunIcon: <i class="fa-solid fa-sun"></i>,
    value: 16,
    city: "Berlin",
    country: "DE",
    weather: "Clear sky",
    date: "Saturday, 21:21",
    minTemp: 13,
    maxTemp: 18,
    precipitation: 0,
    wind: 2,
    humidity: 87,
  };
  return (
    <div className="WeatherDisplay">
      <div className="d-flex row w-100 mt-2 m-0 justify-content-between weather-all">
        <div className="col-6 my-auto p-0 sun-info">
          <div className="cityWeather">
            <div className="city">
              <h1>
                {defaultWeatherDisplay.city},{" "}
                <span className="country">{defaultWeatherDisplay.country}</span>
              </h1>
              <p className="mb-2 date">
                Last updated: <span>{defaultWeatherDisplay.date}</span>
                <br />
                {defaultWeatherDisplay.weather}
              </p>
            </div>
            <div>
              <p className="iconTemp">
                {defaultWeatherDisplay.value}
                <span className="degree">
                  <sup>°C</sup>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 px-0 text-center my-auto">
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
          <div className="col-3 ">
            <p>
              Min:
              <span className="min-temp">13</span>
              °C
              <br />
              Max: <span className="max-temp">18</span>
              °C
            </p>
          </div>
          <div className="col-3 border-start">
            <p>
              Precipitation:
              <br />
              <span>0</span> mm
            </p>
          </div>
          <div className="col-3 border-start">
            <p>
              Wind:
              <br />
              <span>2</span> km/h
            </p>
          </div>
          <div className="col-3 border-start">
            <p>
              Humidity:
              <br />
              <span>87</span> %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
