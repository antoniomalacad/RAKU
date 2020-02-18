const axios = require("axios");

module.exports = db => ({
  async get() {
    let results = await db("quotes");
    if (
      !results.length ||
      results[0].created_at < Date.now() - 1000 * 60 * 60 * 24
    ) {
      const data = await axios(
        "https://good-quotes.p.rapidapi.com/tag/happiness",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "good-quotes.p.rapidapi.com",
            "x-rapidapi-key": process.env.API_KEY
          }
        }
      );
      results = data.data.quotes.map(x => ({
        quote: x.quote,
        author: x.author
      }));
      await db("quotes").del();
      await db("quotes").insert(
        results.map(x => ({ ...x, created_at: db.fn.now() }))
      );
    }
    return results[Math.floor(Math.random() * results.length)];
  }
});
