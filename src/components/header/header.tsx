import React, { useRef, useState } from 'react';
import classes from './header.module.scss';

interface HeaderProps {
  addStudentHandler: Function;
}

const Header = (props: HeaderProps) => {
  return (
    <header className={classes.header}>
      <h1>Student Wrangler</h1>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#studentModal"
        onClick={() => {
          props.addStudentHandler();
        }}
      >
        +
      </button>
    </header>
  );
};

export default Header;
