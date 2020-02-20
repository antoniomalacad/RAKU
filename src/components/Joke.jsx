import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: 10
  }
});

export default function Joke() {
  const classes = useStyles();

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
    <Box>
      <Button className={classes.root} onClick={() => setShowPunchline(true)}>
        Show Punchline
      </Button>
    </Box>
  );

  return (
    joke && (
      <Box marginTop={10}>
        <Typography variant="h4">Joke</Typography>
        <Typography variant="body1" component="p">
          {joke.setup}
        </Typography>
        <Typography variant="body1">{punchline}</Typography>
      </Box>
    )
  );
}
