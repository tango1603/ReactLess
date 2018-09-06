import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './TaskList.scss';
import Task from '../Task/Task.jsx';
import SortBtn from '../SortBtn/SortBtn.jsx';
import {addItemToList} from '../../store/actions';

const mapStateToProps = (state) => {
  console.log('TaskList.mapStateToProps', state);
  return {
    taskList: state.taskList
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addItemToList: bindActionCreators(addItemToList, dispatch)
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
          />
          <SortBtn
            name="Описание задачи"
            sortField="description"
          />
          <div>
            <SortBtn
              name="Группа"
              sortField="group"
            />
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

TaskList.propTypes = {
  taskList: PropTypes.array
};

export default connect(mapStateToProps, mapActionToProps)(TaskList);
