import Search from "./Search.js";
import WeatherDisplay from "./WeatherDisplay.js";
import Forecast from "./Forecast.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container p-4 container-all">
        <Search defaultCity="Berlin" />
        <div className="container">
          <WeatherDisplay />
          <div className="row forecast-container mt-3 mx-auto">
            <Forecast />
          </div>
          <div className="quote">
            <p className="quote-of-day">
              "Keep your eyes lifted high upon the sun, and you'll see the best
              light in everyone."
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p>
          <a href="https://github.com/meytiri1/my-weather-app-react">
            Open-source code
          </a>{" "}
          by Michelle Köhler, hosted via Netlify
        </p>
      </footer>
    </div>
  );
}
