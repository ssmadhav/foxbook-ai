import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-icon">🦊</span>
            <div>
              <h3>Quanfox</h3>
              <p>Innovating the E-commerce Ecosystem.</p>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="mailto:hello@quanfox.com">Contact Us: hello@quanfox.com</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Made with ❤️ for Merchants.</p>
          <p>&copy; {new Date().getFullYear()} Quanfox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
