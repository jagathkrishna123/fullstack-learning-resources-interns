import React from "react";

function Example2() {

  const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 1500, category: "Fashion" },
    { id: 4, name: "Watch", price: 3000, category: "Accessories" }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}

    </div>
  );
}

export default Example2;