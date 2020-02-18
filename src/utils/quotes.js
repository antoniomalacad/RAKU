import axios from "axios";
require("dotenv").config();

export default {
  get() {
    return axios("/api/quotes").then(data=>data.data);
  }
};