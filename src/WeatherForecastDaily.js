import React from "react";
import CurrentIcon from "./CurrentIcon";

import "./WeatherForecast.css"

export default function WeatherForecastDaily(props){

  function day(){
    let weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    let date = new Date(props.data.dt*1000);
    let day = date.getDay();
    return weekDay[day];
  }
  
  function maxT(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minT(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  return (
    <div className="Forecastdetails">
      <div className="DailyForecast">{day()}</div>
      <div className="ForecastIcon"><CurrentIcon icon={props.data.weather[0].icon}/></div>
      <div><span className="ForecastTemperatureMin">{minT()}</span> | <span className="ForecastTemperatureMax">{maxT()}</span></div>
    </div> 
  );
}