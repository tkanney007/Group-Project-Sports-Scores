import { useState, useEffect } from "react";
import GameView from "../components/GameView";
import nflPlayersApi from "../api/nflplayersapi";
import nflTeamsApi from "../api/nflteamsapi";

function Player({ list }) {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const response = await nflTeamsApi.get();
    setTeams(response.data);
    console.log(teams);
  };

  const getPlayers = async (key) => {
    const response = await nflPlayersApi.get(
      `/${key}?key=6a2cfb1fb41f44fa98015f499739c1e9`
    );
    setPlayers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getTeams();
  }, []);
  return (
    <div>
      <h2>Name That NFL Player </h2>
      <button onClick={getTeams}>Play Name That NFL Player Game!</button>
      <br />
      {/* <GameView /> */}
    </div>
  );
}
export default Player;
