const axios = require("axios");

module.exports = db => ({
  async get() {
    const jokes = await axios("https://dad-jokes.p.rapidapi.com/random/jokes", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY
      }
    });
    return jokes.data;
  }
});
