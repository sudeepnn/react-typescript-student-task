import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const getStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createStudent = async (student: any) => {
  const response = await axios.post(API_URL, student);
  return response.data;
};