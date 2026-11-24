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




// How this code works (7 simple points)
// 1. useRef(null) creates a variable called nameRef.

// 2. ref={nameRef} connects the variable to the input field.

// 3. When the user types something, the input stores that text.

// 4. When we click the Submit button, the handleSubmit function runs.

// 5. nameRef.current gives us access to the input field.

// 6. .value gets the text entered by the user.

// 7. console.log() displays the entered name in the browser console.

// In simple words: useRef helps us get the value from an input field without using useState.