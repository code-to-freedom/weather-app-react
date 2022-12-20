import React from "react";
import "./WeatherOverview.css";

export default function WeatherOverview(){
  return (
    <div className="row">
     <div class="col-6">       
      <div className="resultCity">
        <h1 id="search-city-output">ZURICH</h1>
        <p id="current-date">20 December, 14:25</p>
      </div>
      <div class="row" id="weatherOverview">
        <div class="row" id="Temperatures">
          <div class="col-6">
            <span id="max-temperature">day 19৹↑</span> • <span id="min-temperature">night 15৹↓</span>
          </div>
        </div>
        <div class="col-3">
          <h2><span id="current-temperature">16৹C</span><span id="units>&deg;C"></span></h2>
          <p>Feels like 19৹C</p>
        </div>
        <div class="col-3">
        <img src="https://openweathermap.org/img/wn/01d@2x.png" id="currentWeather-icon" width="140" />
        </div>     
       </div>
    </div>
  </div>

  );
}