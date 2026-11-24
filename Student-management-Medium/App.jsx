
import React, { useState } from "react";
import StudentList from "./StudentList";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("React");

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("All");

  // Add Student
  const addStudent = () => {
    if (name === "" || age === "") {
      alert("Please enter all details");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      age: Number(age),
      course,
    };

    setStudents([...students, newStudent]);

    setName("");
    setAge("");
    setCourse("React");
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Search and Filter
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCourse =
      filterCourse === "All" || student.course === filterCourse;

    return matchesSearch && matchesCourse;
  });

  return (
    <div>
      <h1>Student Management System</h1>

      <h2>Total Students: {students.length}</h2>

      <hr />

      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="Angular">Angular</option>
      </select>

      <br /><br />

      <button onClick={addStudent}>Add Student</button>

      <hr />

      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <select
        value={filterCourse}
        onChange={(e) => setFilterCourse(e.target.value)}
      >
        <option value="All">All Courses</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="Angular">Angular</option>
      </select>

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;
