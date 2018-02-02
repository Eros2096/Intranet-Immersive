import React from 'react';
import EmployeeItem from './employeeItem'

import { array } from 'prop-types';
import { string } from 'prop-types';

const Employees = (props) => {
  return (
  <div>
    <h1>Employees:</h1>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Company Email</th>
          <th scope="col">Personal Email</th>
          <th scope="col">Extension</th>
          <th scope="col">Personal Phone</th>
        </tr>
      </thead>
      <tbody>
      {
        props.employees.map(employee => {
          return <EmployeeItem key={employee.id} employee={employee}/>
        })
      }        
      </tbody>
    </table>
  </div>
  )
}

Employees.propTypes = {
  department: string,
  id: string,
  name: string,
  email_company: string,
  email_personal: string,
  extension: string,
  phone_personal: string,
  employees: array,
};

Employees.defaultProps = {
  department: 'none',
  id: '-',
  name: '-',
  email_company: '-',
  email_personal: '-',
  extension: '-',
  phone_personal: '-',
  employees: [],
};

export default Employees;
