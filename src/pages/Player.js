import { useState, useEffect } from "react";
import GameView from "../components/GameView";
import nflPlayersApi from "../api/nflplayersapi";

function Player({ list }) {
  const [players, setPlayers] = useState([]);

  const getPlayers = async (key) => {
    const response = await nflPlayersApi.get(
      `/${key}?key=6a2cfb1fb41f44fa98015f499739c1e9`
    );
    setPlayers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getPlayers();
  }, []);
  return (
    <div>
      <h2>NFL Logo Game</h2>
      <button>Play The NFL Logo Game!</button>
      <br />
      <GameView />
    </div>
  );
}
export default Player;
