import axios from "axios";
const rapidApiKey = process.env.REACT_APP_API_KEY;
const options = {
  url: "https://api-american-football.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": { rapidApiKey },
    "X-RapidAPI-Host": "api-american-football.p.rapidapi.com",
  },
};

const nflScoresApi = axios.create({
  baseURL: options.url,
  headers: options.headers,
});

export default nflScoresApi;
