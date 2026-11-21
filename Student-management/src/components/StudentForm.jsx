import { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, selectedStudent }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: ""
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.email || !student.age || !student.course) {
      alert("Please fill all fields");
      return;
    }

    if (selectedStudent) {
      editStudent(student);
    } else {
      addStudent({
        ...student,
        id: Date.now()
      });
    }

    setStudent({
      name: "",
      email: "",
      age: "",
      course: ""
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">

      <h2 className="text-xl font-semibold mb-5">
        {selectedStudent ? "Edit Student" : "Add Student"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={student.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />

        <select
          name="course"
          value={student.course}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        >
          <option value="">Select Course</option>
          <option value="MERN Stack">MERN Stack</option>
          <option value="React JS">React JS</option>
          <option value="Node JS">Node JS</option>
          <option value="Python">Python</option>
          <option value="Angular">Angular</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
        >
          {selectedStudent ? "Update Student" : "Add Student"}
        </button>

      </form>
    </div>
  );
}

export default StudentForm;