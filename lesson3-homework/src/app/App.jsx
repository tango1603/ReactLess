import React, { Component } from 'react';
import './App.scss';

import TaskList from './components/TaskList/TaskList.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: null
    };
  }
  
  render() {
    return (
      <TaskList/>
    );
  }
}
