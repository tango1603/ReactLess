import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Main from './components/Main/Main';
import About from './components/About/About';
import AddTask from './components/AddTask/AddTask';

export default class App extends Component {

  render() {
    return (
      <div className="to-do-app">
        <HeaderMenu/>
        <Switch>
          <Route exact path='/' component = {About}/>
          <Route path='/list' component = {Main}/>
          <Route path='/add' component = {AddTask}/>
        </Switch>
      </div>
    );
  }
}
