import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline"; //move to app.jsx
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#fff",
    padding: 0,
    margin: 0,
    maxWidth: "100vw",
    position: "relative",
    "&::before": {
      content: `''`,
      display: "block",
      width: "100vw",
      height: "200vh",
      background:
        "-moz-linear-gradient(top, rgba(255,255,255,0) 0%,rgb(145, 216, 255) 50%, rgb(33, 80, 135) 75%,rgba(0,0,0,1) 100%)",
      background:
        "-webkit-linear-gradient(top,   rgba(255,255,255,0) 0%,rgb(145, 216, 255) 50%, rgb(33, 80, 135) 75%,rgba(0,0,0,1) 100%)",
      background:
        "linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgb(145, 216, 255) 50%, rgb(33, 80, 135) 75%,rgba(0,0,0,1) 100%)",
      filter:
        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000',GradientType=0 )"
    }
  },
  control: {
    padding: theme.spacing(3)
  },
  "@keyframes twinkle": {
    "0%": {
      opacity: 1
    },
    "50%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },
  "stars-1": {
    position: "absolute",
    top: 0,
    animation: `$twinkle 1s linear infinite`
  },
  "stars-2": {
    position: "absolute",
    top: 0,
    animation: `$twinkle 3s linear infinite`
  },
  "stars-3": {
    position: "absolute",
    top: 0,
    animation: `$twinkle 6s linear infinite`
  }
}));

export default function Nasa() {
  const classes = useStyles();
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [stars, setStars] = useState([]);

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

  useEffect(() => {
    if (loading) return;
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      const boxShadow = [];
      const height =
        document.getElementById("nasa-wrapper").clientHeight -
        document.getElementById("nasa-image").clientHeight;
      const width = document.getElementById("nasa-wrapper").clientWidth;
      for (let j = 0; j < 250; j++) {
        boxShadow.push(
          `${Math.random() * width}px ${Math.random() * height}px #FFF`
        );
      }

      stars.push(
        <div
          className={classes[`stars-${i}`]}
          style={{ width: i, height: i, boxShadow: boxShadow.join(",") }}
        />
      );
    }
    setStars(stars);
  }, [loading]);

  /*TO DO: 
  1. Create different background color (dark)
  2. Create conditional rendering based on "loading" state
  */
  return (
    <div className={classes.root} id="nasa-wrapper" style={{ width: "100%" }}>
      {stars}
      <Container
        style={{ backgroundColor: "#000", width: "100%", maxWidth: "unset" }}
      >
        <Typography variant="h3" className={classes.control}>
          NASA
        </Typography>
        <Typography variant="body1">{explanation}</Typography>
        <Typography variant="h6" className={classes.control}>
          {imageTitle}
        </Typography>
      </Container>
      <Box width="100%" className="nasa">
        <img src={image} alt="starry sky" id="nasa-image"></img>
      </Box>
    </div>
  );
}
