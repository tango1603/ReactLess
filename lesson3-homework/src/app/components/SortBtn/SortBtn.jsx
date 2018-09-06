import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './SortBtn.scss';
import {sortList} from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList
  };
};
const mapActionToProps = (dispatch) => {
  return {
    sortList: bindActionCreators(sortList, dispatch)
  };
};

class SortBtn extends Component {
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

SortBtn.propTypes = {
  name: PropTypes.string,
  sortField: PropTypes.string,
  sortList: PropTypes.func,
  taskList: PropTypes.array
};

export default connect(mapStateToProps, mapActionToProps)(SortBtn);
