import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="cities">
          <li>Rome</li>
          <li>Paris</li>
          <li>Barcelona</li>
          <li>Lisbon</li>
        </ul>
      </nav>
      <section>
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            autocomplete="off"
            className="search-field"
          />
          <input type="submit" value="Search" className="search-button" />
          <input type="submit" value="Current" className="current-button" />
        </form>
      </section>
      <section className="current-city-section">
        <h1>Kyiv</h1>
        <p className="descriptions">Wednesday 15:45</p>
        <p className="descriptions">Clouds</p>
      </section>
      <section>
        <div className="current_temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Current weather icon"
            width="90"
            class="img-fluid"
          />
          <span className="main-degrees">26ºC</span>
        </div>
        <div className="description_block">
          <p>Precipitation: 62% </p>
          <p> Wind: 9km/h</p>
        </div>
        <div className="forecast">
          <div className="description-forecast-day">
            <p>Thu</p>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Current weather icon"
              width="50"
              class="img-fluid"
            />
            <p>26ºC</p>
          </div>
          <div className="description-forecast-day">
            <p>Thu</p>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Current weather icon"
              width="50"
              class="img-fluid"
            />
            <p>26ºC</p>
          </div>
          <div className="description-forecast-day">
            <p>Thu</p>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Current weather icon"
              width="50"
              class="img-fluid"
            />
            <p>26ºC</p>
          </div>
          <div className="description-forecast-day">
            <p>Thu</p>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Current weather icon"
              width="50"
              class="img-fluid"
            />
            <p>26ºC</p>
          </div>
          <div className="description-forecast-day">
            <p>Thu</p>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Current weather icon"
              width="50"
              class="img-fluid"
            />
            <p>26ºC</p>
          </div>
        </div>
        <div className="author">
          <a href="https://github.com/AnnyKoval">Open-source code</a>, by{" "}
          <a href="https://github.com/AnnyKoval">Anna Koval</a>
        </div>
      </section>
    </div>
  );
}

export default App;
