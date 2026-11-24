// (Child Component)
import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        transactions.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>

            <p>Amount: ₹{item.amount}</p>

            <p>Type: {item.type}</p>

            <button onClick={() => deleteTransaction(item.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;
