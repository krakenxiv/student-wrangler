import React from 'react';
import classes from './sortBar.module.scss';

interface SortBarProps {
  handleSortChange: Function;
  handleOrderbyChange: Function;
}

const SortBar = (props: SortBarProps) => {
  return (
    <div className={classes.sortBar}>
      <div className={`${classes.sortBy}`}>
        <label
          className={`form-check-label ${classes.selectLabel}`}
          htmlFor="sort-by-select"
        >
          Sort By
        </label>
        <select
          className={`form-select ${classes.sortSelect}`}
          id="sort-by-select"
          onChange={(e) => {
            props.handleSortChange(e);
          }}
        >
          <option value="first_name" defaultValue={'first_name'}>
            First Name
          </option>
          <option value="last_name">Last Name</option>
          <option value="active_first_name">Active by First Name</option>
          <option value="active_last_name">Active by Last Name</option>
        </select>
      </div>
      <div className={`${classes.orderBy}`}>
        <label
          className={`form-check-label ${classes.selectLabel}`}
          htmlFor="order-by-select"
        >
          Order By
        </label>
        <select
          className={`form-select ${classes.sortSelect}`}
          id="order-by-select"
          onChange={(e) => {
            props.handleOrderbyChange(e);
          }}
        >
          <option value="asc" defaultValue={'asc'}>
            ASC
          </option>
          <option value="desc">DESC</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
