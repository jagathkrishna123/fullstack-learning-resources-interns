

// Filter employees based on department.........................

import React from "react";

function App() {

  const employees = [
    { id: 1, name: "Arun", department: "Developer" },
    { id: 2, name: "Rahul", department: "Designer" },
    { id: 3, name: "Anu", department: "Developer" },
    { id: 4, name: "John", department: "Tester" }
  ];

  const developers = employees.filter((emp) => {
    return emp.department === "Developer";
  });

  return (
    <div>
      <h2>Developers</h2>

      {developers.map((emp) => (
        <p key={emp.id}>{emp.name}</p>
      ))}
    </div>
  );
}

export default App;