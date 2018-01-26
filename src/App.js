import React from 'react';
import ReactDOM from 'react-dom';
import DepartmentContainer from './department/departmentContainer.js';
import EmployeeContainer from './employee/employeeContainer.js';

const App = () => (
  <div>
  <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Both</a>
    <a class="navbar-brand" href="#deparment">Departments</a>  
    <a class="navbar-brand" href="#employee">Employees</a>  
  </nav>
  <div id="department">
    <DepartmentContainer/>
  </div>
  <div id="employee">
    <EmployeeContainer/>
  </div>
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root'), 
);
