import axios from "axios";
const options = {
  url: "https://api-american-football.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "a55b6bc1b7msh59c5e8ece428b6dp15e9cfjsn3f72988b246f",
    "X-RapidAPI-Host": "api-american-football.p.rapidapi.com",
  },
};

const nflScoresApi = axios.create({
  baseURL: options.url,
  headers: options.headers,
});

export default nflScoresApi;
