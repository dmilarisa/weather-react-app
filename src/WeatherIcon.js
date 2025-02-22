import React from "react";

export default function WeatherIcon(props) {
   return (
    <img
      className="WeatherIcon"
      src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.iconDescription}.png`}
      height={props.iconHeight}
      alt="weather icon"
    />
  );
}