import { useState } from "react";

function customCounter(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(defaultValue);
  const setValue = (value) => setCount(value);

  return { count, increment, decrement, reset, setValue };
}

export default customCounter;
