function Testing({ list }) {
  return (
    <>
      {list.map((item) => (
        <p>{item.Name}</p>
      ))}
    </>
  );
}

export default Testing;
