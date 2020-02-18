import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nasa() {
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const getNasa = async () => {
      const results = await axios.get("/api/nasa");
      console.log(results);

      setExplanation(results.data.explanation);
      setImage(results.data.url);
    };

    getNasa();
  }, []);

  return (
    <div>
      <h1>Nasa</h1>
      <p>{explanation}</p>
      <img src={image} alt="starry sky"></img>
    </div>
  );
}
