import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span>
        <span className="unit">
          <sup>
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </sup>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(fahrenheit())}</span>
        <span className="unit">
          <sup>
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </sup>
        </span>
      </div>
    );
  }
}
