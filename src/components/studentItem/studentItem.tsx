import React, { useRef, useState } from 'react';
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
      {props.student.first_name} {props.student.last_name} {props.student.email}
      {props.student.date_started}{' '}
      <button
        className={`btn btn-primary ${classes.studentButton}`}
        data-bs-toggle="modal"
        data-bs-target="#studentModal"
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
