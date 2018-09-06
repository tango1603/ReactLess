import React, { Component } from 'react';
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
        <TaskList/>
        <AddTask/>
      </div>
    );
  }
}
