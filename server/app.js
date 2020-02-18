const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));

try {
  // happiness quotes
  app.get("/api/quotes", async (req, res) => {
    const data = await axios(
      "https://goodreads-best-quotes.p.rapidapi.com/random/happiness",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "goodreads-best-quotes.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      }
    );
    res.send(data.data.data);
  });
} catch (error) {
  console.error(error);
}

app.get("/api/nasa", async (req, res) => {
  try {
    const nasa = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=KoKS6MRHHZ5yflOqxhjGQpPiZSt0jgnnF0xuyqJa`
    );

    res.send(nasa.data);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
