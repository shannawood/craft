import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">My React App</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}

export default Navigation;