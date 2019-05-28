import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCounter1 = (initialState = 1) => {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
};

const Counter1 = createContainer(useCounter1);
export default Counter1;
