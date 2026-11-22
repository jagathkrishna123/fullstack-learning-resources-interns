


// Find the total of even numbers...................

import React from "react";

function App() {

  const numbers = [10, 15, 20, 25, 30, 35];

  const total = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }

    return acc;
  }, 0);

  return (
    <div>
      <h2>Total of Even Numbers: {total}</h2>
    </div>
  );
}

export default App;