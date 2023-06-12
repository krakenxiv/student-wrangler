import React, { useRef, useState } from 'react';
import { formatPhoneNumber } from '../../utilities/utilities';
import Student from '../../models/student';
import classes from './studentView.module.scss';
import avatar from '../../assets/images/avatarIcon.png';

interface StudentViewProps {
  student: Student | null;
}

const StudentView = (props: StudentViewProps) => {
  return (
    <div className={classes.studentView}>
      {props.student ? (
        <div>
          <img
            src={avatar}
            alt={`${props.student.first_name} ${props.student.last_name} Avatar`}
          />
          <h1
            className={`${
              props.student.active ? 'text-success' : 'text-warning'
            }`}
          >
            {props.student.first_name} {props.student.last_name}{' '}
          </h1>
          <h5>Personal Information</h5>
          {props.student.email ? <>Email: {props.student.email}</> : null}
          {props.student.phone_1 ? (
            <div>
              {props.student.phone_1_label}:&nbsp;
              {formatPhoneNumber(props.student.phone_1)}
            </div>
          ) : null}
          {props.student.phone_2 ? (
            <div>
              {props.student.phone_2_label}:&nbsp;
              {formatPhoneNumber(props.student.phone_2)}
            </div>
          ) : null}
          <h5>Student Satus</h5>
          {props.student.financial_status ? (
            <div>Financial Status: {props.student.financial_status}</div>
          ) : null}
          {props.student.lesson_length ? (
            <div>Lesson Length: {props.student.lesson_length}</div>
          ) : null}
          {props.student.current_rate ? (
            <div>Current Rate:{props.student.current_rate}</div>
          ) : null}

          <h5>Additional Information</h5>
          {props.student.active_songs ? (
            <div>Ative Songs: {props.student.active_songs}</div>
          ) : null}
          {props.student.additional_notes ? (
            <div>Additional Notes: {props.student.additional_notes}</div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default StudentView;
