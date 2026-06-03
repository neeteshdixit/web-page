function Count() {
  let count = 0;

  const increase = () => {
    count++;
  };

  const decrease = () => {
    count--;
  }

  return (
    <>
      <p>Count = {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}
export default Count;