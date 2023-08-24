import React, { useState } from 'react';

const UseEffectExplain = () => {
  const [input, setInput] = useState('');
  return (
    <div>
      <h1>{input}</h1>
      <h2>UseEffect</h2>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default UseEffectExplain;
