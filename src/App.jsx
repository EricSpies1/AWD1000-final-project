import { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', gradYear: 2025 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', gradYear: 2024 },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', gradYear: 2026 },
    { id: 4, firstName: 'Bob', lastName: 'Brown', gradYear: 2023 }
  ]);    
  const [searchTerm, setSearchTerm] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s)));
    setEditingStudent(null);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.gradYear.toString().includes(searchTerm)
  );

  return (
    <div className="container p-4">
      <h1 className="text-center mb-4">Student Manager</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <StudentForm addStudent={addStudent} editingStudent={editingStudent} updateStudent={updateStudent} />
      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        setEditingStudent={setEditingStudent}
      />
    </div>
  );
}

export default App;
