import React, { Component } from 'react';
import './App.scss';

import TaskList from './components/TaskList/TaskList.jsx';
import AddTask from './components/AddTask/AddTask.jsx';

import { MOCKLIST } from './constants/constants.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: MOCKLIST
    };
  }

  render() {
    return (
      <div>
        <TaskList data={this.state} />
        <AddTask />
      </div>
    );
  }
}
