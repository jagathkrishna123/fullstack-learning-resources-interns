

// Filter names starting with "A" ..........................

import React from "react";

function App() {

  const names = ["Arun", "Rahul", "Anu", "John", "Alex"];

  const result = names.filter((name) => {
    return name.startsWith("A");
  });

  return (
    <div>
      <h2>Names starting with A</h2>

      {result.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default App;