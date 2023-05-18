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
      <span className={classes.studentText}>
        {props.student.first_name} {props.student.last_name}
      </span>
      <span className={classes.studentText}>{props.student.email}</span>
      <span className={classes.studentText}>
        {props.student.date_started.toString()}
      </span>
      <button
        className={`btn btn-primary ${classes.studentButton}`}
        data-bs-toggle="modal"
        data-bs-target="#updateStudentModal"
        onClick={() => {
          props.editHandler();
        }}
      >
        Edit
      </button>
      <button
        className={`btn btn-primary ${classes.studentButton}`}
        onClick={() => {
          props.deleteHandler();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default StudentItem;
