// Example Header Component.

// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
