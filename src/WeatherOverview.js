import React, { useState } from "react";
import axios from "axios";

import "./Search.css";
import "./WeatherOverview.css";

export default function WeatherOverview(){
  const [ready, setReady] = useState(false);
  const[temperature, setTemperature]=useState(null);
    
  function displayWeather(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready){
    return (
       <div className="row weatherOverview">
        <div className="searchCity">
          <form className="search-form">
            <input type="search" className="search-city" placeholder="Current Location" autoFocus="on" autocomplete="off" />
            <input type="submit" className="search-button" value="Search" /> 
          </form>
        </div>
        <div className="col-4 weatherIcon">
          <img src="https://openweathermap.org/img/wn/01d@2x.png" className="currentWeatherIcon" width="200" alt="current Weather" />
        </div>
        <div className="col-8 searchOutput">
          <div className="currentCity">Zurich</div>
          <div><span className="currentDate">20 December</span>, <span className="currentTime">14:25</span></div>
          <div className="Temperature"><span className="currentTemperature">16</span><span className="units">°C</span></div>
          <div>Feels like <span className="realFeeling">{temperature}</span>°C</div>
        </div>
        <div className="row Overview">
          <div className="col-3">
          <ul className="wind">
            <li>wind</li>
            <li>4 km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <ul  className="precipitation">
            <li>precipitation</li>
            <li>15%</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="humidity">
            <li>humidity</li>
            <li>72 %</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="humidity">
            <li>humidity</li>
            <li>72 %</li>
          </ul>
        </div>
      </div>
    </div>
  );
  } else {
    const apiKey="c3b5b86464d7fae06b475e856feb3c14";
    let units="metric";
    let city="Zurich";
    let apiURL="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}";
  
    axios.get(apiURL).then(displayWeather);

    return "Loading..."
  }
}