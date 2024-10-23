import React, { useState } from 'react';
import { createStudent } from '../services/studentService';
import '../components/stylles.css'
// Define a TypeScript interface for Student
interface Student {
  firstName: string;
  lastName: string;
  email: string;
  age: string; // Use 'number' if you want to handle it as a number
  phoneNumber: string;
  address: string;
  course: string;
  enrollmentDate: string; // Use 'Date' type if needed
  isActive: boolean;
}

const StudentForm: React.FC = () => {
  const [student, setStudent] = useState<Student>({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    phoneNumber: '',
    address: '',
    course: '',
    enrollmentDate: '',
    isActive: true,
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      await createStudent(student);
      // Optionally reset the form after successful submission
      setStudent({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        phoneNumber: '',
        address: '',
        course: '',
        enrollmentDate: '',
        isActive: true,
      });
    } catch (err) {
      setError('Failed to create student. Please try again.');
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
      <input
        type="text"
        placeholder="First Name"
        value={student.firstName}
        onChange={e => setStudent({ ...student, firstName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={student.lastName}
        onChange={e => setStudent({ ...student, lastName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={student.email}
        onChange={e => setStudent({ ...student, email: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={student.age}
        onChange={e => setStudent({ ...student, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={student.phoneNumber}
        onChange={e => setStudent({ ...student, phoneNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={student.address}
        onChange={e => setStudent({ ...student, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Course"
        value={student.course}
        onChange={e => setStudent({ ...student, course: e.target.value })}
      />
      <input
        type="date"
        placeholder="Enrollment Date"
        value={student.enrollmentDate}
        onChange={e => setStudent({ ...student, enrollmentDate: e.target.value })}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
