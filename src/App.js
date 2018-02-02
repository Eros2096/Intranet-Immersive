import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import DepartmentContainer from './department/departmentContainer.js';
import EmployeeContainer from './employee/employeeContainer';

const App = () => (
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <Link to="/department" className='navbar-brand nav-link active'>DepartmentsTest</Link>
      <Link to="/employee" className='navbar-brand nav-link active'>EmployeesTest</Link>            
    </nav>
    <Switch>
      <Route exact path="/" component={DepartmentContainer, EmployeeContainer} />
      <Route exact path="/department" component={DepartmentContainer} />
      <Route exact path="/employee" component={EmployeeContainer} />
    </Switch>
  </div>
);

export default App;
