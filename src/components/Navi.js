// src/StickyNav.js
import React, { useState, useEffect } from 'react';
import '../nav.css'
const Navi = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the distance between the top of the page and your target div element
      const targetElement = document.getElementById('stopHere');
      const targetPosition = targetElement.getBoundingClientRect().top;

      // Determine if the navigation bar should be sticky
      setIsSticky(targetPosition < 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navi;