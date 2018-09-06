import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './TaskList.scss';
import Task from '../Task/Task.jsx';
import SortBtn from '../SortBtn/SortBtn.jsx';

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    taskList: state.taskList,
    modifiedList: state.modifiedList
  };
};


class TaskList extends Component {
  render() {
    const taskList = this.props.taskList;
    return (
      <div className="task-list">
        <div className="task-list__header">
          <input className="task__check--hide" type="checkbox" />
          <SortBtn
            name="Название задачи"
            sortField="name"
            sortList={this.props.sortList}
          />
          <SortBtn
            name="Описание задачи"
            sortField="description"
            sortList={this.props.sortList}
          />
          <div>
            <SortBtn
              name="Группа"
              sortField="group"
              sortList={this.props.sortList}
            />
          </div>
        </div>
        {taskList.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            description={task.description}
            group={task.group}
            delItemFromList={this.props.delItemFromList}
          />
        ))}
      </div>
    );
  }
}

TaskList.propTypes = {
  addItemToList: PropTypes.func,
  delItemFromList: PropTypes.func,
  sortList: PropTypes.func,
  taskList: PropTypes.object,
  modifiedList: PropTypes.object
};

export default connect(mapStateToProps)(TaskList);
