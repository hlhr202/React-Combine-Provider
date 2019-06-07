# React Combine Provider

[![npm](https://img.shields.io/npm/v/react-combine-provider.svg)](https://www.npmjs.com/package/react-combine-provider)
[![Coverage Status](https://coveralls.io/repos/github/hlhr202/React-Combine-Provider/badge.svg?branch=master)](https://coveralls.io/github/hlhr202/React-Combine-Provider?branch=master)
[![CircleCI](https://circleci.com/gh/hlhr202/React-Combine-Provider.svg?style=shield)](https://circleci.com/gh/hlhr202/React-Combine-Provider)
![TypeDefine](https://img.shields.io/npm/types/chalk.svg)
[![License](https://img.shields.io/npm/l/react-combine-provider.svg)](https://github.com/hlhr202/React-Combine-Provider/blob/master/LICENSE)

Combine react providers in ease  
Requires React >= 16.8.0  
Fully support [unstated-next](https://github.com/jamiebuilds/unstated-next) and [constate](https://github.com/diegohaz/constate)  

## Install

```
npm install --save react-combine-provider
```

## Usage

- unstated

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'unstated-next';
import { combineProviders } from 'react-combine-provider';

const useCounter1 = (initialState = 1) => {
    const [count, setCount] = useState(initialState);
    const decrement = () => setCount(count - 1);
    const increment = () => setCount(count + 1);
    return { count, decrement, increment };
};

const Counter1 = createContainer(useCounter1);

const useCounter2 = (initialState = 2) => {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 2);
  const increment = () => setCount(count + 2);
  return { count, decrement, increment };
};

const Counter2 = createContainer(useCounter2);

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

const StateProviders = combineProviders([
  [Counter1.Provider, { initialState: 5 }],
  Counter2.Provider,
]);

function App() {
  return (
    <StateProviders>
      <CounterDisplay1 />
      <br />
      <CounterDisplay2 />
    </StateProviders>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## TODO
  - [] reference of hooks in another hooks
  - [] dynamic hooks injection