import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 300,
    marginBottom: 300,
    padding: 0,
    maxWidth: "unset !important",
    width: "100%",
    position: "relative",
    "&::before": {
      content: `''`,
      display: "block",
      position: "absolute",
      top: -300,
      left: 0,
      width: "100vw",
      height: 300,
      background: "linear-gradient(10deg, #fff, #fff 49.9%, transparent 50%)"
    },
    "&::after": {
      content: `''`,
      display: "block",
      position: "absolute",
      bottom: -300,
      left: 0,
      width: "100vw",
      height: 300,
      background:
        "linear-gradient(10deg, transparent, transparent 49.9%, #fff 50%)"
    }
  },
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    width: "100%",
    padding: "0 10vw"
  },
  text: {
    flex: 1,
    marginBottom: 30,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    paddingRight: "10vw"
  },
  imageWrapper: {
    borderRadius: "100%",
    overflow: "hidden",
    width: 500,
    height: 500,
    minWidth: 500,
    minHeight: 500,
    backgroundSize: "cover"
  },
  image: {
    width: "100%",
    height: "auto"
  }
}));

export default function Nasa() {
  const classes = useStyles();
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
    <Container className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <Typography variant="h5" component="h2">
            {catFact}
          </Typography>
        </div>
        <div
          className={classes.imageWrapper}
          style={{
            backgroundImage: `url(https://cataas.com/cat?timestamp=${cacheBuster})`
          }}
        ></div>
      </div>
    </Container>
  );
}
