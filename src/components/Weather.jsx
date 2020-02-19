import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const handleWeather = async () => {
      const result = await axios.get("/api/weather");
      setWeather(result);
      console.log(result);
    };

    handleWeather();
  }, []);

  const renderWeather = () => {
    if (weather.data !== undefined) {
      const current = weather.data.currently;
      const today = weather.data.daily.data[0];
      const tommorow = weather.data.daily.data[1];
      const datom = weather.data.daily.data[2];

      const renderCurrent = () => {
        return (
          <>
            <div className="weather-summary">{current.summary}</div>
            <div className="weather-icon">{current.icon}</div>
            <div className="weather-temp">
              {Math.round(current.temperature) + " °C"}
            </div>
            <div className="weather-precipChance">
              {String(current.precipProbability * 100) + " %"}
            </div>
            <br />
          </>
        );
      };

      const renderToday = () => {
        return (
          <>
            <div className="weather-summary">{today.summary}</div>
            <div className="weather-icon">{today.icon}</div>
            <div className="weather-temp-high">
              {Math.round(today.temperatureHigh) + " °C"}
            </div>
            <div className="weather-temp-low">
              {Math.round(today.temperatureLow) + " °C"}
            </div>
            <div className="weather-precipChance">
              {String(today.precipProbability * 100) + " %"}
            </div>
            <br />
          </>
        );
      };

      const renderTomorrow = () => {
        return (
          <>
            <div className="weather-summary">{tommorow.summary}</div>
            <div className="weather-icon">{tommorow.icon}</div>
            <div className="weather-temp-high">
              {Math.round(tommorow.temperatureHigh) + " °C"}
            </div>
            <div className="weather-temp-low">
              {Math.round(tommorow.temperatureLow) + " °C"}
            </div>
            <div className="weather-precipChance">
              {String(tommorow.precipProbability * 100) + " %"}
            </div>
            <br />
          </>
        );
      };

      const renderDATom = () => {
        return (
          <>
            <div className="weather-summary">{datom.summary}</div>
            <div className="weather-icon">{datom.icon}</div>
            <div className="weather-temp-high">
              {Math.round(datom.temperatureHigh) + " °C"}
            </div>
            <div className="weather-temp-low">
              {Math.round(datom.temperatureLow) + " °C"}
            </div>
            <div className="weather-precipChance">
              {String(datom.precipProbability * 100) + " %"}
            </div>
            <br />
          </>
        );
      };

      return (
        <>
          <div className="current-weather">{renderCurrent()}</div>
          <div className="todays-weather">{renderToday()}</div>
          <div className="tomorrows-weather">{renderTomorrow()}</div>
          <div className="datom-weather">{renderDATom()}</div>
        </>
      );
    }
  };

  return (
    <div className="weather">
      <h1>THE WEATHER</h1>
      <div className="weather-data">{renderWeather()}</div>
    </div>
  );
}
