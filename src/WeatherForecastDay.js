import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let maxTemperature = Math.round(props.forecast.temperature.maximum);
  let minTemperature = Math.round(props.forecast.temperature.minimum);
  function dayOfWeek() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecast.time * 1000);
    let day = days[date.getDay()];
    return day;
  };
  return (
    <div className="WeatherForecastDay">
      <div className="forecastDay">{dayOfWeek()}</div>
      <WeatherIcon
        iconDescription={props.forecast.condition.icon}
        iconHeight="56"
      />
      <div className="forecastTemperatures">
        <span className="forecastTempMax">{maxTemperature}°</span>
        <span className="forecastTempMin">{minTemperature}°</span>
      </div>
    </div>
  );
};