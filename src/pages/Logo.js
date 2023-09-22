import GameView from "../components/GameView";
import Testing from "../components/Testing";
import { useState, useEffect } from "react";
import nflTeamsApi from "../api/nflteamsapi";
import style from "./logo.css";

function Logo({ list }) {
  const [teams, setTeams] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [prevAnswers, setPrevAnswers] = useState([]);
  const [logo, setLogo] = useState("");
  const [gameActive, setGameActive] = useState("false");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [numCorrect, setNumCorrect] = useState(0);
  const [resultText, setResultText] = useState("");
  const [isEndGame, setIsEndGame] = useState(false);
  const numQuestions = 10;

  const getTeams = async () => {
    const response = await nflTeamsApi.get();
    setTeams(response.data);
    setGameActive(false);
  };

  const beginGame = () => {
    getAnswers();
    setGameActive(true);
    setIsEndGame(false);
    setCurrentQuestion(1);
    setNumCorrect(0);
  };

  const endGame = () => {
    setIsEndGame(true);
    setGameActive(false);
    setResultText("");
  };
  const getAnswers = () => {
    setAnswers(setAllAnswers());
  };
  const getNextAnswers = () => {
    const answer = answers.filter((item) => item.IsAnswer == "true");
    const newPrevAnswers = [...prevAnswers, ...answer];
    setPrevAnswers(newPrevAnswers);
    setAnswers(setAllAnswers());
  };

  const newGame = () => {
    setNumCorrect(0);
    setPrevAnswers([]);
    setAnswers(setAllAnswers());
    setCurrentQuestion(1);
  };
  function setAllAnswers() {
    const shuffledTeams = teams
      // sort the teams in a random order each time to shuffle the possible answers
      .sort(() => 0.5 - Math.random())
      // filter out any previous correct answers from being a possible answer in this question to make it harder and no repeats.
      .filter((item) => prevAnswers.indexOf(item) < 0)
      // take just the first 4 teams as our answers for the current question.
      .splice(0, 4);
    // add IsAnswer property to all answers and default it to false
    shuffledTeams.forEach((e) => (e.IsAnswer = false));
    // set the first team in the array as the answer by setting IsAnswer = true
    shuffledTeams[0].IsAnswer = true;
    setLogo(shuffledTeams[0].WikipediaLogoUrl);
    return shuffledTeams.sort(() => 0.5 - Math.random());
  }
  const setCorrectAnsCount = () => {
    const correctAns = numCorrect + 1;
    setNumCorrect(correctAns);
  };
  const setQuestionCount = () => {
    let newCurrentQuestion = currentQuestion;
    setCurrentQuestion(newCurrentQuestion + 1);
  };

  const handlerSetResultText = (text) => {
    setResultText(text);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div id="gameBoard">
      <div id="aThing">
        <div id="aThing2">
          <h2 id="gameName">NFL Logo Game</h2>
          {isEndGame ? (
            <h2 id="score">
              You scored {numCorrect} out of {numQuestions} for a grade of{" "}
              {(numCorrect / numQuestions) * 100}%!
            </h2>
          ) : null}
          {gameActive ? null : (
            <button id="ptgBtn" onClick={beginGame}>
              {isEndGame ? "Play again!" : "Play The Game!"}
            </button>
          )}
        </div>
      </div>
      {/* <button onClick={getNextAnswers}>Next Question</button> */}
      <br />
      {/* <p id="resultText">{resultText}</p> */}
      {gameActive ? (
        <GameView
          answerList={answers}
          handlerNextAns={getNextAnswers}
          handlerNewGame={newGame}
          handlerSetCorrectAns={setCorrectAnsCount}
          handlerEndGame={endGame}
          handlerSetQuestionCount={setQuestionCount}
          handlerSetResultText={handlerSetResultText}
          image={logo}
          numQuestions={numQuestions}
          currentQuest={currentQuestion}
          correctAns={numCorrect}
          result={resultText}
        />
      ) : null}

      {/* <Testing answerList={answers} prevAnsList={prevAnswers} /> */}
    </div>
  );
}
export default Logo;
