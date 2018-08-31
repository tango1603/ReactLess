import React from 'react';
import './Task.scss';
import { DEF_GROUP } from '../../constants/constants.js';
const task = ({ onChange, checked, group, name, description }) => {
  const curGroup = DEF_GROUP[group];

  return (
    <div className="task">
      <input className="task__check" type="checkbox" name="done" id="status" />
      <div className="task__name">{name}</div>
      <div className="task__description">{description}</div>
      <div className="task__group">{curGroup}</div>
    </div>
  );
};

export default task;
