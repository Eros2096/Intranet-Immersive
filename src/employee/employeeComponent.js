import React from 'react';
import { array } from 'prop-types';
import { string } from 'prop-types';

const Employees = ({ employees }) => (
  employees.map(employee =>
    <tr>          
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.email_company}</td>
      <td>{employee.email_personal}</td>
      <td>{employee.extension}</td>
      <td>{employee.phone_personal}</td>
    </tr>));

Employees.propTypes = {  
    department: string,
    id: string,
    name: string,
    email_company: string,
    email_personal: string,
    extension: string,
    phone_personal: string,
    employees: array
};

Employees.defaultProps = {
    department: 'none',
    id: '-',
    name: '-',
    email_company: '-',
    email_personal: '-',
    extension: '-',
    phone_personal: '-',
    employees: []
};


export default Employees;