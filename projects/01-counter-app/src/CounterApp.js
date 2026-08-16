import {useState} from 'react';
import React from 'react';
import './CounterApp.css';
import Navbar from './navbar';
function CounterApp() {
  const [counter, setCounter] = useState(0);
  return (
    // <Navbar />
    <div className="counter-container">
      <Navbar title="Counter App" />
      {/* <title>React learning</title> */}
      <h1>Counter: {counter}</h1>
      <button className="increment" onClick={() => setCounter(counter + 1)}>Increment</button>
      <button className="decrement" onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button className="reset" onClick={() => setCounter(counter + 10)}>Plus 10</button>
      <button className="reset" onClick={() => setCounter(0)}>Reset</button>
      <p> This is a basic counter app. I'm trying to learn new things (React) </p>
    </div>
  );
}

export default CounterApp;