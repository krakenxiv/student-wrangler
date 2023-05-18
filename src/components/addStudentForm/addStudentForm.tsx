import React, { useState } from 'react';
import classes from './addStudentForm.module.scss';

interface AddStudentFormProps {
  handleAddNewStudent: Function;
}

const AddStudentForm = (props: AddStudentFormProps) => {
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
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Email</label>
        <input
          className="form-control"
          onChange={(event) => {
            setEmailValue(event.target.value);
          }}
          value={emailValue}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Date Started</label>
        <input
          className="form-control"
          type="date"
          id="start"
          name="trip-start"
          onChange={(e) => {
            setDateStartedValue(e.target.value);
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            props.handleAddNewStudent(
              firstNameValue,
              lastNameValue,
              emailValue,
              dateStartedValue
            );
            resetValues();
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
