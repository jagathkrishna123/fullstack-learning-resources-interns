


// Shopping cart total price..........................

import React from "react";

function App() {

  const cart = [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mouse", price: 500, quantity: 2 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
    { id: 4, name: "Monitor", price: 12000, quantity: 1 }
  ];

  const totalAmount = cart.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}

      <h2>Total Amount: ₹{totalAmount}</h2>
    </div>
  );
}

export default App;