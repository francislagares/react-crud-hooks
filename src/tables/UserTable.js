import React from 'react';

const UserTable = ({ users, deleteUser, editUser }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {users.length > 0 ? (
        users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button type='button' 
                      className='btn btn-outline-dark'
                      onClick={() => editUser(user)}>Edit</button>
              <button type='button' 
                      className='btn btn-outline-dark'
                      onClick={() => deleteUser(user.id)} >Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
      </tbody>
    </table>
  );
}

export default UserTable;