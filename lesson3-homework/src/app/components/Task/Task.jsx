import React, { Component } from 'react';
import './Task.scss';
import { DEF_GROUP } from '../../constants/constants.js';
export default class Task extends Component {
  onClickHandle(e) {
    console.log('click', e, this.props);
    this.props.delItemFromList(this.props);
  }
  render() {
    const { group, name, description } = this.props;
    const curgroup = DEF_GROUP.find(g => g.value === group).label;
    return (
      <div className="task">
        <input
          className="task__check"
          type="checkbox"
          name="done"
          id="status"
        />
        <div className="task__name">{name}</div>
        <div className="task__description">{description}</div>
        <div className="task__group">{curgroup}</div>
        <div className="task__close" onClick={this.onClickHandle.bind(this)} />
      </div>
    );
  }
}
