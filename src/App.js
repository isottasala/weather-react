import React from "react";
import './App.css';
import Weather from "./Weather.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <body id="image">
    <div class="container">
      <div class="weather-app">
        <form id="search-form" class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city name"
                class="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input type="submit" value="Search" class="btn btn-dark" />
            </div>
          </div>
        </form>
        <div class="overview">
          <h1 id="city">New York City</h1>
          <ul>
            <li class="result-date">Last updated: Tuesday, 18th 12:00<span id="date"></span></li>
            <li id="description" class="result-description"></li>
          </ul>
          <div class="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img
                    src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg"
                    alt="Sunny"
                    id="icon"
                  />
                <span class="strong" id="temperature"></span
                ><span class="units"
                  >19 °C | 66 
                  °F</span
                >
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>Humidity: 6 <span id="humidity"></span>%</li>
                <li>Wind: 18 <span id="wind"></span> km/hr</li>
              </ul>
            </div>
          </div>
          <div class="text">Forecast for the Next Hours</div>
          <div class="row">
            <div class="clearfix weather-temperature">
          <div class="col-sm-2">
            <p>Tuesday</p>
            <img
                    src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg"
                    alt="Sunny"
                    id="icon"
                    className="mini"
                  />
            <p class="temp">Sunny 25°-17°</p>
            </div>
          </div>
          <div class="clearfix weather-temperature">
          <div class="col-sm-2">
            <p>Wednesday</p>
            <img
                    src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg"
                    alt="Sunny"
                    id="icon"
                    className="mini"
                  />
            <p class="temp">Sunny 25°-17°</p>
            </div>
          </div>
           <div class="clearfix weather-temperature">
          <div class="col-sm-2">
            <p>Thursday</p>
            <img
                    src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg"
                    alt="Sunny"
                    id="icon"
                    className="mini"
                  />
            <p class="temp">Sunny 25°-17°</p>
            </div>
          </div>
            <div class="clearfix weather-temperature">
          <div class="col-sm-2">
            <p>Friday</p>
            <img
                    src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg"
                    alt="Sunny"
                    id="icon"
                    className="mini"
                  />
            <p class="temp">Sunny 25°-17°</p>
            </div>
          </div>
           <div class="clearfix weather-temperature">
          <div class="col-sm-2">
            <p>Saturday</p>
            <img
                    src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg"
                    alt="Sunny"
                    id="icon"
                    className="mini"
                  />
            <p class="temp">Sunny 25°-17°</p>
            </div>
          </div>
           <div class="clearfix weather-temperature">
          <div class="col-sm-2">
            <p>Sunday</p>
            <img
                    src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg"
                    alt="Sunny"
                    id="icon"
                    className="mini"
                  />
            <p class="temp">Sunny 25°-17°</p>
            </div>
          </div>
</div>
</div>
        <small class="code">
          <a
            href="https://github.com/isottasala/Sala_Weather-App"
            target="_blank"
            >Open-source Code</a
          > 
           by 
           <a
            href="https://www.linkedin.com/in/isotta-viridiana-sala-158506134/"
            target="_blank"
            >Isotta Sala</a
          >
        </small>
    </div>
    </div>
  </body>
  );
}


export default App;
