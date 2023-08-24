import React, { useState } from 'react';

const UseStateExplain = () => {
  const [count, setCount] = useState(0);
  /**
   * increment function will add only one 1 in count state.
   * -- why !? because it work synchronously and doesn't wait for line no 12 to update the state and then go further go every time we got state value as 0 ( if we click first time ).
   *
   * -- now we use a callback function inside the useState to it will get the latest value.
   */
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={increment}>Add</button>
    </div>
  );
};

export default UseStateExplain;
