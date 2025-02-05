import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("City");
  let defaultIndicators = {
    temperature: 10,
    description: "thunderstorm with light rain",
    humidity: 78,
    wind: 20,
    image: `https://openweathermap.org/img/wn/11d@2x.png`,
  };
  const [indicators, setIndicators] = useState(defaultIndicators);

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c358f38536c4808d14556c03c5e2d3e0&units=metric`;
    axios.get(url).then(getIndicators);
  }

  function updateValue(event) {
    setCity(event.target.value);
  }

  function getIndicators(response) {
    console.log(response.data);
    setIndicators({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter a city.."
            onChange={updateValue}
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature: {indicators.temperature}°C</li>
          <li>Description: {indicators.description}</li>
          <li>Humidity: {indicators.humidity}%</li>
          <li>Wind: {indicators.wind}km/h</li>
          <li>
            <img src={indicators.image} alt="weather type" />
          </li>
        </ul>
        <div>
          <a
            href="https://github.com/dmilarisa/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourse code
          </a>
          &nbsp; by Larysa Dmytrenko
        </div>
      </div>
    </div>
  );
}
