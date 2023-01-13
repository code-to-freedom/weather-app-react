import React, { useState, useEffect } from "react";

import WeatherForecastDaily from "./WeatherForecastDaily";
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  },[props.coordinates]);
  

  function getForecast(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index<5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDaily data={dailyForecast} />
                </div>
              );
            } else {return null;}
          })}
        </div>
      </div>
    );
    } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "c3b5b86464d7fae06b475e856feb3c14";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(getForecast);

    return "Loading...";
    }
}