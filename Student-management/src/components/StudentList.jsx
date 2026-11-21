function StudentList({ students, deleteStudent, selectStudent }) {

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">

      <h2 className="text-xl font-semibold mb-5">
        Student List
      </h2>

      {students.length === 0 ? (
        <p className="text-gray-500 text-center py-5">
          No students added yet.
        </p>
      ) : (

        <div className="space-y-4">

          {students.map((student) => (

            <div
              key={student.id}
              className="border p-4 rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >

              <div>
                <h3 className="font-semibold text-lg">
                  {student.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {student.email}
                </p>

                <p className="text-gray-600 text-sm">
                  Age: {student.age}
                </p>

                <p className="text-blue-600 text-sm">
                  {student.course}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => selectStudent(student)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteStudent(student.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default StudentList;