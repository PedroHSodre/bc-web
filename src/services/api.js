import axios from "axios";
import { getToken } from "./auth";

const LOCAL_URL = "http://localhost:3333";
const token = `token=${getToken()}`;
const api = axios.create({
  baseURL: LOCAL_URL,
  headers: {
    "Content-Type": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "token": `${getToken()}`,
  },
});

export default api;
