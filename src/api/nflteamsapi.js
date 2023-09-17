import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;

const options = {
  url: `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${apiKey}`,
};

const nflTeamsApi = axios.create({
  baseURL: options.url,
});

export default nflTeamsApi;
