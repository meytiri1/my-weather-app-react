import axios from "axios";
import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast.js";
import Quote from "./Quote";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      country: response.data.country,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    let apiKey = `3t89a3048deco3ffc8f06ed499bd33b4`;
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form className="city-search-form" onSubmit={handleSubmit}>
          <div className="col-6 mb-2">
            <div className="input-group rounded city-search">
              <input
                type="search"
                className="form-control"
                placeholder="Search city"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={updateCity}
              />
              <span className="input-group-text border-start-0 rounded-start search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
        </form>
        <WeatherDisplay data={weatherData} />
        <div className="forecast-container mt-3 mx-auto">
          <Forecast coordinates={weatherData.coordinates} />
        </div>
        <div className="quote">
          <Quote weather={weatherData.icon} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
