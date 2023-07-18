import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          setFilteredUsers(data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  }, [users, searchTerm]);

  const handleDelete = async id => {
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
        setFilteredUsers(filteredUsers.filter(user => user.id !== id));
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>Edit</Link>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
