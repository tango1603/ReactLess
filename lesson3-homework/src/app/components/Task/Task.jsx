import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Task.scss';
import { DEF_GROUP } from '../../constants/constants.js';

import { delItemFromList} from '../../store/actions';

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    taskList: state.taskList,
    modifiedList: state.modifiedList
  };
};
const mapActionToProps = (dispatch) => {
  return {
    delItemFromList: bindActionCreators(delItemFromList, dispatch)
  };
};

class Task extends Component {
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

Task.propTypes = {
  group: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  delItemFromList: PropTypes.func
};

export default connect(mapStateToProps, mapActionToProps)(Task);
