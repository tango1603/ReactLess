import React, { Component } from 'react';
import './AddTask.scss';
import { DEF_GROUP } from '../../constants/constants.js';
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    //  const { name, description } = this.props;

    const groups = Object.keys(DEF_GROUP).map(group => (
      <option key={group}>{DEF_GROUP[group]}</option>
    ));

    return (
      <div className="add-task">
        <div className="add-task__container">
          <input
            className="add-task__check--hide"
            type="checkbox"
            name="status"
            id="status"
          />
          <input className="add-task__name" type="text" name="name" />
          <input
            className="add-task__description"
            type="text"
            name="description"
          />

          <select className="add-task__group">{groups}</select>
        </div>
        <div className="add-task__container add-task__container--right">
          <button className="add-task__button">Добавить задачу</button>
          <button className="add-task__button add-task__button--inverse">
            Отмена
          </button>
        </div>

        {/* <div className="add-task__name">{name}</div>
        <div className="add-task__description">{description}</div>
        <div className="add-task__group">{group}</div> */}
      </div>
    );
  }
}

export default Task;
