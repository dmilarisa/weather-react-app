import React from "react";

export default function (props) {
  console.log(props.currentDate)
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let dayOfWeek = props.currentDate.getDay();
  let hours = props.currentDate.getHours();
  if (hours < 10) {
    hours=`0${hours}`
  }
  let minutes = props.currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  return (
      <div>
        {daysOfWeek[dayOfWeek]} {hours}:{minutes}
      </div>
  )
}