import React from "react";

import CurrentDate from "./CurrentDate";
import CurrentTemperature from "./CurrentTemperature";
import CurrentIcon from "./CurrentIcon";

import "./WeatherOverview.css";

import {FaTemperatureHigh, FaTemperatureLow, FaWind, FaTint} from "react-icons/fa";

export default function CurrentWeather(props){
  return (
    <div className="row currentWeather">
      <CurrentIcon icon={props.data.icon} alt={props.data.description} />
          <div className="col-8 searchOutput">
          <div className="currentLocation">{props.data.currentLocation}</div>
          <div className="currentDate"><CurrentDate date={props.data.date} /></div>
          <CurrentTemperature celsius={props.data.temperature}/>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="row Overview">
          <div className="col-3">
          <ul className="maxTemperature">
            <li><FaTemperatureHigh className='icon'/></li>
            <li>{props.data.temperatureMax}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <ul  className="minTemperature">
            <li><FaTemperatureLow className='icon'/></li>
            <li>{props.data.temperatureMin}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="wind">
            <li><FaWind className='icon'/></li>
            <li>{props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="humidity">
            <li><FaTint className='icon'/></li>
            <li>{props.data.humidity}%</li>
          </ul>
        </div>
      </div>
      </div>
  );
}