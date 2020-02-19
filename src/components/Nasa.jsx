import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

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

  //In progress with Material UI
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>Nasa</h1>
        <p>{explanation}</p>
        <h3>{imageTitle}</h3>
        <img src={image} alt="starry sky"></img>
      </Container>
    </React.Fragment>
  );
}
