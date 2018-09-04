import React, { Component } from 'react';
import './SortBtn.scss';

export default class SortBtn extends Component {
  constructor() {
    super();
    this.state = { sortType: null };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { sortType } = this.state;
    if (sortType === null) {
      this.setState({
        sortType: 'asc'
      });
    }

    if (sortType === 'asc') {
      this.setState({
        sortType: 'desc'
      });
      this.props.sortList('desc', this.props.sortField);
    } else {
      this.setState({
        sortType: 'asc'
      });
      this.props.sortList('asc', this.props.sortField);
    }
  }

  render() {
    const { sortType } = this.state;
    const { name } = this.props;
    return (
      <div
        className="task-list__header  task-list__header--bold"
        onClick={this.toggle}
      >
        {name}
        {sortType === 'asc' ? (
          <div className="task-list__arrow up" />
        ) : (
          <div className="task-list__arrow down" />
        )}
      </div>
    );
  }
}
