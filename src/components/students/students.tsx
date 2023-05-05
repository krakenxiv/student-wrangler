import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import {
  fetchAllStudents,
  addNewStudent,
  updateStudent,
  deleteStudent,
  //   updateSortOrder,
  //   updateOrderByAsc,
} from '../../redux/slices/studentsSlice';
// import Modal from '../modal/modal';
import Student from '../../models/student';
import AddStudentForm from '../addStudentForm/addStudentForm';
import UpdateStudentForm from '../updateStudentForm/updateStudentForm';
// import Header from '../header/header';
import classes from './students.module.scss';
// TODO install bootstrap npm OR create custom global css vars
// TODO write basic tests
// TODO stack selects when page is mobile
interface StudentsProps {
  toastHandler: Function;
}

const Todos = (props: StudentsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<string | null | undefined>('');
  const [previousFirstName, setPreviousFirstName] = useState<string>('');
  const [previousLastName, setPreviousLastName] = useState<string>('');
  const [previousEmail, setPreviousEmail] = useState<string | null>(null);
  const [previousDateStarted, setPreviousDateStarted] = useState<string>('');

  let firstNameError = '';
  let lastNameError = '';
  let emailError = '';

  const studentsList = useSelector((state: any) => {
    if (state && state.students && state.students.students) {
      return state.students.students;
    } else {
      return null;
    }
  });

  const getAllStudentsStatus = useSelector((state: any) => {
    return state.students.getAllStudentsStatus;
  });

  const studentsError = useSelector((state: any) => {
    return state.students.error;
  });

  const handleAddNewStudent = (
    firstName: string,
    lastName: string,
    email: string
  ) => {
    console.log('handleAddNewStudent', firstName, lastName, email);
    if (submissionContainsErrors(firstName, lastName, email) === false) {
      let newStudent = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        date_started: '2020-02-12 009:45:11',
      };
      dispatch(addNewStudent(newStudent));
    } else {
      return;
    }
  };

  const resetValues = () => {
    setPreviousFirstName('');
    setPreviousLastName('');
    setPreviousEmail('');
    setPreviousDateStarted('');
  };

  const handleEditStudent = (student: Student) => {
    setPreviousFirstName(student.first_name);
    setPreviousLastName(student.last_name);
    setPreviousEmail(student.email);
    setPreviousDateStarted(student.date_started);
    setEditId(student.id);
  };

  const handleUpdateStudent = (
    first_name: string,
    last_name: string,
    email: string | null,
    date_started: string
  ) => {
    console.log('handleUpdateStudent ' + first_name);
    if (submissionContainsErrors(first_name, last_name, email) === false) {
      let updatedStudent = {
        id: editId,
        first_name: first_name,
        last_name: last_name,
        email: email,
        date_started: '2022-03-12 10:45:11',
      };
      dispatch(updateStudent(updatedStudent));
    } else {
      return;
    }
  };

  const handleRemoveStudent = (student: Student) => {
    dispatch(deleteStudent(student));
  };

  //   const orderBy = useSelector((state: any) => {
  //     return state.todos.orderByAsc;
  //   });

  const submissionContainsErrors = (
    first_name: string,
    last_name: string,
    email: string | null
  ) => {
    if (first_name === '') {
      firstNameError += `First Name cannot be blank.\n`;
    }
    if (last_name === '') {
      lastNameError += `Last Name cannot be blank.\n`;
    }
    if (first_name.length > 50) {
      firstNameError += `First Name cannot be more than 50 characters.`;
    }
    if (last_name.length > 50) {
      lastNameError += `Last Name cannot be more than 50 characters.`;
    }
    if (email !== null && email.length > 150) {
      emailError += `Email cannot be more than 150 characters.`;
    }
    if (firstNameError === '' && lastNameError === '' && emailError === '') {
      console.log('no errors');
      return false;
    } else {
      // props.toastHandler(firstNameError + ' ' + lastNameError + emailError);
      alert(firstNameError + ' ' + lastNameError + ' ' + emailError);
      return true;
    }
  };

  useEffect(() => {
    if (getAllStudentsStatus === 'idle') {
      dispatch(fetchAllStudents());
    }
  }, [getAllStudentsStatus, dispatch]);

  let studentsListDisplay;

  if (getAllStudentsStatus === 'loading') {
    studentsListDisplay = (
      <div className={classes.loader}>
        <div className="spinner-grow text-primary" role="status">
          Loading
        </div>
      </div>
    );
  } else if (getAllStudentsStatus === 'succeeded') {
    studentsListDisplay = studentsList.map((student: Student) => {
      if (student && student.id) {
        return (
          <div key={student.id}>
            {student.first_name} {student.last_name} {student.email}{' '}
            {student.date_started}{' '}
            <button
              onClick={() => {
                handleEditStudent(student);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleRemoveStudent(student);
              }}
            >
              Delete
            </button>
          </div>
          //   <TodoItem
          //     todo={todo}
          //     editHandler={() => handleEditTodo(todo)}
          //     deleteHandler={() => handleRemoveTodo(todo)}
          //     checkHandler={() => {
          //       handleCheckTodo(todo);
          //     }}
          //     key={todo.id}
          //   />
        );
      } else {
        return null;
      }
    });
  } else if (getAllStudentsStatus === 'failed') {
    studentsListDisplay = <div>{studentsError}</div>;
  }

  return (
    <>
      <div className={classes.studentContainer}>
        {/* <Header
          handleSortChange={(e: Event) => {
            sortByHandler(e);
          }}
          handleOrderbyChange={(e: Event) => {
            orderByAscHandler(e);
          }}
        /> */}
        <h1>Students</h1>{' '}
        <div className={classes.studentList}>{studentsListDisplay}</div>
        <hr />
        <AddStudentForm
          handleAddNewStudent={(
            first_name: string,
            last_name: string,
            email: string
          ) => {
            handleAddNewStudent(first_name, last_name, email);
          }}
        />
        <hr />
        <UpdateStudentForm
          previousFirstName={previousFirstName}
          previousLastName={previousLastName}
          previousEmail={previousEmail}
          previousDateStarted={previousDateStarted}
          handleUpdateStudent={(
            first_name: string,
            last_name: string,
            email: string | null,
            date_started: string
          ) => {
            handleUpdateStudent(first_name, last_name, email, date_started);
          }}
        />
      </div>
    </>
  );
};

export default Todos;
