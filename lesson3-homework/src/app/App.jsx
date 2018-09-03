import React, { Component } from 'react';
import './App.scss';

import Filter from './components/Filter/Filter.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import AddTask from './components/AddTask/AddTask.jsx';

import { MOCKLIST } from './constants/constants.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: this.initialDataTaskList(),
      filteredList: null
    };
  }

  initialDataTaskList() {
    const list = JSON.parse(localStorage['appListData'] || null);
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

  delItemFromList(delItem) {
    this.setState(prevState => {
      const curItem = prevState.taskList.find(
        item => item.name === delItem.name
      );

      let result = prevState.taskList;
      if (curItem) {
        result = prevState.taskList.splice(
          prevState.taskList.indexOf(curItem),
          1
        );
      }
      this.saveToLocalStorage();
      return { result };
    });
  }
  filterItems(filterValue) {
    let filteredTaskList = this.state.taskList;
    if (filterValue) {
      filteredTaskList = this.state.taskList.filter(
        item => item.group === filterValue.value
      );
    }
    this.setState({
      filteredList: filteredTaskList
    });
  }

  render() {
    return (
      <div className="to-do-app">
        <div className="caption">ToDoList:</div>
        <Filter filterItems={this.filterItems.bind(this)} />
        <TaskList
          taskList={this.state.filteredList || this.state.taskList}
          delItemFromList={this.delItemFromList.bind(this)}
        />
        <AddTask addItemToList={this.addItemToList.bind(this)} />
      </div>
    );
  }
}
