import React, { Component } from 'react';
import './AddTask.scss';
import { DEF_GROUP } from '../../constants/constants.js';
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      group: '1',
      done: false
    };
    console.log('huyak', this.state, this.props);
  }

  onChange(event) {
    const { name, value } = event.target || event;
    if (value && name) {
      this.setState({ [name]: value });
    }
  }

  onChangeSelect(event) {
    const { name, value } = event.target || event;
    console.log('v=', value, 'n=', name);
    if (value && name) {
      this.setState({ [name]: value });
    }
  }

  addTask() {
    const { name, description } = this.state;
    if (name && description) {
      this.props.addItemToList(this.state);
      this.setState({
        name: '',
        description: '',
        group: '1',
        done: false
      });
    }
  }


  render() {
    const groups = Object.keys(DEF_GROUP).map(group => (
      <option key={group} value={group}>
        {DEF_GROUP[group]}
      </option>
    ));

    console.log('pupka ', this.state);

    return (
      <div className="add-task">
        <div className="add-task__container">
          <input
            className="add-task__check--hide"
            type="checkbox"
            name="done"
            id="status"
            onChange={this.onChange.bind(this)}
          />
          <input
            className="add-task__name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange.bind(this)}
          />
          <input
            className="add-task__description"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onChange.bind(this)}
          />

          <select
            className="add-task__group"
            name="group"
            onChange={this.onChangeSelect.bind(this)}
            value={this.state.group}
          >
            {groups}
          </select>
        </div>
        <div className="add-task__container add-task__container--right">
          <button
            className="add-task__button"
            onClick={this.addTask.bind(this)}
          >
            Добавить задачу
          </button>
          <button className="add-task__button add-task__button--inverse">
            Отмена
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
