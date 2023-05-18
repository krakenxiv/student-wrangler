import React from 'react';
import classes from './sortBar.module.scss';

interface SortBarProps {
  updateDate: Function;
  handleSortChange: Function;
  handleOrderbyChange: Function;
}

const SortBar = (props: SortBarProps) => {
  return (
    <div className={classes.sortBar}>
      <input
        type="datetime-local"
        onChange={(e) => {
          props.updateDate(e);
        }}
      />
      <div className={`${classes.sortRow}`}>
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
            <option value="email">Email</option>
            <option value="id">ID</option>
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
    </div>
  );
};

export default SortBar;
