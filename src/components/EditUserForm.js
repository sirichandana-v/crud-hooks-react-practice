import React, {useState, useEffect} from 'react'

function EditUserForm(props) {

    const [user, setUser] = useState(props.selectedUser)

    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setUser({...user,[name]:value});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("hello2")
        if(!user.name || !user.username){
            return
        }
        console.log(user)
        props.updateUser(user.id,user)
    }
    const handleCancel=()=>{
        props.setEditing(false);
    }
    useEffect(() => {
        setUser(props.selectedUser)
      }, [props])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange}/>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange}/>
            <button>Update user</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default EditUserForm
