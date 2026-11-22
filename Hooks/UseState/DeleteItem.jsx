

// Delete Items from an Array.....................

import React, { useState } from "react";

function App() {

  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Orange",
    "Banana"
  ]);

  const deleteFruit = (index) => {
    const updatedFruits = fruits.filter((fruit, i) => i !== index);

    setFruits(updatedFruits);
  };

  return (
    <div>
      <h2>Fruits List</h2>

      {fruits.map((fruit, index) => (
        <div key={index}>
          <span>{fruit}</span>

          <button onClick={() => deleteFruit(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;