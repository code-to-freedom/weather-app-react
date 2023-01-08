import React from "react";

import CurrentDate from "./CurrentDate";

import "./WeatherOverview.css";

//weather icons
import Clear from './images/Clear.png';
import Clouds from './images/Clouds.png';
import Drizzle from './images/Drizzle.png';
import Mist from './images/Mist.png';
import Rain from './images/Rain.png'
import Snow from './images/Snow.png';
import Thunderstorm from './images/Thunderstorm.png';

import {FaTemperatureHigh} from "react-icons/fa";
import {FaTemperatureLow} from "react-icons/fa";
import {FaWind} from "react-icons/fa";
import {FaTint} from "react-icons/fa";

export default function CurrentWeather(props){
  return (
    <div className="row currentWeather">
      <div className="col-4 weatherIcon">
        <img src={props.data.mainDescription} className="currentWeatherIcon" width="200" alt="current Weather" />
      </div>
        <div className="col-8 searchOutput">
          <div className="currentLocation">{props.data.currentLocation}</div>
          <div className="currentDate"><CurrentDate date={props.data.date} /></div>
          <div className="temperature"><span className="currentTemperature">{props.data.temperature}</span><span className="units">°C</span></div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="row Overview">
          <div className="col-3">
          <ul className="maxTemperature">
            <li><FaTemperatureHigh /></li>
            <li>{props.data.temperatureMax}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <ul  className="minTemperature">
            <li><FaTemperatureLow /></li>
            <li>{props.data.temperatureMin}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="wind">
            <li><FaWind /></li>
            <li>{props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="humidity">
            <li><FaTint /></li>
            <li>{props.data.humidity}%</li>
          </ul>
        </div>
      </div>
      </div>
  );
}