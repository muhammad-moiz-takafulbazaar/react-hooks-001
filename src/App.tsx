import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  /**
   * increment function will add only one 1 in count state.
   * why !? because it work synchronously and doesn't wait for line no 12 to update the state and then go further go every time we got state value as 0 ( if we click first time ).
   */
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {count}
        <button onClick={increment}>Add</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
