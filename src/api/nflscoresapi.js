import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;

const options = {
  url: `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${apiKey}`,
  // headers: {
  //   "Ocp-Apim-Subscription-Key:": apiKey,
  // },
};

const nflScoresApi = axios.create({
  baseURL: options.url,
  headers: options.headers,
});

export default nflScoresApi;
