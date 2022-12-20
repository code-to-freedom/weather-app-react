import React from 'react';
import './App.css';

import Search from "./Search";
import WeatherOverview from "./WeatherOverview";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <WeatherOverview />
        <footer>
          <p><a href="https://github.com/code-to-freedom/weather-app-react" target="_blank" rel="noreferrer">Sourced-code </a>by <a href="https://www.linkedin.com/in/ana-louren%C3%A7o-2126b884" target="_blank" rel="noreferrer">Ana Lourenço</a></p>
        </footer>
      </div>
    </div>
  );
}


