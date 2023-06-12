import React from 'react';
import classes from './template.module.scss';

interface TemplateProps {
  tempFunction: Function;
}

const Template = (props: TemplateProps) => {
  return <div className={classes.template}></div>;
};

export default Template;
