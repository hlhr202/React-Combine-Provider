import { useState } from 'react';
import createUseContext from "constate";

const useCounter2 = ({initialState = 2} = {}) => {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 2);
  const increment = () => setCount(count + 2);
  return { count, decrement, increment };
};

const useCounter2Context = createUseContext(useCounter2);
export default useCounter2Context;
