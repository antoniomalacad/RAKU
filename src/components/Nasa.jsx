import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nasa() {
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");
  const [imageTitle, setImageTitle] = useState("");

  useEffect(() => {
    const getNasa = async () => {
      const results = await axios.get("/api/nasa");
      console.log(results);

      setExplanation(results.data.explanation);
      setImage(results.data.url);
      setImageTitle(results.data.title);
    };

    getNasa();
  }, []);

  return (
    <div>
      <h1>Nasa</h1>
      <p>{explanation}</p>
      <h3>{imageTitle}</h3>
      <img src={image} alt="starry sky"></img>
    </div>
  );
}
