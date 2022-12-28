import React from "react";
import "./Search.css";


export default function Search(){
  return(
    <div className="searchCity">
      <form className="search-form">
        <input type="search" className="search-city" placeholder="Current Location" autofocus="on" autocomplete="off" />
        <input type="submit" className="search-button" value="Search" /> 
        <span type="submit" className="material-symbols-outlined">location_on </span>     
      </form>
    </div>
  );
}