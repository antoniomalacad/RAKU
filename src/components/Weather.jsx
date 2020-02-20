import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
//Material-UI stuff
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 14
  },
  gridColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch"
  },
  largeBlock: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 20
  },
  smallBlock: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  smallBlockElement: {
    padding: 10
  }
});

export default function Weather() {
  const classes = useStyles();
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const handleWeather = async () => {
      const result = await axios.get("/api/weather");
      setWeather(result);
    };

    handleWeather();
  }, []);

  const renderWeather = () => {
    if (weather.data !== undefined) {
      const current = weather.data.currently;
      const today = weather.data.daily.data[0];
      const tomorrow = weather.data.daily.data[1];
      const datom = weather.data.daily.data[2];
      const renderCurrent = () => {
        return (
          <Paper elevation={2} className={classes.largeBlock}>
            <div style={{ flex: 1 }}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Currently
              </Typography>
              <Typography variant="h5" component="h2">
                {current.summary}
              </Typography>
              <div className="weather-icon">
                <ReactAnimatedWeather
                  icon={current.icon.replace(/-/g, "_").toUpperCase()}
                  size={96}
                />
              </div>
              <Typography variant="body1" component="p" color="textSecondary">
                {Math.round(current.temperature) + " °C"}
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {String(current.precipProbability * 100) + " %"}
              </Typography>
            </div>
          </Paper>
        );
      };

      const renderSmall = (title, obj) => {
        return (
          <Paper
            elevation={2}
            className={classes.smallBlock}
            style={title == "Day After" ? { marginBottom: 0 } : {}}
          >
            <Typography
              className={[classes.title, classes.smallBlockElement].join(" ")}
              color="textSecondary"
              gutterBottom
            >
              {title}
            </Typography>
            <div className={classes.smallBlockElement}>
              <ReactAnimatedWeather
                icon={obj.icon.replace(/-/g, "_").toUpperCase()}
                size={80}
              />
            </div>
            <div className={classes.smallBlockElement}>
              <Typography variant="body1" component="p" color="textSecondary">
                {obj.summary}
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {Math.round(obj.temperatureHigh) + " °C"}
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {Math.round(obj.temperatureLow) + " °C"}
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {String(obj.precipProbability * 100) + " %"}
              </Typography>
            </div>
          </Paper>
        );
      };

      return (
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.gridColumn}>
              {renderCurrent()}
            </Grid>
            <Grid item xs={12} className={classes.gridColumn}>
              {renderSmall("Today", today)}
              {renderSmall("Tomorrow", tomorrow)}
              {renderSmall("Day After", datom)}
            </Grid>
          </Grid>
        </Container>
      );
    }
  };

  return (
    <CssBaseline>
      <Grid
        container
        display="flex"
        flexDirection="row"
        spacing={1}
        justifyContent="center"
        style={{ marginTop: 20 }}
      >
        {renderWeather()}
      </Grid>
    </CssBaseline>
  );
}
