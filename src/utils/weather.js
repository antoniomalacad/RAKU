const axios = require("axios");
require("dotenv").config();

module.exports = {
  get: function() {
    axios(
      "https://dark-sky.p.rapidapi.com/35.6762,139.6503?lang=en&units=auto",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "dark-sky.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      }
    )
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
