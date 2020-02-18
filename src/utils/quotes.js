import axios from "axios";

export default {
  get() {
    return axios("/api/quotes").then(data => data.data);
  }
};
