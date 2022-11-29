import Search from "./Search.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container p-4 container-all">
        <Search defaultCity="Berlin" />
        <div className="container"></div>
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/meytiri1/my-weather-app-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://bright-centaur-7034e8.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Michelle Köhler
          </a>
          , hosted via Netlify
        </p>
      </footer>
    </div>
  );
}
