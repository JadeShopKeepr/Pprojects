import React from 'react';
import { useCustom } from './hooks/useCustom';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const { count, setCount } = useCustom();
  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>React Hooks PlayGround</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p className='read-the-docs'>Click on the React logos to see other projects</p>
    </>
  );
}

export default App;
