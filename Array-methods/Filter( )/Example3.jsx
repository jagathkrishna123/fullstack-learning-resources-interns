

//  Filter products based on price.....................

import React from "react";

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 }
  ];

  const result = products.filter((product) => {
    return product.price < 5000;
  });

  return (
    <div>
      <h2>Products under ₹5000</h2>

      {result.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}
    </div>
  );
}

export default App;