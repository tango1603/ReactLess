import React, { Component } from 'react';
import './Task.scss';
import { DEF_GROUP } from '../../constants/constants.js';
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { name, description } = this.props;

    const group = DEF_GROUP[this.props.group];

    return (
      <div className="task">
        <input
          className="task__check"
          type="checkbox"
          name="status"
          id="status"
        />
        <div className="task__name">{name}</div>
        <div className="task__description">{description}</div>
        <div className="task__group">{group}</div>
      </div>
    );
  }
}

export default Task;
