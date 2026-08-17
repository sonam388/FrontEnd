import axios from "axios";

const API = axios.create({ 
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://api.dayodaygaushalatendukheda.org/api",
});

export default API;   






