import React from 'react';
import UserTable from './tables/UserTable';

const App = () => {
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Add user</h2>
        </div>
        <div className="col-md-6">
          <h2>View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;