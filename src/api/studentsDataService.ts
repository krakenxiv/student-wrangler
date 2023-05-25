import Student from '../models/student';
import axios from 'axios';

const getAllStudents = async () => {
  const students = await axios.get(
    `${process.env.REACT_APP_CYCLIC_HOST}/students`
  );
  return students;
};

const createStudent = async (student: Student) => {
  console.log(student);
  try {
    return await axios.post(
      `${process.env.REACT_APP_CYCLIC_HOST}/students`,
      student
    );
  } catch (error: any) {
    console.log(error.response.data);
    throw new Error('Unable to establish a login session.');
  }
};

const updateStudent = async (student: Student) => {
  return await axios.put(
    `${process.env.REACT_APP_CYCLIC_HOST}/students`,
    student
  );
};

const deleteStudent = async (student: Student) => {
  return await axios.delete(
    `${process.env.REACT_APP_CYCLIC_HOST}/students/${student.id}`
  );
};

const StudentsDataService = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};

export default StudentsDataService;
