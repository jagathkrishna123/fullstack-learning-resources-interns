// Filter students based on marks................

import React from "react";

function App() {

  const students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Rahul", mark: 35 },
    { id: 3, name: "Anu", mark: 90 },
    { id: 4, name: "John", mark: 40 }
  ];

  const passedStudents = students.filter((student) => {
    return student.mark >= 50;
  });

  return (
    <div>
      <h2>Passed Students</h2>

      {passedStudents.map((student) => (
        <p key={student.id}>
          {student.name} - {student.mark}
        </p>
      ))}
    </div>
  );
}

export default App;