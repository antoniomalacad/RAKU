import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Joke() {
  const [joke, setJoke] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then(data => data.data)
      .then(joke => setJoke(joke));
  }, []);

  const punchline = showPunchline ? (
    <div>{joke.punchline}</div>
  ) : (
    <div>
      <button onClick={() => setShowPunchline(true)}>Show Punchline</button>
    </div>
  );

  return (
    joke && (
      <div>
        <h1>Joke</h1>
        <div>{joke.setup}</div>
        {punchline}
      </div>
    )
  );
}
