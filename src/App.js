import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather"

export default function App() {

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          <a
            href="https://github.com/dmilarisa/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourse code
          </a>
          &nbsp; by &nbsp;
          <a href="" target="_blank" rel="noopener noreferrer">
            Larysa Dmytrenko
          </a>
        </footer>
      </div>
    </div>
  );
}
