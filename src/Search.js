import React from "react";
import './Search.css';


export default function Search(){
  return(
    <div>
      <div class="searchCity">
        <form class="search-form" id="search-form">
          <input type="search" id="search-city" placeholder="Current Location" autofocus="on" autocomplete="off" />
          <input type="submit" id="search-button" value="Search" /> 
          <span type="submit" id="search-GPS-coordinates" class="material-symbols-outlined">location_on </span>
        </form>
        </div>
    </div>

  );
}