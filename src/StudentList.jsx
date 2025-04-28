import { FaEdit, FaTrash } from 'react-icons/fa';

function StudentList({ students, deleteStudent, setEditingStudent }) {
  return (
    <div>
      {students.length === 0 ? (
        <p className="text-center">No students found.</p>
      ) : (
        <ul className="list-group">
          {students.map((student) => (
            <li
              key={student.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {student.firstName} {student.lastName} - {student.gradYear}
              <div>
                <button
                  onClick={() => setEditingStudent(student)}
                  className="btn btn-sm btn-warning me-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="btn btn-sm btn-danger"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
