import React from 'react'

const DepartmentItem = (props) => {
    return <tr>
          <th scope="col">{props.department.id}</th>
          <th scope="col">{props.department.name}</th>          
        </tr>
}

export default DepartmentItem