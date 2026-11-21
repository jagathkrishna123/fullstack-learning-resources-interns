import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  // Add Student
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Select Student for Editing
  const selectStudent = (student) => {
    setSelectedStudent(student);
  };

  // Update Student
  const editStudent = (updatedStudent) => {

    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setSelectedStudent(null);
  };

  return (

    <div className="min-h-screen bg-gray-100 p-5 md:p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Student Management
        </h1>

        <p className="text-gray-500 mb-8">
          Manage your students easily
        </p>

        {/* Total Students */}

        <div className="bg-blue-600 text-white p-5 rounded-lg mb-8">

          <h2 className="text-lg">
            Total Students
          </h2>

          <p className="text-3xl font-bold">
            {students.length}
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Student Form */}

          <StudentForm
            addStudent={addStudent}
            editStudent={editStudent}
            selectedStudent={selectedStudent}
          />

          {/* Student List */}

          <StudentList
            students={students}
            deleteStudent={deleteStudent}
            selectStudent={selectStudent}
          />

        </div>

      </div>

    </div>
  );
}

export default App;