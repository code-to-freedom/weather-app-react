import React, { useState } from "react";
import axios from "axios";

import CurrentDate from "./CurrentDate";

import "./Search.css";
import "./WeatherOverview.css";

import clearSky from './images/clear sky.png';

import {FaTemperatureHigh} from "react-icons/fa";
import {FaTemperatureLow} from "react-icons/fa";
import {FaWind} from "react-icons/fa";
import {FaTint} from "react-icons/fa";



export default function WeatherOverview(props){
  
  const[weatherData, setWeatherData] = useState({ready:false});

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      currentLocation:response.data.name,
      date:new Date(response.data.dt*1000),
      temperature:Math.round(response.data.main.temp),
      description:response.data.weather[0].description,
      temperatureMax:Math.round(response.data.main.temp_max),
      temperatureMin:Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity:response.data.main.humidity,
    })
  }

  if (weatherData.ready){
    return (
       <div className="row weatherOverview">
        <div className="searchCity">
          <form className="search-form">
            <input type="search" className="searchCity" placeholder="Current Location" autoFocus="on" autoComplete="off" />
            <input type="submit" className="searchButton" value="Search" /> 
          </form>
        </div>
        <div className="col-4 weatherIcon">
          <img src={clearSky} className="currentWeatherIcon" width="200" alt="current Weather" />
        </div>
        <div className="col-8 searchOutput">
          <div className="currentLocation">{weatherData.currentLocation}</div>
          <div className="currentDate"><CurrentDate date={weatherData.date} /></div>
          <div className="temperature"><span className="currentTemperature">{weatherData.temperature}</span><span className="units">°C</span></div>
          <div className="description">{weatherData.description}</div>
        </div>
        <div className="row Overview">
          <div className="col-3">
          <ul className="maxTemperature">
            <li><FaTemperatureHigh /></li>
            <li>{weatherData.temperatureMax}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <ul  className="minTemperature">
            <li><FaTemperatureLow /></li>
            <li>{weatherData.temperatureMin}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="wind">
            <li><FaWind /></li>
            <li>{weatherData.wind}km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="humidity">
            <li><FaTint /></li>
            <li>{weatherData.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
  } else {
    const apiKey="eae061c95483dd066657bfc7525418ed";
    let units="metric";
    let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiURL).then(displayWeather);

    return "Loading..."
  }
}