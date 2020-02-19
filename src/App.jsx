import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import quotes from "./utils/quotes";
import Nasa from "./components/Nasa";
import Weather from "./components/Weather";
import Quote from "./components/Quote";
import News from "./components/News";
import Cats from "./components/Cats";
import Emails from "./components/Emails";

function App() {
  return (
    <div className="App">
      <Cats />
      <Quote />
      <Weather />
      <Nasa />
      <News />
    </div>
  );
}

export default App;
