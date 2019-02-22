import React, { Fragment, useState  } from 'react';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

const App = () => {
  const usersData = [
    { id: 1, name: 'john', username: 'johndoe' },
    { id: 2, name: 'Craig', username: 'craiglist' },
    { id: 3, name: 'Ben', username: 'benishere' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [ users, setUsers ] = useState(usersData);
  const [ currentUser, setCurrentUser ] = useState(initialFormState);
  const [ editing, setEditing ] = useState(false);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([ ...users, user ]);
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const editUser = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map( user => ( user.id === id ? updateUser : user )));
  }
  
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
        { editing ? (
          <Fragment>
            <h2>Edit User</h2>
            <EditUserForm 
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser} />
          </Fragment>
          ) : (
          <Fragment>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </Fragment>
          )
        }
        </div>
        <div className="col-md-6">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;