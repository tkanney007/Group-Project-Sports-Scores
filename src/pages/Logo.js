import GameView from "../components/GameView";
import Testing from "../components/Testing";
import { useState, useEffect } from "react";
import nflTeamsApi from "../api/nflteamsapi";

function Logo({ list }) {
  const [teams, setTeams] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [logo, setLogo] = useState("");
  const [prevAnswers, setPrevAnswers] = useState([]);

  const getTeams = async () => {
    const response = await nflTeamsApi.get();
    setTeams(response.data);
  };
  const getAnswers = () => {
    setAnswers(setAllAnswers());
    console.log("AnswerAfter:", answers);
  };
  const getNextAnswers = () => {
    const answer = answers.filter((item) => item.IsAnswer == "true");
    const newPrevAnswers = [...prevAnswers, ...answer];
    setPrevAnswers(newPrevAnswers);
    setAnswers(setAllAnswers());
    console.log(prevAnswers);
  };

  const newGame = () => {
    setPrevAnswers([]);
    setAnswers(setAllAnswers());
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
    shuffledTeams.forEach((e) => (e.IsAnswer = "false"));
    // set the first team in the array as the answer by setting IsAnswer = true
    shuffledTeams[0].IsAnswer = "true";
    setLogo(shuffledTeams[0].WikipediaLogoUrl);
    return shuffledTeams.sort(() => 0.5 - Math.random());
  }
  // function randomTeam(abbrev) {
  //   const filteredTeams = teams.filter((item) => item.Key !== abbrev);
  //   let team = [];

  //   team[0] = filteredTeams[Math.floor(Math.random() * filteredTeams.length)];

  //   // console.log(team);
  //   return team;
  // }
  // function setAllAnswers() {
  //   const shuffledTeams = teams.sort(() => 0.5 - Math.random()).splice(0, 4);
  //   // .filter((item) => item.Key !== answer.Key);
  //   shuffledTeams.forEach((e) => (e.IsAnswer = "false"));
  //   shuffledTeams[0].IsAnswer = "true";
  //   console.log("Answer:", answers);
  //   return shuffledTeams;
  // }
  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <h2>NFL Logo Game</h2>
      <button onClick={getAnswers}>Play The Game!</button>
      {/* <button onClick={getNextAnswers}>Next Question</button> */}
      <br />
      <GameView
        answerList={answers}
        handlerNextAns={getNextAnswers}
        handlerNewGame={newGame}
        image={logo}
      />
      {/* <Testing answerList={answers} prevAnsList={prevAnswers} /> */}
    </div>
  );
}
export default Logo;
