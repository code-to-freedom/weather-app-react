import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentIcon(props){
  const iconMapping = {
    "01d":"CLEAR_DAY",
    "01n":"CLEAR_NIGHT",
    "02d":"PARTLY_CLOUDY_DAY",
    "02n":"PARTLY_CLOUDY_NIGHT",
    "03d":"CLOUDY",
    "03n":"CLOUDY",
    "04d":"CLOUDY",
    "04n":"CLOUDY",
    "09d":"RAIN",
    "09n":"RAIN",
    "10d":"SLEET",
    "10n":"SLEET",
    "11d":"RAIN",
    "11n":"RAIN",
    "13d":"SNOW",
    "13N":"SNOW",
    "50d":"FOG",
    "50n":"FOG",
  }
  return(
    <div className="col-4 weatherIcon">
      <ReactAnimatedWeather
        icon={iconMapping[props.icon]}
        color="#DC7D1B"
        size={512}
        animate={true}
      />
    </div>
  );
}