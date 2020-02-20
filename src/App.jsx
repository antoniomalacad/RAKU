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
import Horoscope from "./components/Horoscope";
import Cats from "./components/Cats";
import Spotify from "./components/Spotify";

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
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="parent">
        <Emails/>
        <Quote />
        <Weather />
        <Nasa />
        <News />
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
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="parent">
        <Emails/>
        <Quote />
        <Weather />
        <Nasa />
        <News />
||||||||| merged common ancestors
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="parent">
        <Quote />
        <Weather />
        <Nasa />
        <News />
=========
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.root}>
            <Typography variant="h6" className={classes.title}>
              RAKU
            </Typography>
          </Toolbar>
        </AppBar>
>>>>>>>>> Temporary merge branch 2
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
=======
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
        <Spotify className={classes.spotify} />
>>>>>>> 5103cbcdb76d92b205dd41f1bb46a4284efff764

          <Weather className={classes.weather} />

          <Joke />

          <Cats />

<<<<<<< HEAD
          <Nasa className="nasa" />
        </Grid>
      </div>
||||||| merged common ancestors
        <Nasa className="nasa" />
      </Grid>
=======
        <Horoscope />

        <Nasa className="nasa" />
      </Grid>
>>>>>>> 5103cbcdb76d92b205dd41f1bb46a4284efff764
    </div>
  );
}

export default App;
