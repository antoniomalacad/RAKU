import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import quotes from "./utils/quotes";
import Nasa from "./components/Nasa";
import Weather from "./components/Weather";
import Quote from "./components/Quote";
import News from "./components/News";
import Emails from "./components/Emails";
import Horoscope from "./components/Horoscope";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="parent">
        <Quote />
        <Weather />
        <Nasa />
        <News />
        <Horoscope />
      </div>
    </div>
  );
}

export default App;
