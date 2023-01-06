import React from "react";

export default function CurrentDate(props){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let month = months[props.date.getMonth()];
  let day = props.date.getDay();
  let weekday = weekdays[props.date.getDay()];
  let hour=props.date.getHours();
    if (hour<10){hour=`0${minutes}`;}
  let minutes = props.date.getMinutes();
    if (minutes<10){minutes=`0${minutes}`;}
  return `${month}, ${day} ${hour}:${minutes}`;
}