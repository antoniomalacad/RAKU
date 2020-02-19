import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Horoscope() {
  const [horscopes, setHoroscopes] = useState([]);
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
  useEffect(() => {
    const getHoroscopes = async () => {
      const result = list.map(async horoscope => {
        // return await axios.post("/api/horoscope", horoscope);
      });
      console.log(result);
      // setHoroscopes(results);
    };
    getHoroscopes();
  }, []);

  const selectHoroscope = async e => {
    const selected = e.target.value;
    if (selected !== "") {
      // await axios.post("api/horoscope", selected).then(res => console.log(res));
    }
  };

  const renderResult = () => {
    return <div className="horoscope-result">Results go here</div>;
  };

  const renderForm = () => {
    const listHoroscopes = () => {
      return list.map(horoscope => {
        return (
          <option value={horoscope} key={horoscope}>
            {horoscope}
          </option>
        );
      });
    };

    return (
      <form className="horoscope-form">
        <select className="horoscope-dropdown" onChange={selectHoroscope}>
          <option value="">Select Horoscope</option>
          {listHoroscopes()}
        </select>
      </form>
    );
  };

  return (
    <div className="horoscope">
      <h2>Pick your Horoscope!</h2>
      {renderForm()}
      {renderResult()}
    </div>
  );
}
