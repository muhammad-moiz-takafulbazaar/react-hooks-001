import React, { useLayoutEffect, useState } from 'react';

const UseLayoutEffectExplain = () => {
  const [counter, setCounter] = useState(0);
  /**
   * run before with dom and don't wait for everything to print first 
   */
  useLayoutEffect(() => {
    function test() {
      if (counter === 0) {
        setCounter(Math.random() * 200);
      }
    }
    test();
  }, [counter]);
  return (
    <div>
      <h1>{counter}</h1>
      <h2 onClick={() => setCounter(0)}>UseLayoutEffect</h2>
    </div>
  );
};

export default UseLayoutEffectExplain;
