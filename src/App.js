import React from 'react';
import './App.css';

import WeatherOverview from "./WeatherOverview";
import WeatherForecast from './WeatherForecast';
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wraper">
          <WeatherOverview defaultLocation="Zurich" />
        </div>
      </div>
      <Footer />
    </div>
  );
}


