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

  tick = () => {
    this.setState(prevState => {
      console.log(prevState);

      return {
        timer: prevState.timer + prevState.countSize
      };
    });
  };

  startTimer = () => {
    this.intervalHolder = setInterval(this.tick, 1000);
  };

  stopTimer = () => {
    clearInterval(this.intervalHolder);
  };

  resetTimer = () => {
    this.setState(() => {
      return {
        timer: 0,
        countSize: 1
      };
    });
  };

  decCountSize = () => {
    this.setState(prevState => {
      if (prevState.countSize > 1) {
        return { countSize: --prevState.countSize };
      } else return prevState;
    });
  };
  incCountSize = () => {
    this.setState(prevState => {
      console.log(prevState);

      if (prevState.countSize < 10) {
        return { countSize: ++prevState.countSize };
      } else return prevState;
    });
  };

  render() {
    return (
      <div className="timer">
        <div className="timer-block">
          <div className="timer-block__counter">{this.state.timer}</div>
        </div>
        <div className="timer-block">
          <button
            className="timer-block__button"
            onClick={() => this.startTimer()}
          >
            start
          </button>
          <button
            className="timer-block__button"
            onClick={() => this.stopTimer()}
          >
            stop
          </button>
          <button
            className="timer-block__button"
            onClick={() => this.resetTimer()}
          >
            reset
          </button>
        </div>
        <div className="timer-block--vertical">
          <div className="timer-block__interval-text">Set interval:</div>
          <div className="timer-block__wrapper">
            <button
              className="timer-block__interval-button minus"
              onClick={() => this.decCountSize()}
            >
              -
            </button>
            <div className="timer-block__interval">{this.state.countSize}</div>
            <button
              className="timer-block__interval-button plus"
              onClick={() => this.incCountSize()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
