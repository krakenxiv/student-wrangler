import React from 'react';
import { formatDate, formatPhoneNumber } from '../../utilities/utilities';
import classes from './studentItem.module.scss';
import Student from '../../models/student';

interface StudentItemProps {
  editHandler: Function;
  deleteHandler: Function;
  udpateCurrentStudent: Function;
  student: Student;
}

const StudentItem = (props: StudentItemProps) => {
  return (
    <div key={props.student.id} className={classes.student}>
      <button
        className={`btn ${
          props.student.active ? classes.activeButton : classes.inactiveButton
        } ${classes.iconButton}`}
        data-bs-toggle="modal"
        data-bs-target="#viewStudentModal"
        onClick={() => {
          props.udpateCurrentStudent();
        }}
      >
        <i className="bi bi-person-fill"></i>
      </button>
      <span className={`${classes.studentText} ${classes.studentName}`}>
        {props.student.first_name} {props.student.last_name}
      </span>
      {props.student.phone_1 ? (
        <span className={`${classes.studentText} ${classes.studentPhone}`}>
          <a
            className={`btn ${classes.editButton}`}
            href={`tel:${props.student.phone_1}`}
            target="_blank"
          >
            {formatPhoneNumber(props.student.phone_1)}
          </a>
        </span>
      ) : null}
      {props.student.phone_2 ? (
        <span className={`${classes.studentText} ${classes.studentPhone}`}>
          <a
            className={`btn ${classes.editButton}`}
            href={`tel:${props.student.phone_2}`}
            target="_blank"
          >
            {formatPhoneNumber(props.student.phone_2)}
          </a>
        </span>
      ) : null}
      <span className={classes.spacer}></span>
      <button
        className={`btn  ${classes.studentButton} ${classes.editButton}`}
        data-bs-toggle="modal"
        data-bs-target="#updateStudentModal"
        onClick={() => {
          props.editHandler();
        }}
      >
        <span>Edit</span>
        <i className="bi bi-pencil-fill"></i>
      </button>
      <button
        className={`btn  ${classes.studentButton}  ${classes.deleteButton}`}
        onClick={() => {
          props.deleteHandler();
        }}
      >
        <span>Delete</span>
        <i className="bi bi-trash-fill"></i>
      </button>
    </div>
  );
};

export default StudentItem;
