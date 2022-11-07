import React from 'react'

function Table({data}) {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>E-mail</th>
            </tr>
            {data.map(item=>(

            <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table