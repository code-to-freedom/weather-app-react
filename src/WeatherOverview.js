import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import "./Search.css";

export default function WeatherOverview(props){
  
  const[weatherData, setWeatherData] = useState({ready:false});
  const [currentLocation, setCurrentLocation] = useState(props.defaultLocation);

  function displayWeather(response) {
      setWeatherData({
      ready:true,
      icon:response.data.weather[0].icon,
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

  function search(){
    const apiKey="eae061c95483dd066657bfc7525418ed";
    let units="metric";
    let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiURL).then(displayWeather);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleLocationChange(event){
    setCurrentLocation(event.target.value);
  }

  if (weatherData.ready){
    return (
      <div className="row weatherOverview">
        <div className="searchLocation">
          <form className="search-form" onSubmit={handleSubmit}>
            <input type="search" className="searchCity" placeholder="Current Location..." autoFocus="on" autoComplete="off" onChange={handleLocationChange}/>
            <input type="submit" className="searchButton" value="Search" /> 
          </form>
          <CurrentWeather data={weatherData}/>
        </div>
      </div>
  );
  } else {
    search();
    return "Loading..."
  }
}