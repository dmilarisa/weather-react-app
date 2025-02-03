import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
      alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
    }
    let apiKey = "c358f38536c4808d14556c03c5e2d3e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>
}