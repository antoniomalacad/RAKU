import React from "react";
import logo from "./logo.svg";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
import "./App.css";
import quotes from "./utils/quotes";

function App() {
  const [currentQuote, setCurrentQuote] = useState("");
  useEffect(() => {
    quotes.get().then(quote => {
      setCurrentQuote(quote);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{currentQuote.content}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Weather />
    </div>
  );
}

export default App;
