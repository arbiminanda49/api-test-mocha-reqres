import axios from "axios";

const BaseAPI = axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default BaseAPI;
