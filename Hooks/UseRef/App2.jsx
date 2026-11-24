
import React, { useRef } from "react";

function App() {

  const boxRef = useRef(null);

  const changeColor = () => {
    boxRef.current.style.backgroundColor = "red";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "blue"
        }}
      ></div>

      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default App;







// How this code works (7 simple points)

// 1. useRef(null) creates a variable called boxRef.
// 2. ref={boxRef} connects this variable to the div.
// 3. boxRef.current gives us access to that div.
// 4. When we click the button, the changeColor function runs.
// 5. boxRef.current.style lets us access the div's CSS styles.
// 6. backgroundColor = "red" changes the div's color from blue to red.
// 7. The color changes without re-rendering the component.
// In simple words: useRef helps us directly access an HTML element and make changes to it.