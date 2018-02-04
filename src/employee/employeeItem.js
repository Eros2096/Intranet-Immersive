import React from 'react'
import { Link } from 'react-router-dom';

const EmployeeItem = (props) => {
    return <tr>
          <th scope="col">{props.employee.id}</th>
          {/* <th scope="col">{props.employee.name}</th> */}
          <th><span><Link to="/department">{props.employee.name}</Link></span></th>
          <th scope="col">{props.employee.department}</th>
          <th scope="col">{props.employee.email_company}</th>
          <th scope="col">{props.employee.email_personal}</th>
          <th scope="col">{props.employee.extension}</th>
          <th scope="col">{props.employee.phone_personal}</th>
        </tr>
}

export default EmployeeItem