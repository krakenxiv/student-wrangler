import React from 'react';
import classes from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <span>LOADING</span>
      <div
        className={`spinner-border spinner-border-sm ${classes.innerSpinner}`}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
