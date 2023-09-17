import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Testing from "./components/Testing";
import nflTeamsApi from "./api/nflteamsapi";
import nflPlayersApi from "./api/nflplayersapi";

function App() {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const response = await nflPlayersApi.get(
      "/BUF?key=6a2cfb1fb41f44fa98015f499739c1e9"
    );
    setTeams(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getTeams();
  }, []);
  return (
    <div>
      {/* <button onClick={getTeams}>Click Me!</button> */}
      <Testing list={teams}></Testing>
    </div>
  );
}

export default App;
