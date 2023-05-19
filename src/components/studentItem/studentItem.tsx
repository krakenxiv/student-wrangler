import React from 'react';
import classes from './studentItem.module.scss';
import Student from '../../models/student';

interface StudentItemProps {
  editHandler: Function;
  deleteHandler: Function;
  student: Student;
}

const StudentItem = (props: StudentItemProps) => {
  return (
    <div key={props.student.id} className={classes.student}>
      <button
        className={`btn ${
          props.student.active ? 'btn-success' : 'btn-warning'
        } ${classes.iconButton}`}
      >
        <i className="bi bi-person-fill"></i>
      </button>
      <span className={`${classes.studentText} ${classes.studentName}`}>
        {props.student.first_name} {props.student.last_name}
      </span>
      <span className={`${classes.studentText} ${classes.studentEmail}`}>
        {props.student.email}
      </span>
      <span className={`${classes.studentText} ${classes.studentDateStarted}`}>
        {new Date(props.student.date_started).toLocaleDateString()}
      </span>
      <span className={classes.spacer}></span>
      <button
        className={`btn btn-primary ${classes.studentButton}`}
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
        className={`btn btn-primary ${classes.studentButton}`}
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
