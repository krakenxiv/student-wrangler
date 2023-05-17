import React, { useEffect, useRef, useState } from 'react';
import classes from './updateStudentForm.module.scss';

interface UpdateStudentFormProps {
  updateStudent: Function;
  previousFirstName: string;
  previousLastName: string;
  previousEmail: string | null;
  previousDateStarted: string;
}

const UpdateStudentForm = (props: UpdateStudentFormProps) => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [dateStartedValue, setDateStartedValue] = useState('');

  const resetValues = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setDateStartedValue('');
  };

  return (
    <div className={classes.studentForm}>
      <div className="input-group mb-3">
        <label className="input-group-text">First Name</label>
        <input
          className="form-control"
          onChange={(event) => {
            setFirstNameValue(event.target.value);
          }}
          value={firstNameValue}
          placeholder={props.previousFirstName}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Last Name</label>
        <input
          className="form-control"
          onChange={(event) => {
            setLastNameValue(event.target.value);
          }}
          value={lastNameValue}
          placeholder={props.previousLastName}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Email</label>
        <input
          className="form-control"
          id="email"
          onChange={(event) => {
            setEmailValue(event.target.value);
          }}
          value={emailValue}
          placeholder={props.previousEmail ? props.previousEmail : ''}
        />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
          onClick={() => {
            props.updateStudent({
              first_name: firstNameValue
                ? firstNameValue
                : props.previousFirstName,
              last_name: lastNameValue ? lastNameValue : props.previousLastName,
              email: emailValue ? emailValue : props.previousEmail,
            });
            resetValues();
          }}
        >
          Update Student
        </button>
      </div>
    </div>
  );
};

export default UpdateStudentForm;
