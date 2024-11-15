import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode'; 

const Navbar = () => {
  return (
    <>
      <header>
        <section id="header-section">
          <nav className="navbar">
            <div className="navbar-left">
              <img src="images/Logosil.svg" alt="Silicon Logo" className="navbar-logo" />
              <span className="navbar-title">Silicon</span>
              <a href="#features" className="navbar-link">Features</a>
              {/* Home Button */}
              <Link to="/" className="navbar-link">Home</Link>
              {/* Contacts Button */}
              <Link to="/contact" className="navbar-link">Contacts</Link> 
            </div>

            <div className="navbar-right">
              <DarkMode />
              <button className="contact-button">Sign in / up</button>
            </div>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Navbar;
