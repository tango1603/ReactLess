import React, { Component } from 'react';
import './App.scss';
class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      countSize: 1
    };
  }
  

  render() {
    return (
      <div className="component">
        hello world!        
      </div>
    );
  }
}

export default App;
