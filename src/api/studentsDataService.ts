import Student from '../models/student';
import axios from 'axios';

const getAllStudents = async () => {
  console.log('getAllStudents');
  const students = await axios.get(
    `${process.env.REACT_APP_CYCLIC_HOST}/students`
  );
  return students;
};

const createStudent = async (student: Student) => {
  return await axios.post(
    `${process.env.REACT_APP_CYCLIC_HOST}/students`,
    student
  );
};

const updateStudent = async (student: Student) => {
  console.log(student);
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
