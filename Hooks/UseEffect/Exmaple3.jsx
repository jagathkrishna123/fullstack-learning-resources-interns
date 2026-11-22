
// Here's a simple Timer App using React, useState, useEffect and setInterval................


import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };

  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <h2>Timer App</h2>

      <h1>{count} Seconds</h1>

      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>

      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>

    </div>
  );
}

export default App;



// How it works
// 1. count stores the timer value.
// 2. isRunning checks whether the timer is running.
// 3. When Start is clicked, isRunning becomes true.
// 4. useEffect detects the change and starts setInterval.
// 5. Every second, count increases by 1.
// 6. When Stop is clicked, isRunning becomes false.
// 7. Cleanup function clears the interval.