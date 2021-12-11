import React from 'react'

function Table(props) {

    const rows=props.userData.length>0?props.userData.map((user)=>{
        return(<tr key={user.id}>
            <td>
                {user.name}
            </td>
            <td>
                {user.username}
            </td>
            <td><button className='button' onClick={() => {props.editRow(user)}}>Edit</button>
            </td>
            <td><button className='button' onClick={()=>props.deleteUser(user.id)}>Delete</button>
            </td>   
        </tr>);
    }):<tr>
        <td colSpan={3}>No users</td>
        </tr>





    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Table
