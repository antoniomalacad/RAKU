import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";

import "./App.scss";
import quotes from "./utils/quotes";
import Nasa from "./components/Nasa";
import Weather from "./components/Weather";
import Quote from "./components/Quote";
import News from "./components/News";
import Joke from "./components/Joke";
import EmailModal from "./components/EmailModal";
import Horoscope from "./components/Horoscope";
import Cats from "./components/Cats";
import Spotify from "./components/Spotify";

//Material-UI stuff
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    background:
      "linear-gradient(45deg, rgba(255,23,124,1) 0%, rgba(100,171,255,1) 69%)"
  },
  title: {
    flexGrow: 1
  },
  weather: {
    padding: theme.spacing(2),
    justify: "center"
  }
}));

function App() {
  const classes = useStyles();
  const [emailModalIsOpen, setEmailModalIsOpen] = useState(false);

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.root}>
            <Typography variant="h6" className={classes.title}>
              RAKU
            </Typography>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setEmailModalIsOpen(!emailModalIsOpen);
              }}
            >
              <MailIcon />
            </span>
          </Toolbar>
        </AppBar>
      </div>
      <Container className="App-content">
        <Quote />
        <Spotify className={classes.spotify} />

        <Weather className={classes.weather} />

        <Joke />
        <Cats />

        <News className="news" />
        <Horoscope />

        <Nasa className="nasa" />
      </Container>
      <EmailModal
        open={emailModalIsOpen}
        close={() => {
          setEmailModalIsOpen(false);
        }}
      />
    </div>
  );
}

export default App;
