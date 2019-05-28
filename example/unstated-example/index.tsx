import * as React from 'react';
import Counter1 from './store/counter1';
import Counter2 from './store/counter2';
import StateProviders from './store';

function CounterDisplay1() {
  const counter1 = Counter1.useContainer();
  console.log('rendering');
  return (
    <div>
      <div>counter display 1</div>
      <div>counter 1</div>
      <button onClick={counter1.decrement}>-</button>
      <span>{counter1.count}</span>
      <button onClick={counter1.increment}>+</button>
      <br />
    </div>
  );
}

function CounterDisplay2() {
  const counter1 = Counter1.useContainer();
  const counter2 = Counter2.useContainer();
  return (
    <div>
      <div>counter display 2</div>
      <div>counter 1</div>
      <button onClick={counter1.decrement}>-</button>
      <span>{counter1.count}</span>
      <button onClick={counter1.increment}>+</button>
      <div>counter 2</div>
      <button onClick={counter2.decrement}>-</button>
      <span>{counter2.count}</span>
      <button onClick={counter2.increment}>+</button>
      <br />
    </div>
  );
}

function UnstatedApp() {
  return (
    <StateProviders>
      <CounterDisplay1 />
      <br />
      <CounterDisplay2 />
    </StateProviders>
  );
}

export default UnstatedApp;
