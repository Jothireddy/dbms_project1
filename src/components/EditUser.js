import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`);
        if (response.ok) {
          const user = await response.json();
          setName(user.name);
          setEmail(user.email);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });
      if (response.ok) {
        console.log('User updated successfully');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
        </form>
    </div>
  );
};

export default EditUser;