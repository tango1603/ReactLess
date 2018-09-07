
import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import TaskList from '../TaskList/TaskList';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Filter />
        <TaskList/>
      </div>
    );
  }
}
