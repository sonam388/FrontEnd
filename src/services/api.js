import axios from "axios";

const API = axios.create({
 baseURL: "https://api.dayodaygaushalatendukheda.org/api",
  withCredentials: true,
});

export default API;