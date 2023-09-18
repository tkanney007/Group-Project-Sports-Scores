function Testing({ answerList, prevAnsList }) {
  return (
    <>
      {answerList.map((item) => (
        <p>{item.Key}</p>
      ))}
      <p>Previous Answers:</p>
      {prevAnsList.map((item) => (
        <p>{item.Key}</p>
      ))}
    </>
  );
}

export default Testing;
