import { useState } from "react";
function GameView({
  image,
  answerList,
  numQuestions,
  currentQuest,
  correctAns,
  handlerNextAns,
  handlerNewGame,
  handlerSetCorrectAns,
  handlerSetResultText,
  handlerSetQuestionCount,
  handlerEndGame,
}) {
  const [userAns, setUserAns] = useState(false);
  const handlerCheckAnswer = (event, isAns) => {
    handlerSetQuestionCount();

    if (isAns) {
      //alert("You have the right answer!");
      console.log("I am here!");
      setUserAns(true);
      handlerSetCorrectAns();
      handlerSetResultText("You got it RIGHT!");
    } else {
      //alert("Wrong answer!");
      setUserAns(true);
      handlerSetResultText("You got it WRONG!");
    }

    setTimeout(() => {
      console.log(currentQuest);
      if (currentQuest < numQuestions) {
        handlerNextAns();
        setUserAns(false);
        handlerSetResultText("");
      } else {
        handlerEndGame();
      }
    }, 2000);
  };
  return (
    <div>
      <p>
        Score: {correctAns}/{numQuestions}
      </p>
      <img style={{ maxHeight: "161px", width: "auto" }} src={image}></img>
      <br />
      {answerList.map((item) => (
        <button
          style={{
            backgroundColor: userAns ? (item.IsAnswer ? "green" : "red") : null,
          }}
          onClick={(event) => {
            handlerCheckAnswer(event, item.IsAnswer);
          }}
        >
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
