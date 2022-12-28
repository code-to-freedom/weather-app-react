import React from "react";
import "./WeatherOverview.css";

export default function WeatherOverview(){
  return (
    <div className="row">
     <div className="col-6">       
      <div className="resultCity">
        <h1 className="search-city-output">ZURICH</h1>
        <p className="current-date">20 December, 14:25</p>
      </div>
      <div className="row weatherOverview">
        <div className="row Temperatures">
          <div className="col-6">
            <span className="max-temperature">day 19৹↑</span> • <span className="min-temperature">night 15৹↓</span>
          </div>
        </div>
        <div className="col-6">
          <h2><span className="current-temperature">16৹C</span><span className="units>&deg;C"></span></h2>
          <p>Feels like 19৹C</p>
        </div>
        <div className="col-6">
        <img src="https://openweathermap.org/img/wn/01d@2x.png" className="currentWeather-icon" width="140" alt="current Weather" />
        </div>     
       </div>
       <div className="row Overview">
        <div className="col-4">
          <ul className="wind">
            <li>wind</li>
            <li>4 km/h</li>
          </ul>
        </div>
        <div className="col-4">
        <ul  className="precipitation">
            <li>precipitation</li>
            <li>15%</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="humidity">
            <li>humidity</li>
            <li>72 %</li>
          </ul>
        </div>
       </div>
    </div>
  </div>

  );
}