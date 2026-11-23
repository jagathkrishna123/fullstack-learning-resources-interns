
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
