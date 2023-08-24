import React from 'react';
import logo from './logo.svg';
import './App.css';
// import UseStateExplain from './components/useStateExplain';
// import UseEffectExplain from './components/useEffectExplain';
import UseLayoutEffectExplain from './components/useLayoutEffectExplain';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <UseStateExplain /> */}
        {/* <UseEffectExplain /> */}
        <UseLayoutEffectExplain />
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
