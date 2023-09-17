import GameView from "../components/GameView";

function Player({ list }) {
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
