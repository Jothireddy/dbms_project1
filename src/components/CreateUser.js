import React, { useState } from 'react';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });
      if (response.ok) {
        console.log('User created successfully');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
