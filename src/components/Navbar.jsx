import React from 'react'

const Navbar = () => {
  return (
    <>
    <header> 

    <section id="header-section">

      {/* <!-- Navbar --> */}
          <nav className="navbar">
        <div className="navbar-left">
            <img src="images/Logosil.svg" alt="Silicon Logo" className="navbar-logo" />
            <span className="navbar-title">Silicon</span>
            <a href="#features" className="navbar-link">Features</a>
        </div>
        
        <div className="navbar-right">
          <p id="dark-mode-btn">Dark Mode</p>
            <div className="dark-mode-toggle">
                <input type="checkbox" id="darkModeToggle" className="dark-mode-checkbox" />
                <label htmlFor="darkModeToggle" className="dark-mode-label">
                </label>
            <button className="contact-button">Sign in / up</button>

            </div>
        </div>
    </nav>
    </section>
  </header>

    </>
  )
}
  
export default Navbar
