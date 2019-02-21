import React from 'react';

const UserTable = props => {
  return (
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button type='button' className='btn btn-outline-dark'>Edit</button>
              <button type='button' className='btn btn-outline-dark'>Delete</button>
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