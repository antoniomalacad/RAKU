import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline"; //move to app.jsx
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  control: {
    padding: theme.spacing(3)
  }
}));

export default function Nasa() {
  const classes = useStyles();
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNasa = async () => {
      const results = await axios.get("/api/nasa");
      setExplanation(results.data.explanation);
      setImage(results.data.url);
      setImageTitle(results.data.title);
      setLoading(false);
    };

    getNasa();
  }, []);

  /*TO DO: 
  1. Create different background color (dark)
  2. Create conditional rendering based on "loading" state
  */
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm">
        <Typography variant="h3" className={classes.control}>
          Nasa
        </Typography>
        <Typography variant="body1">{explanation}</Typography>
        <Typography variant="h6" className={classes.control}>
          {imageTitle}
        </Typography>
      </Container>
      <Box width="100%" className="nasa">
        <img src={image} alt="starry sky"></img>
      </Box>
    </React.Fragment>
  );
}
