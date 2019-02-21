import React from 'react';

const UserTable = () => {
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
        <tr>
          <td>Name data</td>
          <td>Username data</td>
          <td>
            <button type='button' className="btn btn-outline-dark">Edit</button>
            <button type='button' className="btn btn-outline-dark">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserTable;