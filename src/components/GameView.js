function GameView({ image, answerList, handlerNextAns, handlerNewGame }) {
  const handlerCheckAnswer = (isAns) => {
    console.log("Correct Answer?", isAns);
    if (isAns == "true") {
      alert("You have the right answer!");
    } else {
      alert("Wrong answer!");
    }
  };
  return (
    <div>
      <img src={image}></img>
      <br />
      {answerList.map((item) => (
        <button onClick={() => handlerCheckAnswer(item.IsAnswer)}>
          {item.FullName}
        </button>
      ))}
      <br />
      <button onClick={handlerNextAns}>Next Question</button>
      <button onClick={handlerNewGame}>New Game</button>
    </div>
  );
}

export default GameView;
