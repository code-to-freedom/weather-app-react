import React from 'react';

import "./WeatherOverview.css";

export default function CurrentDate(props){
  console.log(props.date);
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();
  let hour=props.date.getHours();
    if (hour<10){hour=`0${hour}`;}
  let minutes = props.date.getMinutes();
    if (minutes<10){minutes=`0${minutes}`;}
  return `${month}, ${day} ${hour}:${minutes}`;
  
}