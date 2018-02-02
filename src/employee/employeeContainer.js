import React, { Component } from 'react';
import { connect } from 'react-redux';

import Employees from './employeeComponent';

import { getEmployees } from './employeeActions';

class EmployeeContainer extends Component {
  state = {
    department: '',
    id: '',
    name: '',
    email_company: '',
    email_personal: '',
    extension: '',
    phone_personal: '',
    employees: [],
  };

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return this.props.loading
      ?
    <span className="spinnerBig">
      <span className="dot1"/>
      <span className="dot2"/>
    </span >
      :      
      <Employees employees={this.props.employees}/>           
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    employees: state.Employee.employees,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(getEmployees());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);

