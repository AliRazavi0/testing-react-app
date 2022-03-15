import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const clear = setTimeout(() => {
      setCount(count + 1);
    }, 5000);

    return () => {
      clearInterval(clear);
    };
  }, []);
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
