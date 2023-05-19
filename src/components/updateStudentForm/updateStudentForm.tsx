import React, { useState, useRef } from 'react';
import classes from './updateStudentForm.module.scss';

interface UpdateStudentFormProps {
  updateStudent: Function;
  previousFirstName: string;
  previousLastName: string;
  previousEmail: string | null;
  previousDateStarted: string;
  previousActive: boolean;
  previousPhone1: string | undefined;
  previousPhone2: string | undefined;
  previousPhone1Label: string | undefined;
  previousPhone2Label: string | undefined;
  previousFinancialStatus: string | undefined;
  previousLessonLength: string | undefined;
  previousCurrentRate: string | undefined;
  previousActiveSongs: string | undefined;
  previousAdditionalNotes: string | undefined;
}

const UpdateStudentForm = (props: UpdateStudentFormProps) => {
  const convertDateTimeDisplay = (str: any) => {
    let newStr = str.toString().replace(/T/g, ' ');
    newStr = newStr.replace(/Z/g, '');
    return newStr;
  };

  // const activeRef = useRef();

  const [firstNameValue, setFirstNameValue] = useState<string>('');
  const [lastNameValue, setLastNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [dateStartedValue, setDateStartedValue] = useState<string>('');
  const [activeValue, setActiveValue] = useState<boolean>(false);
  const [phone1Value, setPhone1Value] = useState<string>('');
  const [phone2Value, setPhone2Value] = useState<string>('');
  const [phone1LabelValue, setPhone1LabelValue] = useState<string>('');
  const [phone2LabelValue, setPhone2LabelValue] = useState<string>('');
  const [financialStatusValue, setFinancialStatusValue] = useState<string>('');
  const [lessonLengthValue, setLessonLengthValue] = useState<string>('');
  const [currentRateValue, setCurrentRateValue] = useState<string>('');
  const [activeSongsValue, setActiveSongsValue] = useState<string>('');
  const [additionalNotesValue, setAdditionalNotesValue] = useState<string>('');
  const [hasBeenClicked, setHasBeenClicked] = useState<boolean | null>(false);

  const resetValues = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setDateStartedValue('');
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

      <div className="input-group mb-3">
        <label className="input-group-text">Is Active</label>
        <input
          type="checkbox"
          checked={
            hasBeenClicked === false ? props.previousActive : activeValue
          }
          onChange={() => {
            if (!hasBeenClicked) {
              setActiveValue(!props.previousActive);
              setHasBeenClicked(true);
            } else {
              setActiveValue(!activeValue);
            }
          }}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">
          {phone1LabelValue ? phone1LabelValue : props.previousPhone1Label}
        </label>
        <input
          className="form-control"
          onChange={(e) => {
            setPhone1Value(e.target.value);
          }}
          value={phone1Value}
          placeholder={props.previousPhone1}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Phone 1 Label</label>
        <input
          className="form-control"
          onChange={(e) => {
            setPhone1LabelValue(e.target.value);
          }}
          value={phone1LabelValue}
          placeholder={props.previousPhone1Label}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">
          {phone2LabelValue ? phone2LabelValue : props.previousPhone2Label}
        </label>
        <input
          className="form-control"
          onChange={(e) => {
            setPhone2Value(e.target.value);
          }}
          value={phone2Value}
          placeholder={props.previousPhone2}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Phone 2 Label</label>
        <input
          className="form-control"
          onChange={(e) => {
            setPhone2LabelValue(e.target.value);
          }}
          value={phone2LabelValue}
          placeholder={props.previousPhone2Label}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Financially Current</label>
        <input
          className="form-control"
          onChange={(e) => {
            setFinancialStatusValue(e.target.value);
          }}
          value={financialStatusValue}
          placeholder={props.previousFinancialStatus}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Lesson Length</label>
        <input
          className="form-control"
          onChange={(e) => {
            setLessonLengthValue(e.target.value);
          }}
          value={lessonLengthValue}
          placeholder={props.previousLessonLength}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Current Rate</label>
        <input
          className="form-control"
          onChange={(e) => {
            setCurrentRateValue(e.target.value);
          }}
          value={currentRateValue}
          placeholder={props.previousCurrentRate}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Active Songs</label>
        <input
          className="form-control"
          onChange={(e) => {
            setActiveSongsValue(e.target.value);
          }}
          value={activeSongsValue}
          placeholder={props.previousActiveSongs}
        />
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text">Additional Notes</label>
        <input
          className="form-control"
          onChange={(e) => {
            setAdditionalNotesValue(e.target.value);
          }}
          value={additionalNotesValue}
          placeholder={props.previousAdditionalNotes}
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
              active:
                activeValue != props.previousActive
                  ? activeValue
                  : props.previousActive,
              phone_1: phone1Value ? phone1Value : props.previousPhone1,
              phone_2: phone2Value ? phone2Value : props.previousPhone2,
              phone_1_label: phone1LabelValue
                ? phone1LabelValue
                : props.previousPhone1Label,
              phone_2_label: phone2LabelValue
                ? phone2LabelValue
                : props.previousPhone2Label,
              financial_status: financialStatusValue
                ? financialStatusValue
                : props.previousFinancialStatus,
              lesson_length: lessonLengthValue
                ? lessonLengthValue
                : props.previousLessonLength,
              current_rate: currentRateValue
                ? currentRateValue
                : props.previousCurrentRate,
              active_songs: activeSongsValue
                ? activeSongsValue
                : props.previousActiveSongs,
              additional_notes: additionalNotesValue
                ? additionalNotesValue
                : props.previousAdditionalNotes,
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
