

// Filter numbers greater than 50............................

import React from "react";

function App() {

  const numbers = [10, 20, 50, 60, 70, 90];

  const result = numbers.filter((num) => {
    return num > 50;
  });

  return (
    <div>
      <h2>Numbers greater than 50</h2>

      {result.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
    </div>
  );
}

export default App;