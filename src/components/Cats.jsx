import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nasa() {
  const [catFact, setCatFact] = useState("");
  const [catFacts, setCatFacts] = useState([]);
  const [cacheBuster, setCacheBuster] = useState("");

  const randomizeCatFact = () => {
    if (!catFacts.length) return;
    setCatFact(catFacts[Math.floor(Math.random() * catFacts.length)]);
    setCacheBuster(Date.now().toString());
    setTimeout(randomizeCatFact, 10000);
  };

  useEffect(() => {
    axios
      .get("/api/cat-facts")
      .then(data => data.data)
      .then(data => setCatFacts(data));
  }, []);

  useEffect(() => {
    randomizeCatFact();
  }, [catFacts]);

  return (
    <div>
      <h1>Cat</h1>
      <p>{catFact}</p>
      <img
        src={`https://cataas.com/cat?timestamp=${cacheBuster}`}
        alt={catFact}
      />
    </div>
  );
}
