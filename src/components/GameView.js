function GameView({ answerList, game, image, answerID, answerName }) {
  const handlerCheckAnswer = (id) => {
    if (id === answerID) {
      alert("You have the right answer!");
    } else {
      alert("Wrong answer!");
    }
  };
  return (
    <div>
      <img src={image}></img>
      <br />
      <p>{answerName}</p>
      <br />
      {answerList.map((item) => (
        <Button onClick={() => handlerCheckAnswer(item.id)}>{item.name}</Button>
      ))}
    </div>
  );
}

export default GameView;
