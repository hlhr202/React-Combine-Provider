import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCounter2 = (initialState = 2) => {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 2);
  const increment = () => setCount(count + 2);
  return { count, decrement, increment };
};

const Counter2 = createContainer(useCounter2);
export default Counter2;
