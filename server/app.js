require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const db = require("knex")(require("../knexfile.js"));

const quotes = require("./models/quotes.js")(db);
const news = require("./models/news.js")(db);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));

// happiness quotes
app.get("/api/quotes", async (req, res) => {
  quotes
    .get()
    .then(data => res.json(data))
    .catch(e => console.log(e.message));
});

// happiness quotes
app.get("/api/news", async (req, res) => {
  news
    .get()
    .then(data => res.json(data))
    .catch(e => console.log(e.message));
});

// nasa!!
app.get("/api/nasa", async (req, res) => {
  try {
    const nasa = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );

    res.send(nasa.data);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

// weather
app.get("/api/weather", async (req, res) => {
  try {
    const weather = await axios.get(
      "https://dark-sky.p.rapidapi.com/35.6762,139.6503?lang=en&units=auto",
      {
        headers: {
          "x-rapidapi-host": "dark-sky.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY
        }
      }
    );
    res.send(weather.data);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

// horoscopes
app.post("/api/horoscope", async (req, res) => {
  try {
    const horoscopes = await axios.post(
      "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
      {
        headers: {
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY
        },
        params: {
          sign: req.body
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
