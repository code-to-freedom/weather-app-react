import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import CurrentDate from "./CurrentDate";

import "./Search.css";
import "./WeatherOverview.css";

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
            <input type="search" className="searchCity" placeholder="Current Location..." autoFocus="on" autoComplete="off" />
            <input type="submit" className="searchButton" value="Search" /> 
          </form>
          <CurrentWeather data={weatherData}/>
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