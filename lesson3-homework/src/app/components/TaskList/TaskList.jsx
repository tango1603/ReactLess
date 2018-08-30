import React, { Component } from 'react';
import './TaskList.scss';
import Task from '../Task/Task.jsx';

export default class TaskList extends Component { 
  render() {
    const { taskList } = this.props.data;

    return (
      <div className="task-list">
        <div className="task-list__caption">ToDoList:</div>
        <div className="task-list__caption-table">
          <input className="task__check--hide" type="checkbox" name="" id="" />
          <div className="task__name">Название задачи</div>
          <div className="task__description">Описание задачи</div>
          <div className="task__group">Группа</div>
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
