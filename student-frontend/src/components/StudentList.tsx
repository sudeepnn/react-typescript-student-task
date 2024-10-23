import React, { Key, useEffect, useState } from 'react';
import { getStudents } from '../services/studentService';

type Student={
    id: Key | null | undefined;
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    phoneNumber: number,
    address: string,
    course: string,
    enrollmentDate: Date,
    isActive: boolean,
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response);
  };

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;