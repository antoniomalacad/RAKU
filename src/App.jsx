import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import quotes from "./utils/quotes";
import Nasa from "./components/Nasa";
import Weather from "./components/Weather";
import Quote from "./components/Quote";
import News from "./components/News";
import Joke from "./components/Joke";
import Emails from "./components/Emails";
import Cats from "./components/Cats";

//Material-UI stuff
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    background:
      "linear-gradient(90deg, rgba(255,23,124,1) 0%, rgba(100,171,255,1) 69%)"
  },
  title: {
    flexGrow: 1
  },
  weather: {
    padding: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.root}>
            <Typography variant="h6" className={classes.title}>
              RAKU
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <header></header>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item className={classes.quote}>
          <Quote />
        </Grid>

        <Weather className={classes.weather} />

        <Joke />

        <Cats />

        <Nasa className="nasa" />
      </Grid>
    </div>
  );
}

export default App;
