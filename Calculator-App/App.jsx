
import React, { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>Addition (+)</button>
      <button onClick={subtract}>Subtraction (-)</button>
      <button onClick={multiply}>Multiplication (*)</button>
      <button onClick={divide}>Division (/)</button>

      <h3>Result: {result}</h3>

      <button onClick={() => {
        setNum1("");
        setNum2("");
        setResult("");
      }}>
        Clear
      </button>

    </div>
  );
}

export default App;
