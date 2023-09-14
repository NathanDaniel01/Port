import React, { useState, useEffect } from 'react';
import "../nav.css"
const Navi = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the distance between the top of the page and your target div element
      const targetElement = document.getElementById('stopHere');
      const targetPosition = targetElement.getBoundingClientRect().top;

      // Determine if the navigation bar should be sticky
      if (targetPosition <= 0){
        setIsSticky(true)
       // console.log(isSticky)
      }
      if(targetPosition > 0){
        setIsSticky(false)
       // console.log(isSticky)
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky-nav ${isSticky ? 'stickya' : ''}`}>
      {/* Your navigation links */}
<p>Nathan</p>
    </nav>
  );
};

export default Navi;