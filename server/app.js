require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const db = require("knex")(require("../knexfile.js"));

const quotes = require("./models/quotes.js")(db);
const news = require("./models/news.js")(db);
const cats = require("./models/cats.js")(db);
const jokes = require("./models/jokes.js")(db);

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

// happiness news
app.get("/api/news", async (req, res) => {
  news
    .get()
    .then(data => res.json(data))
    .catch(e => console.log(e.message));
});

// happiness cats
app.get("/api/cat-facts", async (req, res) => {
  cats
    .getFact()
    .then(data => res.json(data))
    .catch(e => console.log(e.message));
});

// happiness jokes
app.get("/api/jokes", async (req, res) => {
  jokes
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
    res.status(200);
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
    res.status(200);
  } catch (error) {
    console.error(error);
  }
});

// horoscopes
app.post("/api/horoscope", async (req, res) => {
  const input = req.body;
  try {
    const horoscopes = await axios.post(
      `https://aztro.sameerkumar.website/?sign=${input.horoscope}&day=today`
    );
    res.send(horoscopes.data);
    res.status(200);
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
