import './App.css';
import React from 'react';

const Navbar = ({ navigate }) => {
  return (
    <nav>
      <ul>
        <li><a href="#" onClick={() => navigate('/')}>Home</a></li>
        <li><a href="#" onClick={() => navigate('/profile')}>Profile</a></li>
        <li><a href="#" onClick={() => navigate('/newpost')}>New Post</a></li>
        <li><a href="#" onClick={() => navigate('/messages')}>Messages</a></li>
        <li><a href="#" onClick={() => navigate('/register')}>Register</a></li>
        <li><a href="#" onClick={() => navigate('/login')}>Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;