import React from "react";

import "./WeatherDisplay.css";

export default function WeatherDisplay() {
  let defaultWeatherDisplay = {
    sunIcon: <i class="fa-solid fa-sun"></i>,
    value: 16,
    city: "Berlin",
    country: "DE",
    weather: "Clear",
    date: "Saturday, 21:21, October 29, 2022",
    minTemp: 13,
    maxTemp: 18,
    precipitation: 0,
    wind: 2,
    humidity: 87,
  };
  return (
    <div className="WeatherDisplay">
      <div className="d-flex row w-100 mt-3 mx-0 justify-content-between weather-all">
        <div className="col-6 my-auto sun-info">
          <div className="cityWeather">
            <div className="iconTemp">
              <h1>
                {defaultWeatherDisplay.value}
                <span className="degree">
                  <sup>°C</sup>
                </span>
              </h1>
            </div>
            <ul>
              <li className="city">
                {defaultWeatherDisplay.city},{" "}
                <span className="country">{defaultWeatherDisplay.country}</span>
              </li>

              <li className="currentWeather">
                {defaultWeatherDisplay.weather}
              </li>
              <li className="date">
                Last updated: <span>{defaultWeatherDisplay.date}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 text-end my-auto">
          <span className="sunIcon">{defaultWeatherDisplay.sunIcon}</span>
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
