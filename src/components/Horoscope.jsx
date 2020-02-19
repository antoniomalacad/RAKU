import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Horoscope() {
  const [horscopes, setHoroscopes] = useState([]);
  useEffect(() => {
    const getHoroscopes = async () => {
      // const result = await axios.post("foo");
      // console.log(result);
      // setHoroscopes(results);
    };
    getHoroscopes();
  }, []);

  const renderForm = () => {
    const listHoroscopes = () => {
      const list = [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces"
      ];
      return <>foo</>;
    };

    return (
      <form className="horoscope-form">
        <input type="select">{listHoroscopes()}</input>
      </form>
    );
  };

  return <div className="horoscope">Horoscope goes here</div>;
}
