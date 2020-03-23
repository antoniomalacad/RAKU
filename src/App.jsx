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
  weather: {
    padding: theme.spacing(2),
    justify: "center"
  }
}));

function App() {
  const classes = useStyles();
  const [emailModalIsOpen, setEmailModalIsOpen] = useState(false);

  return (
    <div className="App horizontal-gradient">
      <div>
        <AppBar position="static" style={{ backgroundColor: "#000" }}>
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ flexGrow: 1 }}
            >
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
        <Horoscope />

        <News className="news" />

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
