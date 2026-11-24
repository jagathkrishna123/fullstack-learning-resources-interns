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




// How this code works (5 points)
// 1. useRef("Jagath") creates a ref object and stores "Jagath" as its initial value.

// 2. name is the variable that holds the ref object.

// 3. name.current is used to access the stored value ("Jagath").

// 4. {name.current} displays the value inside the <h1> tag.

// 5. When the component renders, the output will be Jagath.

// Important: useRef stores values without causing a re-render (updates the UI) when .current changes.