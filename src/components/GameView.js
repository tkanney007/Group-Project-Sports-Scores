import "./gameview.css"

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
  const handlerCheckAnswer = (isAns) => {
    if (isAns == "true") {
      //alert("You have the right answer!");
      {
        handlerSetCorrectAns();
      }
    } else {
      //alert("Wrong answer!");
    }
    handlerNextAns();
  };
  return (
    <div>
      {}
      <p>
        Score: {correctAns}/{numQuestions}
      </p>
      <img id="logoImg" src={image}></img>
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
