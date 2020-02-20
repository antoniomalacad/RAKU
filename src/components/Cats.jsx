import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50
  },
  title: {
    marginBottom: 30
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
    <div className={classes.root}>
      <Typography variant="h4">Cat</Typography>
      <Typography variant="body1">{catFact}</Typography>
      <img
        src={`https://cataas.com/cat?timestamp=${cacheBuster}`}
        alt={catFact}
      />
    </div>
  );
}
