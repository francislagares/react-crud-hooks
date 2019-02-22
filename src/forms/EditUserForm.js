import React, { useState } from 'react';

const EditUserForm = ({ updateUser, currentUser, setEditing }) => {
  const [ user, setUser ] = useState(currentUser);
  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value })
  }

  return (
    <form onSubmit={ event => {
        event.preventDefault();
        updateUser(user.id, user);
      }}
    >
      <div className='form-group'>
        <label>Name</label>
        <input className='form-control' 
              type="text" 
              name="name" 
              value={user.name} 
              onChange={handleInputChange} />
      </div>
      <div className='form-group'>
        <label>Username</label>
        <input className='form-control' 
                type="text" 
                name="username" 
                value={user.username} 
                onChange={handleInputChange} />
      </div>
      <button className='btn btn-outline-dark'>Update user</button>
      <button onClick={() => setEditing(false)} className='btn btn-outline-dark'>Cancel</button>
    </form>
  );

}

export default EditUserForm;