
// (Parent Component)
import React, { useState } from "react";
import TransactionList from "./TransactionList";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const [transactions, setTransactions] = useState([]);

  // Add Transaction
  const addTransaction = () => {
    if (title === "" || amount === "" || Number(amount) <= 0) {
      alert("Please enter valid details");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
    };

    setTransactions([...transactions, newTransaction]);

    setTitle("");
    setAmount("");
  };

  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  };

  // Calculate Income
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  // Calculate Expense
  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  // Calculate Balance
  const balance = income - expense;

  return (
    <div>
      <h1>Income & Expense Tracker</h1>

      <h2>Balance: ₹{balance}</h2>

      <h3>Total Income: ₹{income}</h3>
      <h3>Total Expense: ₹{expense}</h3>

      <hr />

      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button onClick={addTransaction}>Add</button>

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
