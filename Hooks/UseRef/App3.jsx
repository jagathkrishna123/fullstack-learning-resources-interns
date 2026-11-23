import React, { useRef } from "react";

function App() {

  const nameRef = useRef(null);

  const handleSubmit = () => {
    console.log(nameRef.current.value);
  };

  return (
    <div>
      <input ref={nameRef} type="text" placeholder="Enter your name" />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;