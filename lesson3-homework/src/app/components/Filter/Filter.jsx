import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Filter.scss';
import { DEF_GROUP } from '../../constants/constants.js';
import Select from 'react-select';
import { filterItems } from '../../store/actions';


const mapStateToProps = (state) => {

  console.log('Filter.mapStateToProps', state);
  return {
    taskList: state.taskList
  };
};
const mapActionToProps = (dispatch) => {
  return {
    filterItems: bindActionCreators(filterItems, dispatch)
  };
};


class Filter extends Component {
  constructor() {
    super();
    this.state = { selectedOption: null };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log('Option selected:', selectedOption);
    this.props.filterItems(selectedOption);

  };

  render() {
    return (
      <div className="filter">
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={DEF_GROUP}
          isClearable
        />
      </div>
    );
  }
}


Filter.propTypes = {
  filterItems: PropTypes.func
};

export default connect(mapStateToProps, mapActionToProps)(Filter);
