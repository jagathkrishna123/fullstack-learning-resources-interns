import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;


// What happens?
// - Component renders for the first time.
// - useEffect executes.
// - Click the button multiple times.
// - Component renders again, but this effect doesn't execute again.