import React, { memo } from 'react';
import { formatPhoneNumber } from '../../utilities/utilities';
import classes from './studentItem.module.scss';
import Student from '../../models/student';
import { useState } from 'react';

interface StudentItemProps {
  editHandler: Function;
  deleteHandler: Function;
  udpateCurrentStudent: Function;
  student: Student;
}

const StudentItem = (props: StudentItemProps) => {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div key={props.student.id} className={classes.student}>
      {/* GRID STUDENT INFO */}
      <div className={classes.studentInfo}>
        {/* STUDENT VIEW BUTTON */}
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
        {/* STUDENT NAME */}
        <span className={`${classes.studentName}`}>
          {props.student.first_name} {props.student.last_name}
        </span>
      </div>
      {/* GRID PHONE NUMBERS */}
      <div className={classes.phoneNumbers}>
        {/* STUDENT PHONE 1 */}
        {props.student.phone_1 ? (
          <a
            className={`btn ${classes.phoneButton}`}
            href={`tel:${props.student.phone_1}`}
            target="_blank"
          >
            {formatPhoneNumber(props.student.phone_1)}
          </a>
        ) : null}
        {/* STUDENT PHONE 2*/}
        {props.student.phone_2 ? (
          <a
            className={`btn ${classes.phoneButton}`}
            href={`tel:${props.student.phone_2}`}
            target="_blank"
          >
            {formatPhoneNumber(props.student.phone_2)}
          </a>
        ) : null}
      </div>
      {/* GRID EDITOR */}
      <div className={classes.studentEditor}>
        <div
          className={`${classes.editor} ${
            showEditor ? classes.editorIn : classes.editorOut
          }`}
        >
          <button
            className={`btn ${classes.studentButton} ${classes.editButton}`}
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
      </div>
      {/* GRID EDITOR BUTTON*/}
      <div
        className={classes.showEditorButton}
        onClick={() => {
          setShowEditor(!showEditor);
        }}
      >
        <i className="bi bi-pencil-fill"></i>
      </div>
    </div>
  );
};

export default memo(StudentItem);
