function GameView({
  image,
  answerList,
  numQuestions,
  correctAns,
  handlerNextAns,
  handlerNewGame,
  handlerSetCorrectAns,
  handlerEndGame,
}) {
  const handlerCheckAnswer = (event, isAns) => {
    if (isAns == "true") {
      //alert("You have the right answer!");
      {
        event.target.style = { backGroundColor: "green" };
        handlerSetCorrectAns();
      }
    } else {
      //alert("Wrong answer!");
    }
    handlerNextAns();
  };
  return (
    <div>
      <p>
        Score: {correctAns}/{numQuestions}
      </p>
      <img style={{ maxHeight: "161px", width: "auto" }} src={image}></img>
      <br />
      {answerList.map((item) => (
        <button onClick={() => handlerCheckAnswer(this, item.IsAnswer)}>
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
