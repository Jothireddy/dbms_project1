import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import PayscaleCalculator from './components/PayscaleCalculator';


function App() {
  return (
    <Router>
      <div className="container">
        <h2>CRUD App with React, Node.js, and MySQL</h2>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
        <PayscaleCalculator />
      </div>
    </Router>

  );
}



export default App;
