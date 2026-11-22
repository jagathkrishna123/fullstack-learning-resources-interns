import React from "react";

function Example3() {

  const employees = [
    { id: 1, name: "Arun", role: "Developer", salary: 30000 },
    { id: 2, name: "Rahul", role: "Designer", salary: 25000 },
    { id: 3, name: "Anu", role: "Tester", salary: 28000 }
  ];

  return (
    <div>
      <h2>Employee Details</h2>

      {employees.map((emp) => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>Role: {emp.role}</p>
          <p>Salary: ₹{emp.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default Example3;