import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";

const signs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
];
const signEmojis = [
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓"
];
export default function Horoscope() {
  const classes = useStyles();

  const [horoscopes, setHoroscopes] = useState([]);
  const [value, setValue] = useState(
    localStorage.selectedHoroscope ? Number(localStorage.selectedHoroscope) : 0
  );

  const handleChange = (event, newValue) => {
    localStorage.selectedHoroscope = newValue;
    setValue(newValue);
  };
  const handleChangeIndex = index => {
    localStorage.selectedHoroscope = index;
    setValue(index);
  };

  useEffect(() => {
    const promises = signs.map(sign => axios.get(`/api/horoscope/${sign}`));
    Promise.all(promises).then(results => {
      setHoroscopes(
        results.map((result, i) => ({
          ...result.data,
          sign: signs[i]
        }))
      );
    });
  }, []);

  if (!horoscopes.length) return <div></div>;
  return (
    <Container style={{ marginTop: 20 }}>
      <Paper elevation={2}>
        <CardContent>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs"
            >
              {signEmojis.map((sign, i) => (
                <Tab
                  label={sign}
                  {...a11yProps(i)}
                  style={{ minWidth: "auto" }}
                />
              ))}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis="x"
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {horoscopes.map((horoscope, i) => (
              <TabPanel value={value} index={i} dir="x">
                {horoscope.description}
              </TabPanel>
            ))}
          </SwipeableViews>
        </CardContent>
      </Paper>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 50
  },
  title: {
    marginBottom: 30
  }
}));
