import React from "react";

function Exmaple1() {

  const students = [
    { id: 1, name: "John", age: 22 },
    { id: 2, name: "David", age: 23 },
    { id: 3, name: "Alex", age: 21 }
  ];

  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
        </div>
      ))}

    </div>
  );
}

export default Exmaple1;