import "./App.css";
import nflScoresApi from "./api/nflscoresapi";

function App() {
  nflScoresApi
    .get("teams", {
      params: { id: "32" },
    })
    .then((resp) => console.log(resp.data.response[0]))
    .catch((e) => console.log(e));
}

export default App;
