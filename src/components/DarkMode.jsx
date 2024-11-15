import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleDarkModeToggle = (e) => {
    setIsDarkMode(e.target.checked);
  };

  return (
    <>
      <p id="dark-mode-btn">Dark Mode</p>
      <div className="dark-mode-toggle">
        <input 
          type="checkbox" 
          id="darkModeToggle" 
          className="dark-mode-checkbox"
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
        />
        <label htmlFor="darkModeToggle" className="dark-mode-label">
        </label>
      </div>
    </>
  );
};

export default DarkModeToggle;