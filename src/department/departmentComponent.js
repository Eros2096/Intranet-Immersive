import React from 'react';
import { array } from 'prop-types';
import { string } from 'prop-types';

const Department = ({ departments }) => (
  departments.map(dept =>
    <tr>          
      <td>{dept.id}</td>
      <td>{dept.name}</td>
    </tr>));

Department.propTypes = {  
  departments: array
};

Department.defaultProps = {
    departments: []
};

export default Department;

