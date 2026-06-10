import axios from "axios";

const API = axios.create({
 baseURL: "https://backend-uarb.onrender.com/api",
  withCredentials: true,
});

export default API;