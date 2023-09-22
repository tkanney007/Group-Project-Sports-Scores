import style from "../components/gameview.module.css";
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
    <div className={style.outerCenterBoard}>
    <div className={style.centerBoard}>
      <p className={style.score}>
        Score: {correctAns}/{numQuestions}
      </p>
      <img className={style.logoImg} src={image}></img>
      <br />
      {answerList.map((item) => (
        <button
          className={style.answerBtn}
          style={{
            backgroundColor: userAns ? (item.IsAnswer ? "rgb(29, 123, 29, 0.847)" : "rgb(255, 0, 0, 0.700)") : null,
          }}
          onClick={(event) => {
            handlerCheckAnswer(event, item.IsAnswer);
          }}
        >
          {item.FullName}
        </button>
      ))}
      <br />
      <button className={style.gaemButtons} onClick={handlerNextAns}>Next Question</button>
      <button className={style.gaemButtons} onClick={handlerNewGame}>New Game</button>
    </div>
    </div>
  );
}

export default GameView;
