import { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { stripPhoneNumber } from '../../utilities/utilities';
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
import StudentView from '../studentView/studentView';
import Student from '../../models/student';
import AddStudentForm from '../addStudentForm/addStudentForm';
import UpdateStudentForm from '../updateStudentForm/updateStudentForm';
import Spinner from '../../components/spinner/spinner';
import classes from './students.module.scss';
import { submissionContainsErrors } from '../../utilities/utilities';

// TODO install bootstrap npm OR create custom global css vars
// TODO write basic tests
// TODO stack selects when page is mobile
interface StudentsProps {
  toastHandler: Function;
}

const Students = (props: StudentsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<string | null | undefined>('');
  // current student is the current student being displayed
  // not to be confused with the students 'active' setting
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
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

  const [resetUpdateForm, setResetUpdateForm] = useState(0);

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

  const handleAddNewStudent = (student: Student) => {
    const emailValue = student.email === undefined ? '' : student.email;
    const updatedStudent = {
      ...student,
      phone_1: stripPhoneNumber(student.phone_1),
      phone_2: stripPhoneNumber(student.phone_2),
      phone_1_label:
        student.phone_1_label !== '' ? student.phone_1_label : 'Phone 1 Label',
      phone_2_label:
        student.phone_2_label !== '' ? student.phone_2_label : 'Phone 2 Label',
    };
    if (
      submissionContainsErrors(
        student.first_name,
        student.last_name,
        emailValue
      ) === false
    ) {
      dispatch(addNewStudent(updatedStudent));
    } else {
      return;
    }
  };

  const handleEditStudent = (student: Student) => {
    console.log('handleEditStudent');
    console.log(student);
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
        ...student,
        id: editId,
        phone_1: stripPhoneNumber(student.phone_1),
        phone_2: stripPhoneNumber(student.phone_2),
      };
      dispatch(updateStudent(updatedStudent));
    } else {
      return;
    }
  };

  const handleRemoveStudent = (student: Student) => {
    dispatch(deleteStudent(student));
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

  if (getAllStudentsStatus === 'loading') {
    studentsListDisplay = (
      <div className={classes.loader}>
        <Spinner />
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
            udpateCurrentStudent={() => {
              setCurrentStudent(student);
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

  // this allows this parent component to reset the Update Student form when a user
  // clicks the modal close from this component... a little clunk
  const updateStudentCloseHandler = () => {
    setResetUpdateForm(resetUpdateForm + 1);
  };

  return (
    <>
      <div className={classes.studentContainer}>
        <SortBar
          handleSortChange={(e: Event) => {
            sortByHandler(e);
          }}
          handleOrderbyChange={(e: Event) => {
            orderByAscHandler(e);
          }}
        />
        {process.env.NODE_ENV === 'development' ? (
          <div className={classes.todos}>
            <b>TODOS!</b>
            <ul>
              <li>Add Photo Upload?</li>
            </ul>
          </div>
        ) : null}
        <div className={classes.studentList}>{studentsListDisplay}</div>
        <Modal
          id="viewStudentModal"
          title="View Student Information"
          closeHandler={() => {}}
        >
          <StudentView student={currentStudent} />
        </Modal>
        <Modal
          id="addStudentModal"
          title="Add New Student"
          closeHandler={() => {}}
        >
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
              handleAddNewStudent({
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
                additional_notes,
              });
            }}
          />
        </Modal>
        <Modal
          id="updateStudentModal"
          title="Update Student"
          closeHandler={updateStudentCloseHandler}
        >
          <UpdateStudentForm
            updateStudent={(student: Student) => {
              handleUpdateStudent(student);
            }}
            resetUpdateForm={resetUpdateForm}
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
        </Modal>
      </div>
    </>
  );
};

export default memo(Students);
