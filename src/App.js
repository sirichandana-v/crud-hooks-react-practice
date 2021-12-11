import React, { useState } from 'react'
import Table from "./components/Table";
import AddForm from "./components/AddForm"
import EditUserForm from './components/EditUserForm';

function App() {

  const usersData = [
    { id: '1', name: 'Tania', username: 'floppydiskette' }
  ]

  const [users,setUsers]=useState(usersData);
  
  const addUser=(user)=>{
    if(users.length>0)
      user.id=users[users.length-1].id+1;
    else
      user.id=1;
    console.log(user.id)
    setUsers([...users, user]);
  }

  const deleteUser=(id)=>{
    setEditing(false)
    setUsers(users.filter((user)=>{ return id!==user.id}))
    console.log(users)
  }

  const [editing, setEditing]=useState(false);

  

  const initialFormState = { id: null, name: '', username: '' }
  const [selectedUser, setSelectedUser] = useState(initialFormState)

  
  const editRow = (user) => {
    
    setSelectedUser({ id: user.id, name: user.name, username: user.username })
    console.log(selectedUser)
    setEditing(true)
    
  }

  const updateUser=(id, newUser)=>{
    setUsers(users.map((user)=>
      (user.id===id? newUser:user)
    ))
    setEditing(false)
  }

  


  

  return (
    <div className="App">
      <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
      {editing? (
        <div>
        <h2>Edit User</h2>
        <EditUserForm updateUser={updateUser} selectedUser={selectedUser} setEditing={setEditing}/>
        </div>
      ):(
        <div><h2>Add user</h2>
      <AddForm addUser={addUser} />
      </div>)}      
      
  </div>
          
        <div className="flex-large">
          <h2>View users</h2>
          <Table userData={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default App;
