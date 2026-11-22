
// Random Quote Generator using React, useState and useEffect................................
// Random Quote Generator

import React, { useState, useEffect } from "react";

function App() {

  const quotes = [
    {
      id: 1,
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      id: 2,
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    },
    {
      id: 3,
      text: "Great things take time.",
      author: "Anonymous"
    },
    {
      id: 4,
      text: "Never stop learning.",
      author: "Anonymous"
    },
    {
      id: 5,
      text: "Success is the sum of small efforts.",
      author: "Robert Collier"
    }
  ];

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    console.log("Quote changed:", quote.text);
  }, [quote]);

  const generateQuote = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    setQuote(quotes[randomIndex]);

  };

  return (
    <div>

      <h2>Random Quote Generator</h2>

      <h3>"{quote.text}"</h3>

      <p> - {quote.author}</p>

      <button onClick={generateQuote}>
        Generate New Quote
      </button>

    </div>
  );
}

export default App;




// how it works..................

// We store multiple quotes in an array of objects.

// useState stores the currently displayed quote.

// Initially, the first quote is displayed.

// When we click the button, generateQuote() function runs.

// Math.random() and Math.floor() generate a random array index.

// setQuote() updates the quote using that random index.

// React updates the UI and displays the new quote.