import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import {
  fetchAllStudents,
  addNewStudent,
  updateStudent,
  deleteStudent,
  updateSortOrder,
  updateOrderByAsc,
} from '../../redux/slices/studentsSlice';
import Modal from '../modal/modal';
import SortBar from '../sortBar/sortBar';
import StudentItem from '../studentItem/studentItem';
import Student from '../../models/student';
import AddStudentForm from '../addStudentForm/addStudentForm';
import UpdateStudentForm from '../updateStudentForm/updateStudentForm';
import classes from './students.module.scss';
// TODO install bootstrap npm OR create custom global css vars
// TODO write basic tests
// TODO stack selects when page is mobile
interface StudentsProps {
  toastHandler: Function;
}

/*
TODO!!!!!
Why isn't add student form resetting?
*/

const Todos = (props: StudentsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<string | null | undefined>('');
  const [previousFirstName, setPreviousFirstName] = useState<string>('');
  const [previousLastName, setPreviousLastName] = useState<string>('');
  const [previousEmail, setPreviousEmail] = useState<string>('');
  const [previousDateStarted, setPreviousDateStarted] = useState<string>('');
  const [previousActive, setPreviousActive] = useState<boolean>(true);
  const [previousPhone1, setPreviousPhone1] = useState<string | undefined>('');
  const [previousPhone2, setPreviousPhone2] = useState<string | undefined>('');
  const [previousPhone1Label, setPreviousPhone1Label] = useState<
    string | undefined
  >('');
  const [previousPhone2Label, setPreviousPhone2Label] = useState<
    string | undefined
  >('');
  const [previousFinancialStatus, setPreviousFinancialStatus] = useState<
    string | undefined
  >('');
  const [previousLessonLength, setPreviousLessonLength] = useState<
    string | undefined
  >('');
  const [previousCurrentRate, setPreviousCurrentRate] = useState<
    string | undefined
  >('');
  const [previousActiveSongs, setPreviousActiveSongs] = useState<
    string | undefined
  >('');
  const [previousAdditionalNotes, setPreviousAdditionalNotes] = useState<
    string | undefined
  >('');

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
    first_name: string,
    last_name: string,
    email: string,
    date_started: string,
    active: boolean,
    phone_1: string,
    phone_2: string,
    phone_1_label: string,
    phone_2_label: string,
    financial_status: string,
    lesson_length: string,
    current_rate: string,
    active_songs: string,
    additional_notes: string
  ) => {
    if (submissionContainsErrors(first_name, last_name, email) === false) {
      let newStudent = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        date_started: date_started,
        active: active,
        phone_1: phone_1,
        phone_2: phone_2,
        phone_1_label: phone_1_label,
        phone_2_label: phone_2_label,
        financial_status: financial_status,
        lesson_length: lesson_length,
        current_rate: current_rate,
        active_songs: active_songs,
        additional_notes: additional_notes,
      };
      dispatch(addNewStudent(newStudent));
    } else {
      return;
    }
  };

  const handleEditStudent = (student: Student) => {
    console.log(student.first_name, student.active);
    setPreviousFirstName(student.first_name);
    setPreviousLastName(student.last_name);
    setPreviousEmail(student.email === undefined ? '' : student.email);
    setPreviousDateStarted(student.date_started);
    setEditId(student.id);
    setPreviousActive(student.active);
    setPreviousPhone1(student.phone_1);
    setPreviousPhone2(student.phone_2);
    setPreviousPhone1Label(student.phone_1_label);
    setPreviousPhone2Label(student.phone_2_label);
    setPreviousFinancialStatus(student.financial_status);
    setPreviousLessonLength(student.lesson_length);
    setPreviousCurrentRate(student.current_rate);
    setPreviousActiveSongs(student.active_songs);
    setPreviousAdditionalNotes(student.additional_notes);
  };

  const handleUpdateStudent = (student: Student) => {
    const emailValue = student.email === undefined ? '' : student.email;
    if (
      submissionContainsErrors(
        student.first_name,
        student.last_name,
        emailValue
      ) === false
    ) {
      let updatedStudent = {
        id: editId,
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email,
        date_started: student.date_started,
        active: student.active,
        phone_1: student.phone_1,
        phone_2: student.phone_2,
        phone_1_label: student.phone_1_label,
        phone_2_label: student.phone_2_label,
        financial_status: student.financial_status,
        lesson_length: student.lesson_length,
        current_rate: student.current_rate,
        active_songs: student.active_songs,
        additional_notes: student.additional_notes,
      };
      dispatch(updateStudent(updatedStudent));
    } else {
      return;
    }
  };

  const handleRemoveStudent = (student: Student) => {
    dispatch(deleteStudent(student));
  };

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
      return false;
    } else {
      // props.toastHandler(firstNameError + ' ' + lastNameError + emailError);
      alert(firstNameError + ' ' + lastNameError + ' ' + emailError);
      return true;
    }
  };

  const sortByHandler = (e: any) => {
    dispatch(updateSortOrder(e.target.value));
  };

  const orderByAscHandler = (e: any) => {
    if (e.target.value === 'asc') {
      dispatch(updateOrderByAsc(true));
    } else {
      dispatch(updateOrderByAsc(false));
    }
  };

  useEffect(() => {
    if (getAllStudentsStatus === 'idle') {
      dispatch(fetchAllStudents());
    }
  }, [getAllStudentsStatus, dispatch]);

  let studentsListDisplay;

  const editForm = (
    <UpdateStudentForm
      updateStudent={(student: Student) => {
        handleUpdateStudent(student);
      }}
      previousFirstName={previousFirstName}
      previousLastName={previousLastName}
      previousEmail={previousEmail}
      previousDateStarted={previousDateStarted}
      previousActive={previousActive}
      previousPhone1={previousPhone1}
      previousPhone2={previousPhone2}
      previousPhone1Label={previousPhone1Label}
      previousPhone2Label={previousPhone2Label}
      previousFinancialStatus={previousFinancialStatus}
      previousLessonLength={previousLessonLength}
      previousCurrentRate={previousCurrentRate}
      previousActiveSongs={previousActiveSongs}
      previousAdditionalNotes={previousAdditionalNotes}
    />
  );

  const addForm = (
    <AddStudentForm
      handleAddNewStudent={(
        first_name: string,
        last_name: string,
        email: string,
        date_started: string,
        active: boolean,
        phone_1: string,
        phone_2: string,
        phone_1_label: string,
        phone_2_label: string,
        financial_status: string,
        lesson_length: string,
        current_rate: string,
        active_songs: string,
        additional_notes: string
      ) => {
        handleAddNewStudent(
          first_name,
          last_name,
          email,
          date_started,
          active,
          phone_1,
          phone_2,
          phone_1_label,
          phone_2_label,
          financial_status,
          lesson_length,
          current_rate,
          active_songs,
          additional_notes
        );
      }}
    />
  );

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
          <StudentItem
            student={student}
            key={student.id}
            editHandler={() => {
              handleEditStudent(student);
            }}
            deleteHandler={() => {
              handleRemoveStudent(student);
            }}
          />
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
        <SortBar
          // @ts-ignore
          handleSortChange={(e: Event) => {
            sortByHandler(e);
          }}
          // @ts-ignore
          handleOrderbyChange={(e: Event) => {
            orderByAscHandler(e);
          }}
        />
        <div className={classes.studentList}>{studentsListDisplay}</div>
        {/* {addForm} */}
        <Modal id="addStudentModal" child={addForm} title="Add New Student" />
        <Modal
          id="updateStudentModal"
          child={editForm}
          title="Update Student"
        />
      </div>
    </>
  );
};

export default Todos;
