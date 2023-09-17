import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;

const options = {
  url: "https://api.sportsdata.io/v3/nfl/scores/json/Players",
};

const nflPlayersApi = axios.create({
  baseURL: options.url,
});

export default nflPlayersApi;
