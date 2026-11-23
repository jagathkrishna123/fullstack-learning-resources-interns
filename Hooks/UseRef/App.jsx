import React, { useRef } from "react";

function App() {

  const name = useRef("Jagath");

  return (
    <div>
      <h1>{name.current}</h1>
    </div>
  );
}

export default App;