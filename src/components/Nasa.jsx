import React, { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config({ path: __dirname + "/.env" });

export default function Nasa() {
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");

  const nasaKey = process.env.REACT_APP_NASA_API_KEY;
  console.log(nasaKey);

  useEffect(() => {
    const nasaTest = async () => {
      const results = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=KoKS6MRHHZ5yflOqxhjGQpPiZSt0jgnnF0xuyqJa`
      );
      console.log(results);
      setExplanation(results.data.explanation);
      setImage(results.data.url);
    };
    nasaTest();
  });

  console.log(explanation);
  return (
    <div>
      <h1>Nasa</h1>
      <p>{explanation}</p>
      <img src={image}></img>
    </div>
  );
}
