import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.scss';

import Filter from './components/Filter/Filter.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import AddTask from './components/AddTask/AddTask.jsx';

export default class App extends Component {

  render() {
    return (
      <div className="to-do-app">
        <div className="caption">ToDoList:</div>
        <Filter />
        <TaskList
          taskList={this.props.modifiedList || this.props.taskList}
          delItemFromList={this.props.delItemFromList}
          sortList={this.props.sortList}
        />
        <AddTask addItemToList={this.props.addItemToList} />
      </div>
    );
  }
}

App.propTypes = {
  addItemToList: PropTypes.func,
  delItemFromList: PropTypes.func,
  sortList: PropTypes.func,
  taskList: PropTypes.object,
  modifiedList: PropTypes.object
};

