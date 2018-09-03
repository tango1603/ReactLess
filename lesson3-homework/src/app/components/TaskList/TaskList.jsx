import React, { Component } from 'react';
import './TaskList.scss';
import Task from '../Task/Task.jsx';
export default class TaskList extends Component {
  render() {
    const taskList = this.props.taskList;
    return (
      <div className="task-list">
        <div className="task-list__header">
          <input className="task__check--hide" type="checkbox" />
          <div className="task-list__header task-list__header--bold">
            Название задачи
          </div>
          <div className="task-list__header task-list__header--bold">
            Описание задачи
          </div>
          <div className="task-list__header  task-list__header--bold-right">
            Группа
          </div>
        </div>
        {taskList.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            description={task.description}
            group={task.group}
          />
        ))}
      </div>
    );
  }
}
