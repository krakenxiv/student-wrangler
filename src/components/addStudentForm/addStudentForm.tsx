import React, { useState } from 'react';
import classes from './addStudentForm.module.scss';

interface AddStudentFormProps {
  handleAddNewStudent: Function;
}

const AddStudentForm = (props: AddStudentFormProps) => {
  const [firstNameValue, setFirstNameValue] = useState<string>('');
  const [lastNameValue, setLastNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [dateStartedValue, setDateStartedValue] = useState<string>('');
  const [activeValue, setActiveValue] = useState<boolean>(true);
  const [phone1Value, setPhone1Value] = useState<string>('');
  const [phone2Value, setPhone2Value] = useState<string>('');
  const [phone1LabelValue, setPhone1LabelValue] = useState<string>('');
  const [phone2LabelValue, setPhone2LabelValue] = useState<string>('');
  const [financialStatusValue, setFinancialStatusValue] = useState<string>('');
  const [lessonLengthValue, setLessonLengthValue] = useState<string>('');
  const [currentRateValue, setCurrentRateValue] = useState<string>('');
  const [activeSongsValue, setActiveSongsValue] = useState<string>('');
  const [additionalNotesValue, setAdditionalNotesValue] = useState<string>('');

  const resetValues = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setDateStartedValue('');
    setActiveValue(true);
    setPhone1Value('');
    setPhone2Value('');
    setPhone1LabelValue('');
    setPhone2LabelValue('');
    setFinancialStatusValue('');
    setLessonLengthValue('');
    setCurrentRateValue('');
    setActiveSongsValue('');
    setAdditionalNotesValue('');
  };

  return (
    <div className={classes.studentForm}>
      <div className="input-group mb-3">
        <label className="input-group-text">First Name</label>
        <input
          className="form-control"
          type="text"
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
          type="text"
          onChange={(event) => {
            setLastNameValue(event.target.value);
          }}
          value={lastNameValue}
        />
      </div>

      <div className={`form-check ${classes.isActiveCheck}`}>
        <label className="form-check-label" htmlFor="isActiveCheck">
          Is Active {activeValue}
        </label>
        <input
          type="checkbox"
          className="form-check-input"
          id="isActiveCheck"
          checked={activeValue}
          onChange={() => {
            setActiveValue(!activeValue);
          }}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Email</label>
        <input
          className="form-control"
          type="email"
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
          onChange={(e) => {
            setDateStartedValue(e.target.value);
          }}
          value={dateStartedValue}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">{phone1LabelValue}</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone1Value(e.target.value);
          }}
          value={phone1Value}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Phone 1 Label</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone1LabelValue(e.target.value);
          }}
          value={phone1LabelValue}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">{phone2LabelValue}</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone2Value(e.target.value);
          }}
          value={phone2Value}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Phone 2 Label</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone2LabelValue(e.target.value);
          }}
          value={phone2LabelValue}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Financially Current</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setFinancialStatusValue(e.target.value);
          }}
          value={financialStatusValue}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Current Rate</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setCurrentRateValue(e.target.value);
          }}
          value={currentRateValue}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Lesson Length</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setLessonLengthValue(e.target.value);
          }}
          value={lessonLengthValue}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Active Songs</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setActiveSongsValue(e.target.value);
          }}
          value={activeSongsValue}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="additionalNotesTextarea" className="form-label">
          Additional Notes:
        </label>
        <textarea
          className="form-control"
          id="additionalNotesTextarea"
          rows={3}
          onChange={(e) => {
            setAdditionalNotesValue(e.target.value);
          }}
          value={additionalNotesValue}
        ></textarea>
      </div>

      <div>
        <button
          onClick={() => {
            props.handleAddNewStudent(
              firstNameValue,
              lastNameValue,
              emailValue,
              dateStartedValue,
              activeValue,
              phone1Value,
              phone2Value,
              phone1LabelValue,
              phone2LabelValue,
              financialStatusValue,
              lessonLengthValue,
              currentRateValue,
              activeSongsValue,
              additionalNotesValue
            );
            resetValues();
          }}
          type="button"
          className="btn btn-primary float-end"
          data-bs-dismiss="modal"
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default AddStudentForm;
