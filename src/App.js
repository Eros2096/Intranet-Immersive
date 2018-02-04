import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import DepartmentContainer from './department/departmentContainer.js';
import EmployeeContainer from './employee/employeeContainer';
import MenuContainer from './menu/menuContainer';

const state = {
  loading: false,
  open: false,
  error: '',
};

const App = () => (
  <div>    
    <MenuContainer/>    
    <Switch>
      <Route exact path="/" component={DepartmentContainer, EmployeeContainer} />
      <Route exact path="/department" component={DepartmentContainer} />
      <Route exact path="/employee" component={EmployeeContainer} />
    </Switch>
  </div>
);

export default App;
