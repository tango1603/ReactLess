import React, { Component } from 'react';
import './App.scss';

import TaskList from './components/TaskList/TaskList.jsx';
import AddTask from './components/AddTask/AddTask.jsx';

import { MOCKLIST } from './constants/constants.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: this.initialDataTaskList()
    };
  }

  initialDataTaskList() {
    const list = JSON.parse(localStorage['appListData'] || null);
    console.log('initialDataTaskList', list);
    return list || MOCKLIST;
  }

  saveToLocalStorage() {
    localStorage['appListData'] = JSON.stringify(this.state.taskList);
  }

  addItemToList(newItem) {
    this.setState(prevState => {
      prevState.taskList.push(newItem);
      this.saveToLocalStorage();
      return { prevState };
    });
  }

  delItemFromList(item) {
    console.log('del item', item);
    this.setState(prevState => {
      const list = prevState.taskList;
      while (list.indexOf(item) !== -1) {
        list.splice(list.indexOf(item), 1);
      }

      this.saveToLocalStorage();
      return { list };
    });
  }

  render() {
    console.log('app', this.state);
    return (
      <div>
        <TaskList data={this.state} delItemFromList={this.delItemFromList} />
        <AddTask addItemToList={this.addItemToList.bind(this)} />
      </div>
    );
  }
}
