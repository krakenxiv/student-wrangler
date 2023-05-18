import React, { useState } from 'react';
import classes from './updateStudentForm.module.scss';

interface UpdateStudentFormProps {
  updateStudent: Function;
  previousFirstName: string;
  previousLastName: string;
  previousEmail: string | null;
  previousDateStarted: string;
}

const UpdateStudentForm = (props: UpdateStudentFormProps) => {
  const convertDateTimeDisplay = (str: any) => {
    let newStr = str.toString().replace(/T/g, ' ');
    newStr = newStr.replace(/Z/g, '');
    return newStr;
  };

  const [firstNameValue, setFirstNameValue] = useState<string>('');
  const [lastNameValue, setLastNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [dateStartedValue, setDateStartedValue] = useState<string>('');

  const resetValues = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setDateStartedValue('');
  };

  const updateDate = (date: string): void => {
    setDateStartedValue(convertDateTimeDisplay(date));
  };

  const convertDateTimeDisplayRemoveTime = (date: string): string => {
    let text = date;
    let result = text.substr(0, 10);
    return result;
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

      <div className="input-group mb-3">
        <label className="input-group-text">Date Started</label>
        <input
          className="form-control"
          type="date"
          id="start"
          name="trip-start"
          onChange={(event) => {
            updateDate(event.target.value);
          }}
          value={
            dateStartedValue
              ? dateStartedValue
              : convertDateTimeDisplayRemoveTime(props.previousDateStarted)
          }
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
              date_started: dateStartedValue
                ? dateStartedValue
                : props.previousDateStarted,
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
