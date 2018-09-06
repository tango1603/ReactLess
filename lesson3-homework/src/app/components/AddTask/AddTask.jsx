import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './AddTask.scss';
import { DEF_GROUP } from '../../constants/constants.js';
import {addItemToList} from '../../store/actions';

const mapStateToProps = (state) => {
  console.log('Task.mapStateToProps', state);
  return {
    taskList: state.taskList
  };
};
const mapActionToProps = (dispatch) => {
  return {
    addItemToList: bindActionCreators(addItemToList, dispatch)
  };
};


class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      group: '1',
      done: false
    };
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
    const groups = DEF_GROUP.map(group => (
      <option key={group.value} value={group.value}>
        {group.label }
      </option>
    ));

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

Task.propTypes = {
  addItemToList: PropTypes.func,
  taskList: PropTypes.array
};

export default connect(mapStateToProps, mapActionToProps)(Task);
