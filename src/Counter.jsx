import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>

      <button className="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
