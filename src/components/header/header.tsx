import React, { useRef, useState } from 'react';
import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Student Wrangler</h1>
      <button
        className={`btn btn-primary ${classes.addButton}`}
        data-bs-toggle="modal"
        data-bs-target="#addStudentModal"
      >
        <i className="bi bi-person-plus-fill"></i>
      </button>
    </header>
  );
};

export default Header;
