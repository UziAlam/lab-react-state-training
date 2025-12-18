import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={handleDecrement}>Likes</button>
      <button onClick={handleIncrement}>Likes</button>
    </div>
  );
}

export default Counter;
