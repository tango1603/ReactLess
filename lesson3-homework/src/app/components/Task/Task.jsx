import React from 'react';
import './Task.scss';
import { DEF_GROUP } from '../../constants/constants.js';
const task = ({ group, name, description }) => {
  const curgroup = DEF_GROUP.find(g => g.value === group).label;

  return (
    <div className="task">
      <input className="task__check" type="checkbox" name="done" id="status" />
      <div className="task__name">{name}</div>
      <div className="task__description">{description}</div>
      <div className="task__group">{curgroup}</div>
    </div>
  );
};

export default task;
