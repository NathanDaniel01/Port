import React, { useState, useEffect } from 'react';
import "../nav.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

// FOR V2 https://codepen.io/piyushpd139/pen/gOYvZPG

const Navi = () => {
  const [isSticky, setIsSticky] = useState(false);
  //const [isGD, setisGD] = useState(false); for later use

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
    <ul>
      <li><a class="Home"  href="#">Nathan Daniel</a></li>
      <li className="dropdown">
        <a class="dropdownItem" href="#GD">Graphic Design </a>
        <div className="dropdown-content">
            <Link to={`/Raskog`}>
                <a href="#Top">Raskog</a>
            </Link>
            <Link to={`/Kunikos`}>
                <a href="#Top">Kunikos</a>
            </Link>
            <Link to={`/LostDog`}>
                <a href="#Top">LostDog</a>
            </Link>
            <Link to={`/SixPack`}>
                <a href="#Top">SixPack</a>
            </Link>
            <Link to={`/Folly`}>
                <a href="#Top">Folly</a>
            </Link>
            <Link to={`/Cluster`}>
                <a href="#Top">Cluster</a>
            </Link>
        </div>
      </li>
      <li className="dropdown">
        <a class="dropdownItem" href="#LP">Letterpress </a>
        <div className="dropdown-content">
          <a href="#">14ers</a>
          <a href="#">Rant</a>
          <a href="#">ThankYou</a>
          <a href="#">Zine</a>
        </div>
      </li>
      <li><a href="#">Reach Out</a></li>
      <li><a href="#">Resume</a></li>
    </ul>
  </nav>
  );
};

export default Navi;