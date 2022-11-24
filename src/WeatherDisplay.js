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
      <div className="d-flex row h-100 weather-all">
        <div className="col-7 ms-sm-2 ms-md-2 ms-lg-2 ms-xl-2 ms-xxl-2 me-auto my-auto ps-3 sun-info">
          <div className="cityWeather">
            <div className="iconTemp">
              <span className="sunIcon">{defaultWeatherDisplay.sunIcon}</span>
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
                Last updated:{" "}
                <span className="date">{defaultWeatherDisplay.date}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-5 mt-4 my-sm-auto ms-sm-2 mx-xxl-auto text-center weather-info">
          <ul className="min-max-temp">
            <li>
              <span className="min-temp">13</span>
              °C /
            </li>
            <li>
              <span className="max-temp">18</span>
              °C
            </li>
            <hr />
            <li>Precipitation:</li>
            <li>
              <span>0</span> mm
            </li>
            <hr />
            <li>Wind:</li>
            <li>
              <span>2</span> km/h
            </li>
            <hr />
            <li>Humidity:</li>
            <li>
              <span>87</span> %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
