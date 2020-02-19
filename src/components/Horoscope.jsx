import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Horoscope() {
  const [horoscopes, setHoroscopes] = useState([]);
  const [selectedHoroscope, setSelectedHoroscope] = useState("");
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
      const result = [];
      list.map(async horoscope => {
        return await axios.post("/api/horoscope", { horoscope }).then(res => {
          res.data.src = JSON.parse(res.config.data).horoscope;
          result.push(res.data);
        });
      });

      setHoroscopes(result);
    };
    getHoroscopes();
  }, []);

  const selectHoroscope = async e => {
    const selected = e.target.value;
    if (selected !== "") {
      setSelectedHoroscope(selected);
      console.log("picked");
    }
  };

  console.log(horoscopes);

  const renderResult = () => {
    if (horoscopes.length === 12) {
      horoscopes.find(h => {
        if (h.src === selectedHoroscope) {
          console.log("result", h.description);
          return <div className="horoscope-result">{h.description}</div>;
        }
      });
    }
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
