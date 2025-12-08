import React from 'react';
import { useCustom } from './hooks/useCustom';
import { MessageContainer } from './message.jsx';
import reactLogo from './assets/react.svg';
import './App.css';

function fetchMessage() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, '⚛️');
  });
}

function App() {
  const { count, setCount } = useCustom();
  const [messagePromise, setMessagePromise] = React.useState(null);
  const [show, setShow] = React.useState(false);
  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

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
      <div className='card'>
        {!show ? <button onClick={download}>Download message</button> : <MessageContainer messagePromise={messagePromise} />}
      </div>
      <p className='read-the-docs'>Click on the React logos to see other projects</p>
    </>
  );
}

export default App;
