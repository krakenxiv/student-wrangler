import React, { useRef, useState } from 'react';
import classes from './addStudentForm.module.scss';

interface AddStudentFormProps {
  handleAddNewStudent: Function;
}

const AddStudentForm = (props: AddStudentFormProps) => {
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const handleFirstNameChange = (event: any) => {
    setFirstNameValue(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastNameValue(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmailValue(event.target.value);
  };

  const resetValues = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setFirstNameFocus(false);
    setLastNameFocus(false);
    setEmailFocus(false);
  };

  return (
    <div className={classes.studentForm}>
      <h2>Add Student</h2>
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
          //   value={checkPreviousName()}
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
          //   value={checkPreviousName()}
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
          //   value={checkPreviousName()}
        />
      </div>
      <div>
        <button
          onClick={() => {
            resetValues();
            props.handleAddNewStudent(
              firstNameValue,
              lastNameValue,
              emailValue
            );
          }}
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default AddStudentForm;
