import React from "react";
import weather from "../utils/weather";

export default function Weather() {
  const handleWeather = async () => {
    const result = await weather.get();
    console.log(result.data);
    return result.data;
  };

  console.log(weather.get);
  handleWeather();

  return (
    <div>
      <h1>THE WEATHER</h1>
    </div>
  );
}
