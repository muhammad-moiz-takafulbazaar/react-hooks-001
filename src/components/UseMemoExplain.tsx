import React, { useMemo, useState } from 'react';

const UseMemoExplain = () => {
  const [count, setCount] = useState({ 0: '1' });

  // after useMemo
  const expensiveCalculator = () => {
    return Math.random() * 1000;
  };

  const renderedValue = useMemo(() => {
    console.log(1);
    expensiveCalculator();
  }, [count]);
  return (
    <div>
      <input
        type='number'
        name=''
        id=''
        onChange={(e) => { const newData = { 0: e.target.value }; setCount(newData) }}
      />
      write: {count[0]}
      {/* <p onClick={() => setCount((preCount) => preCount + 1)}>click: {count}</p> */}
      <br />
      {/* <p>RenderValue: {renderedValue}</p> */}
    </div>
  );
};

export default UseMemoExplain;
