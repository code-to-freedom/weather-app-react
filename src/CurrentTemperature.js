import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props){
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit(){
    return(Math.round(props.celsius * 9/5 + 32));
  }

  if (unit === "celsius") {
    return(
      <div className="temperature">
        <span className="currentTemperature">{props.celsius}{" "}</span>
        <span className="units">°C{" "}|{" "}<a href="/" onClick={showFahrenheit}>°F</a></span>
      </div>
    );
    } else {
    return(
      <div className="temperature">
        <span className="currentTemperature">{fahrenheit()}{" "}</span>
        <span className="units">°F{" "}|{" "}<a href="/" onClick={showCelsius}>°C</a></span>
      </div>
    );
  }
}