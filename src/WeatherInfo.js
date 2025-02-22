import React from "react";
import CustomisedDate from "./CustomisedDate";
import "./WeatherInfo.css";
import TemperatureUnits from "./TemperatureUnits";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props.data);

  function getIconText(iconCode) {
     let iconOptions = {
       "01d": "clear-sky-day",
       "01n": "clear-sky-night",
       "02d": "few-clouds-day",
       "02n": "few-clouds-night",
       "03d": "scattered-clouds-day",
       "03n": "scattered-clouds-night",
       "04d": "broken-clouds-day",
       "04n": "broken-clouds-night",
       "09d": "shower-rain-day",
       "09n": "shower-rain-night",
       "10d": "rain-day",
       "10n": "rain-night",
       "11d": "thunderstorm-day",
       "11n": "thunderstotm-night",
       "13d": "snow-day",
       "13n": "snow-night",
       "50d": "mist-day",
       "50n": "mist-night",
    };
    return iconOptions[iconCode]
  };

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <CustomisedDate currentDate={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon iconDescription={getIconText(props.data.iconCode)} iconHeight={84} />
          <TemperatureUnits temper={props.data.temperature}
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}