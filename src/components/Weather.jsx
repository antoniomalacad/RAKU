import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
//Material-UI stuff
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    minWidth: 275,
    maxHeight: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  grid: {
    flexGrow: 1
  },
  card: {}
});

export default function Weather() {
  const classes = useStyles();
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const handleWeather = async () => {
      const result = await axios.get("/api/weather");
      setWeather(result);
      console.log(result);
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
          <>
            <Card className={classes.root}>
              <CardContent>
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
                <Typography variant="body1" component="p" color="textSecondary">
                  {String(current.humidity * 100) + "%"}
                </Typography>
                <br />
              </CardContent>
            </Card>
          </>
        );
      };

      const renderToday = () => {
        return (
          <>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Today
                </Typography>
                <Typography variant="h5" component="h2">
                  {today.summary}
                </Typography>
                <div className="weather-icon">
                  <ReactAnimatedWeather
                    icon={today.icon.replace(/-/g, "_").toUpperCase()}
                    size={80}
                  />
                </div>
                <Typography variant="body1" component="p" color="textSecondary">
                  {Math.round(today.temperatureHigh) + " °C"}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {Math.round(today.temperatureLow) + " °C"}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {String(today.precipProbability * 100) + " %"}
                </Typography>
                <br />
              </CardContent>
            </Card>
          </>
        );
      };

      const renderTomorrow = () => {
        return (
          <>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Tomorrow
                </Typography>
                <Typography variant="h5" component="h2">
                  {tomorrow.summary}
                </Typography>
                <div className="weather-icon">
                  <ReactAnimatedWeather
                    icon={tomorrow.icon.replace(/-/g, "_").toUpperCase()}
                    size={80}
                  />
                </div>
                <Typography variant="body1" component="p" color="textSecondary">
                  {Math.round(tomorrow.temperatureHigh) + " °C"}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {Math.round(tomorrow.temperatureLow) + " °C"}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {String(tomorrow.precipProbability * 100) + " %"}
                </Typography>
                <br />
              </CardContent>
            </Card>
          </>
        );
      };

      const renderDATom = () => {
        return (
          <>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Day After Tomorrow
                </Typography>
                <Typography variant="h5" component="h2">
                  {datom.summary}
                </Typography>
                <div className="weather-icon">
                  <ReactAnimatedWeather
                    icon={datom.icon.replace(/-/g, "_").toUpperCase()}
                    size={80}
                  />
                </div>
                <Typography variant="body1" component="p" color="textSecondary">
                  {Math.round(datom.temperatureHigh) + " °C"}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {Math.round(datom.temperatureLow) + " °C"}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {String(datom.precipProbability * 100) + " %"}
                </Typography>
                <br />
              </CardContent>
            </Card>
          </>
        );
      };

      return (
        <>
          <Grid item xs={"auto"}>
            {renderCurrent()}
          </Grid>
          <Grid item xs={"auto"}>
            {renderToday()}
          </Grid>
          <Grid item xs={"auto"}>
            {renderTomorrow()}
          </Grid>
          <Grid item xs={"auto"}>
            {renderDATom()}
          </Grid>
        </>
      );
    }
  };

  /* TO DO:
  1. Apply Material-UI styles
  2. Card vs paper?
  3. Current = centered, alone on line
  4. Today, Tomorrow, DATom lined up below Current
  */

  return (
    <div className="weather">
      <h1>THE WEATHER</h1>
      <Grid container display="flex" flexDirection="row" spacing={1}>
        {renderWeather()}
      </Grid>
    </div>
  );
}
