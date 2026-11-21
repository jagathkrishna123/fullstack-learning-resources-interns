import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  // Increase
  const increase = () => {
    setCount(count + 1);
  };

  // Decrease
  const decrease = () => {
    setCount(count - 1);
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div>

      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>

      <button onClick={reset}>Reset</button>

    </div>
  );
}

export default App;