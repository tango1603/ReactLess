import React, { Component } from 'react';
import './Filter.scss';
import { DEF_GROUP } from '../../constants/constants.js';
import Select from 'react-select';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = { selectedOption: null };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    this.props.filterItems(selectedOption);
  };

  render() {
    return (
      <div className="filter">
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={DEF_GROUP}
          isClearable={true}
        />
      </div>
    );
  }
}
