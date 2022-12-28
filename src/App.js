import React from 'react';
import './App.css';

import Search from "./Search";
import WeatherOverview from "./WeatherOverview";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wraper">
          <Search />
          <WeatherOverview />
        </div>
      </div>
      <Footer />
    </div>
  );
}


