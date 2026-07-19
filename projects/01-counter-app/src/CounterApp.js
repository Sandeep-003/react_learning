import {useState} from 'react';
import React from 'react';
import './CounterApp.css';
function CounterApp() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter-container">
      <h1>Counter: {counter}</h1>
      <button className="increment" onClick={() => setCounter(counter + 1)}>Increment</button>
      <button className="decrement" onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button className="reset" onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default CounterApp;