import React, { Component } from 'react';
import { connect } from 'react-redux';

import Departments from './departmentComponent.js';

import { getDepartments } from './departmentActions';
// const uuidv1 = require('uuid/v1');

class DepartmentContainer extends Component {
  state = {
    departments: [],
  };

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <Departments departments={this.props.departments}/>        
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    departments: state.Department.departments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(getDepartments());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentContainer);

