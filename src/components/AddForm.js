import React, {useState} from 'react'

function AddForm(props) {

    const initialUser={
        id:null,
        name:'',
        username:''
    }

    const [user,setUser]=useState(initialUser)


    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!user.name || !user.username){
            return
        }
        props.addUser(user)
        setUser(initialUser);
    }

    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setUser({...user,[name]:value});
        console.log(user)
    }




    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange}/>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange}/>
            <button>Add new user</button>
        </form>
    )
}

export default AddForm
