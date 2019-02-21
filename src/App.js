import React, { useState  } from 'react';
import UserTable from './tables/UserTable';

const App = () => {
  const usersData = [
    { id: 1, name: 'john', username: 'johndoe' },
    { id: 2, name: 'Craig', username: 'craiglist' },
    { id: 3, name: 'Ben', username: 'benishere' },
  ]

  const [ users, setUsers ] = useState(usersData);

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Add user</h2>
        </div>
        <div className="col-md-6">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;