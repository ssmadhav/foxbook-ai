import React from 'react';
import { Sparkles } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-brand">
          <span className="logo-icon">🦊</span>
          <span className="logo-text">FoxBook <span className="text-gradient-primary">AI</span></span>
        </div>
        
        <div className="navbar-links">
          <a href="#product" className="nav-link">Product</a>
        </div>

        <div className="navbar-actions">
          <button className="btn-primary glow-effect">
            <Sparkles size={18} />
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
