require("dotenv").config();
const cron = require("node-cron");
const express = require("express");
const path = require("path");
const axios = require("axios");
const db = require("knex")(require("../knexfile.js"));

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const quotes = require("./models/quotes.js")(db);
const news = require("./models/news.js")(db);
const emails = require("./models/emails.js")(db);
const cats = require("./models/cats.js")(db);
const jokes = require("./models/jokes.js")(db);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));


cron.schedule("0 0 * * *", async function() {
  console.log("running a task every hour");

  try {
    const date = new Date();
    const currentHour = `${date.getHours()}`.padStart(2, "0");
    Promise.all([
      db("emails").where("time", currentHour),
      db("quotes").first().orderBy('id', 'desc')
    ])
    .then(([emailsSentToList, todayQuoteObj]) => {
      emailsSentToList.forEach(async (emailSentTo) => {
        const msg = {
          to: emailSentTo,
          from: 'test@example.com',
          subject: 'Happy! You are cool!',
          text: 'Happy',
          html: `<strong>${todayQuoteObj.quote}</strong>`
        };
        await sgMail.send(msg);
      })
    })
  } catch (error) {
    console.log(error);    
  }
});

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

app.put("/api/email-times", async (req, res) => {
  emails
    .addTimes(req.body)
    .then(data => res.json(data))
    .catch(e => console.log(e.message));
});

app.get("/api/email-times/:email", async (req, res) => {
  emails.getTimes(req.params.email).then(data => {
    res.json(data);
  });
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

    res.status(200);
    res.send(nasa.data);
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
    res.status(200);
    res.send(weather.data);
  } catch (error) {
    console.error(error);
  }
});

//spotify
app.get("/api/spotify/token", (req, res) => {
  axios
    .post("https://accounts.spotify.com/api/token", null, {
      params: {
        grant_type: "client_credentials"
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET
      }
    })
    .then(tokenRes => {
      return res.json(tokenRes.data);
    })
    .catch(e => console.log(e.message));
});

// horoscopes
app.get("/api/horoscope/:sign", async (req, res) => {
  try {
    const horoscopes = await axios.post(
      `https://aztro.sameerkumar.website/?sign=${req.params.sign}&day=today`
    );
    res.json(horoscopes.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
