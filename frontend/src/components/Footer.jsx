import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>3legant.</h2>
        </div>
        <div className="gift">
             <p>|   Gift & Decoration Store</p>
             </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#product">Product</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 3legant. All rights reserved</p>
        <div className="footer-terms">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
