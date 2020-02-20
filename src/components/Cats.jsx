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
    marginTop: 50
  },
  title: {
    marginBottom: 30
  },
  media: {
    minHeight: 200
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
    <Container style={{ marginTop: 20 }}>
      <Paper elevation={2}>
        <CardContent style={{ padding: 20 }}>
          <Typography variant="h5" component="h2">
            {catFact}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={`https://cataas.com/cat?timestamp=${cacheBuster}`}
          title={catFact}
        />
      </Paper>
    </Container>
  );
}
