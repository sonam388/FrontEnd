import axios from "axios";

const API = axios.create({
  baseURL: "http://3.27.197.228:5000/",
  withCredentials: true,
});

export default API;