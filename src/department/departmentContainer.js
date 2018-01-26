import React, { Component } from 'react';
import Departments from './departmentComponent.js';

//const uuidv1 = require('uuid/v1');

export default class DepartmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      departments: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/departments')
      .then(response => response.json())
      .then((depts) => {
        this.setState({ departments: depts });
      });
  }

  render() {
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
                <Departments departments={this.state.departments} />                  
            </tbody>
        </table>        
  </div>
    );
  }
}

