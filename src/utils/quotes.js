import axios from "axios";
require("dotenv").config();

export default {
  async get() {
    const data = await axios("https://goodreads-best-quotes.p.rapidapi.com/random/happiness", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "goodreads-best-quotes.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    });
    return data.data.data;
  }
};