import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    background:
      "linear-gradient(45deg, rgba(255,23,124,1) 0%, rgba(100,171,255,1) 69%)",
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
      <Button className={classes.button} onClick={() => setShowPunchline(true)}>
        Show Punchline
      </Button>
    </Box>
  );

  return (
    joke && (
      <Container style={{ marginTop: 20 }}>
        <Paper elevation={2} style={{ padding: 20 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {joke.setup}
            </Typography>
            <Typography variant="h5" component="h2">
              {punchline}
            </Typography>
          </CardContent>
        </Paper>
      </Container>
    )
  );
}
