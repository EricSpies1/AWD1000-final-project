import { useState, useEffect } from 'react';

function StudentForm({ addStudent, editingStudent, updateStudent }) {
  const [student, setStudent] = useState({ firstName: '', lastName: '', gradYear: '' });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    } else {
      setStudent({ firstName: '', lastName: '', gradYear: '' });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }
    setStudent({ firstName: '', lastName: '', gradYear: '' });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row mb-2">
        <div className="col">
          <input
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>
        <div className="col">
          <input
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="col">
          <input
            name="gradYear"
            value={student.gradYear}
            onChange={handleChange}
            className="form-control"
            placeholder="Graduation Year"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        {editingStudent ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
}

export default StudentForm;
