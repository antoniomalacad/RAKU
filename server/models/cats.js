const axios = require("axios");

module.exports = db => ({
  async getFact() {
    const facts = await axios(
      "https://brianiswu-cat-facts-v1.p.rapidapi.com/facts",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "brianiswu-cat-facts-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY
        }
      }
    );
    return facts.data.all.map(x => x.text);
  }
});
