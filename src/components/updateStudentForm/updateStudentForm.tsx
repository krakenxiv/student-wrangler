import React, { useState, useRef, useEffect } from 'react';
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
  resetUpdateForm: number;
}

const UpdateStudentForm = (props: UpdateStudentFormProps) => {
  // const convertDateTimeDisplay = (str: any) => {
  //   let newStr = str.toString().replace(/T/g, ' ');
  //   newStr = newStr.replace(/Z/g, '');
  //   return newStr;
  // };

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
  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);
  const [firstNameFocused, setFirstNameFocused] = useState<boolean>(false);
  const [lastNameFocused, setLastNameFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [startDateFocused, setStartDateFocused] = useState<boolean>(false);
  const [phone1Focused, setPhone1Focused] = useState<boolean>(false);
  const [phone2Focused, setPhone2Focused] = useState<boolean>(false);
  const [phone1LabelFocused, setPhone1LabelFocused] = useState<boolean>(false);
  const [phone2LabelFocused, setPhone2LabelFocused] = useState<boolean>(false);
  const [financialStatusFocused, setFinancialStatusFocused] =
    useState<boolean>(false);
  const [lessonLengthFocused, setLessonLengthFocused] =
    useState<boolean>(false);
  const [currentRateFocused, setCurrentRateFocused] = useState<boolean>(false);
  const [activeSongsFocused, setActiveSongsFocused] = useState<boolean>(false);
  const [additionalNotesFocused, setAdditionalNotesFocused] =
    useState<boolean>(false);

  const resetValues = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setDateStartedValue('');
    setActiveValue(false);
    setPhone1Value('');
    setPhone2Value('');
    setPhone1LabelValue('');
    setPhone2LabelValue('');
    setFinancialStatusValue('');
    setLessonLengthValue('');
    setCurrentRateValue('');
    setActiveSongsValue('');
    setAdditionalNotesValue('');
    setHasBeenClicked(false);
    setFirstNameFocused(false);
    setLastNameFocused(false);
    setEmailFocused(false);
    setStartDateFocused(false);
    setPhone1Focused(false);
    setPhone2Focused(false);
    setPhone1LabelFocused(false);
    setPhone2LabelFocused(false);
    setFinancialStatusFocused(false);
    setLessonLengthFocused(false);
    setCurrentRateFocused(false);
    setActiveSongsFocused(false);
    setAdditionalNotesFocused(false);
  };

  // this allows the parent component to reset the form when a user
  // clicks the modal close from the parent component... a little clunk
  useEffect(() => {
    if (props.resetUpdateForm) {
      resetValues();
    }
  }, [props.resetUpdateForm]);

  return (
    <div className={classes.studentForm}>
      {/* FIRST NAME */}
      <div className="input-group mb-3">
        <label className="input-group-text">First Name</label>
        <input
          className="form-control"
          type="text"
          onChange={(event) => {
            setFirstNameValue(event.target.value);
          }}
          onClick={() => {
            setFirstNameValue(props.previousFirstName);
          }}
          onFocus={() => {
            setFirstNameFocused(true);
          }}
          onBlur={() => {
            if (firstNameValue === '') {
              setFirstNameFocused(false);
            }
          }}
          value={firstNameFocused ? firstNameValue : props.previousFirstName}
          placeholder={props.previousFirstName}
        />
      </div>

      {/* LAST NAME */}
      <div className="input-group mb-3">
        <label className="input-group-text">Last Name</label>
        <input
          className="form-control"
          type="text"
          onChange={(event) => {
            setLastNameValue(event.target.value);
          }}
          onClick={() => {
            setLastNameValue(props.previousLastName);
          }}
          onFocus={() => {
            setLastNameFocused(true);
          }}
          onBlur={() => {
            if (lastNameValue === '') {
              setLastNameFocused(false);
            }
          }}
          value={lastNameFocused ? lastNameValue : props.previousLastName}
          placeholder={props.previousLastName}
        />
      </div>

      {/* IS ACTIVE */}
      <div className={`form-check ${classes.isActiveCheck}`}>
        <label className="form-check-label" htmlFor="isActiveCheck">
          Is Active
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="isActiveCheck"
          checked={hasBeenClicked ? activeValue : props.previousActive}
          onChange={(e) => {
            setActiveValue(e.target.checked);
            setHasBeenClicked(true);
          }}
        />
      </div>

      {/* EMAIL */}
      <div className="input-group mb-3">
        <label className="input-group-text">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          onChange={(event) => {
            setEmailValue(event.target.value);
          }}
          onClick={() => {
            setEmailValue(props.previousEmail ? props.previousEmail : '');
          }}
          onFocus={() => {
            setEmailFocused(true);
          }}
          onBlur={() => {
            if (emailValue === '') {
              setEmailFocused(false);
            }
          }}
          value={
            emailFocused
              ? emailValue
              : props.previousEmail
              ? props.previousEmail
              : ''
          }
          placeholder={props.previousEmail ? props.previousEmail : ''}
        />
      </div>

      {/* DATE STARTED */}
      <div className="input-group mb-3">
        <label className="input-group-text">Date Started</label>
        <input
          className="form-control"
          type="date"
          onChange={(event) => {
            setDateStartedValue(event.target.value);
          }}
          onClick={() => {
            setDateStartedValue(
              props.previousDateStarted ? props.previousDateStarted : ''
            );
          }}
          onFocus={() => {
            setStartDateFocused(true);
          }}
          onBlur={() => {
            if (dateStartedValue === '') {
              setStartDateFocused(false);
            }
          }}
          value={
            startDateFocused
              ? dateStartedValue
              : props.previousDateStarted
              ? props.previousDateStarted
              : ''
          }
        />
      </div>

      {/* PHONE 1 */}
      <div className="input-group mb-3">
        <label className="input-group-text">
          {phone1LabelValue ? phone1LabelValue : props.previousPhone1Label}
        </label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone1Value(e.target.value);
          }}
          onClick={() => {
            setPhone1Value(props.previousPhone1 ? props.previousPhone1 : '');
          }}
          onFocus={() => {
            setPhone1Focused(true);
          }}
          onBlur={() => {
            if (phone1Value === '') {
              setPhone1Focused(false);
            }
          }}
          value={
            phone1Focused
              ? phone1Value
              : props.previousPhone1
              ? props.previousPhone1
              : ''
          }
          placeholder={props.previousPhone1}
        />
      </div>

      {/* PHONE 1 LABEL */}
      <div className="input-group mb-3">
        <label className="input-group-text">Phone 1 Label</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone1LabelValue(e.target.value);
          }}
          onClick={() => {
            setPhone1LabelValue(
              props.previousPhone1Label ? props.previousPhone1Label : ''
            );
          }}
          onFocus={() => {
            setPhone1LabelFocused(true);
          }}
          onBlur={() => {
            if (phone1LabelValue === '') {
              setPhone1LabelFocused(false);
            }
          }}
          value={
            phone1LabelFocused
              ? phone1LabelValue
              : props.previousPhone1Label
              ? props.previousPhone1Label
              : ''
          }
          placeholder={props.previousPhone1Label}
        />
      </div>

      {/* PHONE 2 */}
      <div className="input-group mb-3">
        <label className="input-group-text">
          {phone2LabelValue ? phone2LabelValue : props.previousPhone2Label}
        </label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone2Value(e.target.value);
          }}
          onClick={() => {
            setPhone2Value(props.previousPhone2 ? props.previousPhone2 : '');
          }}
          onFocus={() => {
            setPhone2Focused(true);
          }}
          onBlur={() => {
            if (phone2Value === '') {
              setPhone2Focused(false);
            }
          }}
          value={
            phone2Focused
              ? phone2Value
              : props.previousPhone2
              ? props.previousPhone2
              : ''
          }
          placeholder={props.previousPhone2}
        />
      </div>

      {/* PHONE 2 LABEL */}
      <div className="input-group mb-3">
        <label className="input-group-text">Phone 2 Label</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setPhone2LabelValue(e.target.value);
          }}
          onClick={() => {
            setPhone2LabelValue(
              props.previousPhone2Label ? props.previousPhone2Label : ''
            );
          }}
          onFocus={() => {
            setPhone2LabelFocused(true);
          }}
          onBlur={() => {
            if (phone2LabelValue === '') {
              setPhone2LabelFocused(false);
            }
          }}
          value={
            phone2LabelFocused
              ? phone2LabelValue
              : props.previousPhone2Label
              ? props.previousPhone2Label
              : ''
          }
          placeholder={props.previousPhone2Label}
        />
      </div>

      {/* FINANCIALLY CURRENT */}
      <div className="input-group mb-3">
        <label className="input-group-text">Financially Current</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setFinancialStatusValue(e.target.value);
          }}
          onClick={() => {
            setFinancialStatusValue(
              props.previousFinancialStatus ? props.previousFinancialStatus : ''
            );
          }}
          onFocus={() => {
            setFinancialStatusFocused(true);
          }}
          onBlur={() => {
            if (financialStatusValue === '') {
              setFinancialStatusFocused(false);
            }
          }}
          value={
            financialStatusFocused
              ? financialStatusValue
              : props.previousFinancialStatus
              ? props.previousFinancialStatus
              : ''
          }
          placeholder={props.previousFinancialStatus}
        />
      </div>

      {/* LESSON LENGTH */}
      <div className="input-group mb-3">
        <label className="input-group-text">Lesson Length</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setLessonLengthValue(e.target.value);
          }}
          onClick={() => {
            setLessonLengthValue(
              props.previousLessonLength ? props.previousLessonLength : ''
            );
          }}
          onFocus={() => {
            setLessonLengthFocused(true);
          }}
          onBlur={() => {
            if (lessonLengthValue === '') {
              setLessonLengthFocused(false);
            }
          }}
          value={
            lessonLengthFocused
              ? lessonLengthValue
              : props.previousLessonLength
              ? props.previousLessonLength
              : ''
          }
          placeholder={props.previousLessonLength}
        />
      </div>

      {/* CURRENT RATE */}
      <div className="input-group mb-3">
        <label className="input-group-text">Current Rate</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setCurrentRateValue(e.target.value);
          }}
          onClick={() => {
            setCurrentRateValue(
              props.previousCurrentRate ? props.previousCurrentRate : ''
            );
          }}
          onFocus={() => {
            setCurrentRateFocused(true);
          }}
          onBlur={() => {
            if (currentRateValue === '') {
              setCurrentRateFocused(false);
            }
          }}
          value={
            currentRateFocused
              ? currentRateValue
              : props.previousCurrentRate
              ? props.previousCurrentRate
              : ''
          }
          placeholder={props.previousCurrentRate}
        />
      </div>

      {/* ACTIVE SONGS */}
      <div className="input-group mb-3">
        <label className="input-group-text">Active Songs</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setActiveSongsValue(e.target.value);
          }}
          onClick={() => {
            setActiveSongsValue(
              props.previousActiveSongs ? props.previousActiveSongs : ''
            );
          }}
          onFocus={() => {
            setActiveSongsFocused(true);
          }}
          onBlur={() => {
            if (activeSongsValue === '') {
              setActiveSongsFocused(false);
            }
          }}
          value={
            activeSongsFocused
              ? activeSongsValue
              : props.previousActiveSongs
              ? props.previousActiveSongs
              : ''
          }
          placeholder={props.previousActiveSongs}
        />
      </div>

      {/* ADDITIONAL NOTES */}
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
          onClick={() => {
            setAdditionalNotesValue(
              props.previousAdditionalNotes ? props.previousAdditionalNotes : ''
            );
          }}
          onFocus={() => {
            setAdditionalNotesFocused(true);
          }}
          onBlur={() => {
            if (activeSongsValue === '') {
              setAdditionalNotesFocused(false);
            }
          }}
          value={
            additionalNotesFocused
              ? additionalNotesValue
              : props.previousAdditionalNotes
              ? props.previousAdditionalNotes
              : ''
          }
          placeholder={props.previousAdditionalNotes}
        >
          {/* {additionalNotesFocused
            ? additionalNotesValue
            : props.previousAdditionalNotes
            ? props.previousAdditionalNotes
            : ''} */}
        </textarea>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-primary float-end"
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
              active: hasBeenClicked ? activeValue : props.previousActive,
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
