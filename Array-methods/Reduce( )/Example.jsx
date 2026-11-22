

// Find the sum of numbers.................

import React from "react";

function App() {

  const numbers = [10, 20, 30, 40, 50];

  const total = numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return (
    <div>
      <h2>Total: {total}</h2>
    </div>
  );
}

export default App;