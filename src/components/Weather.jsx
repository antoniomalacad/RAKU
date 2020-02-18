import React, { useEffect } from "react";
import weather from "../utils/weather";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../redux/actions";

export default function Weather() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWeather = async () => {
      const result = await weather.get();
      dispatch(getWeather(result.data));
    };

    handleWeather();
  }, []);

  const weatherState = useSelector(state => state.weather);
  console.log(weatherState);

  const renderWeather = () => {
    if (weatherState !== undefined) {
      return (
        <div>
          <p>{weatherState[0].currently.summary}</p>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>THE WEATHER</h1>
      <p>Hello this is in progress</p>
    </div>
  );
}
