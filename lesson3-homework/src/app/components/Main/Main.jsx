
import React, { Component } from 'react';
import Filter from '../Filter/Filter.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import AddTask from '../AddTask/AddTask.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Filter />
        <TaskList/>
        <AddTask/>
      </div>
    );
  }
}
