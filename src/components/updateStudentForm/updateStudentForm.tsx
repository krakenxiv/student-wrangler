import React, { useRef, useState } from 'react';
import classes from './updateStudentForm.module.scss';

interface UpdateStudentFormProps {
  updateStudent: Function;
  previousFirstName: string;
  previousLastName: string;
  previousEmail: string | null;
  previousDateStarted: string;
}

const UpdateStudentForm = (props: UpdateStudentFormProps) => {
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [dateStartedValue, setDateStartedValue] = useState('');
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [dateStartedFocus, setDateStartedFocus] = useState(false);

  const handleFirstNameChange = (event: any) => {
    setFirstNameValue(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastNameValue(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmailValue(event.target.value);
  };

  const checkPreviousFirstName = () => {
    if (firstNameFocus && firstNameValue === '') {
      return firstNameValue;
    } else if (props.previousFirstName !== '' && firstNameValue === '') {
      return props.previousFirstName;
    } else {
      return firstNameValue;
    }
    return '';
  };

  const checkPreviousLastName = () => {
    if (lastNameFocus && lastNameValue === '') {
      return lastNameValue;
    } else if (props.previousLastName !== '' && lastNameValue === '') {
      return props.previousLastName;
    } else {
      return lastNameValue;
    }
    return '';
  };

  const checkPreviousEmail = () => {
    if (emailFocus && emailValue === '') {
      return emailValue;
    } else if (props.previousEmail !== '' && emailValue === '') {
      return props.previousEmail;
    } else {
      return emailValue;
    }
    return '';
  };

  const checkDateStarted = () => {
    if (dateStartedFocus && dateStartedValue === '') {
      return dateStartedValue;
    } else if (props.previousDateStarted !== '' && dateStartedValue === '') {
      return props.previousDateStarted;
    } else {
      return dateStartedValue;
    }
    return '';
  };

  const resetValues = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setDateStartedValue('');
    setFirstNameFocus(false);
    setLastNameFocus(false);
    setEmailFocus(false);
    setDateStartedFocus(false);
  };

  return (
    <div className={classes.studentForm}>
      <h2>Update Student</h2>
      <div className="input-group mb-3">
        <label className="input-group-text">First Name</label>
        <input
          className="form-control"
          id="Name"
          ref={firstNameInputRef}
          onFocus={() => {
            setFirstNameFocus(true);
            setLastNameFocus(false);
            setEmailFocus(false);
          }}
          onChange={handleFirstNameChange}
          value={checkPreviousFirstName()}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Last Name</label>
        <input
          className="form-control"
          id="Name"
          ref={lastNameInputRef}
          onFocus={() => {
            setFirstNameFocus(false);
            setLastNameFocus(true);
            setEmailFocus(false);
          }}
          onChange={handleLastNameChange}
          value={checkPreviousLastName()}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Email</label>
        <input
          className="form-control"
          id="Name"
          ref={emailInputRef}
          onFocus={() => {
            setFirstNameFocus(false);
            setLastNameFocus(false);
            setEmailFocus(true);
          }}
          onChange={handleEmailChange}
          // value={checkPreviousEmail()}
        />
      </div>
      <div>
        <button
          onClick={() => {
            resetValues();
            props.updateStudent(firstNameValue, lastNameValue, emailValue);
          }}
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Update Student
        </button>
      </div>
    </div>
  );
};

export default UpdateStudentForm;
