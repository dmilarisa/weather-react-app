import React, { useState } from "react";

export default function TemperatureUnits(props) {
  let [temp, setTemp] = useState(props.temper);
  let [celcius, setCelcius] = useState(true);
  console.log(temp);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemp(Math.round((temp * 9) / 5 + 32));
    setCelcius(false);
  }

  function showCelcius(event) {
    event.preventDefault();
    setTemp(props.temper);
    setCelcius(true);
  }

  if (celcius) {
    return (
      <span>
        <span className="temperature">{props.temper}</span>
        <span className="unit">
          °С |{" "}
          <a href="#top" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{temp}</span>
        <span className="unit">
          °F |{" "}
          <a href="#top" onClick={showCelcius}>
            °C
          </a>
        </span>
      </span>
    );

  }

}