
import React from "react";

function StudentList({ students, deleteStudent }) {
  return (
    <div>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>

            <p>Age: {student.age}</p>

            <p>Course: {student.course}</p>

            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;
