import React, { useEffect, useState } from 'react';

const UseEffectExplain = () => {
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // document.title = input
    const increment = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(increment)
    /**
     * if you pass the value in dependency array which you are updating in the useEffect then it will crash your code and because you create a infinite loop 
     */
    // }, [counter]);
  }, [input]);
  return (
    <div>
      <h1>{input}</h1>
      <h2>UseEffect</h2>
      <h3>{counter}</h3>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default UseEffectExplain;
