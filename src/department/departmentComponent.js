import React from 'react';
import DepartmentItem from './departmentItem'

import { array } from 'prop-types';
import { string } from 'prop-types';

const Departments = (props) => {
  return (
  <div>
    <h1>Departments:</h1>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>          
        </tr>
      </thead>
      <tbody>
      {
        props.departments.map(department => {
          return <DepartmentItem key={department.id} department={department}/>
        })
      }        
      </tbody>
    </table>
  </div>
  )
}

Departments.propTypes = {  
  departments: array
};

Departments.defaultProps = {
    departments: []
};

export default Departments;

