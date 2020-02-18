require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const db = require("knex")(require("../knexfile.js"));

const quotes = require("./models/quotes.js")(db);

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

module.exports = app;
