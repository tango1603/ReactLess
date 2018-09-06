import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default class App extends Component {

  render() {
    return (
      <div className="to-do-app">
        <Header />
        <Main />
      </div>
    );
  }
}
