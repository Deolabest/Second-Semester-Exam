import React from "react";
import customCounter from "./customCounter";

function Counter() {
  const { count, increment, decrement, reset, setValue } = customCounter();

  return (
    <div className="counter">
      <h1>Custom Counter</h1>
      <p>Count: {count}</p>
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
