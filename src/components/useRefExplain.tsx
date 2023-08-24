import React, { useEffect, useRef } from 'react';

const UseRefEffectExplain = () => {
  const titleRef = useRef();
  useEffect(() => {
    console.log(titleRef?.current)
  }, []);
  return (
    <div>
      <h1 ref={titleRef}>Hello !</h1>
    </div>
  );
};

export default UseRefEffectExplain;
