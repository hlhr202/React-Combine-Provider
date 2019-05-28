import { useState } from 'react';
import createUseContext from "constate";

const useCounter1 = ({initialState = 1} = {}) => {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
};

const useCounter1Context = createUseContext(useCounter1);
export default useCounter1Context;
