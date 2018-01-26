import React, { Component } from 'react';
import Employees from './employeeComponent.js';

//const uuidv1 = require('uuid/v1');

export default class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      department: '',
      id: '',
      name: '',
      email_company: '',
      email_personal: '',
      extension: '',
      phone_personal: '',
      employees: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then((empls) => {
        this.setState({ employees: empls });
      });
  }

  render() {
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
                <Employees employees={this.state.employees}/>                  
            </tbody>
        </table>          
  </div>
    );
  }
}

