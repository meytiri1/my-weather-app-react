import axios from "axios";
import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

import "./WeatherDisplay.css";

export default function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      country: response.data.country,
      humidity: response.data.temperature.humidity,
      minTemp: 13,
      maxTemp: 18,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherDisplay">
        <div className="d-flex row w-100 mt-2 m-0 justify-content-between weather-all">
          <div className="col-6 my-auto p-0 sun-info">
            <div className="cityWeather">
              <div className="city">
                <h1>
                  {weatherData.city},{" "}
                  <span className="country">{weatherData.country}</span>
                </h1>
                <p className="mb-2 date">
                  Last updated:{" "}
                  <span>
                    <FormattedDate date={weatherData.date} />
                  </span>
                  <br />
                  <span className="text-capitalize">
                    {weatherData.description}
                  </span>
                </p>
              </div>
              <div>
                <p className="iconTemp">
                  {Math.round(weatherData.temperature)}
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
            <div className="col-3">
              <p>
                Min. temperature:
                <br />
                <span>{weatherData.minTemp}</span>°C
              </p>
            </div>
            <div className="col-3 border-start">
              <p>
                Max. temperature:
                <br />
                <span>{weatherData.maxTemp}</span>°C
              </p>
            </div>
            <div className="col-3 border-start">
              <p>
                Wind speed:
                <br />
                <span>{Math.round(weatherData.wind)}</span> km/h
              </p>
            </div>
            <div className="col-3 border-start">
              <p>
                Humidity:
                <br />
                <span>{weatherData.humidity}</span> %
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `3t89a3048deco3ffc8f06ed499bd33b4`;
    let apiURL = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }
}
