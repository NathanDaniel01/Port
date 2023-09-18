import React, { useState, useEffect } from 'react';
import "../nav.css"
import "../navResponcive.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

// FOR V2 https://codepen.io/piyushpd139/pen/gOYvZPG

const Navi = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
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
    const handleResize = () => {
        if (window.innerWidth >= 750) {
          setIsMobileNavOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
      };
    
      const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };
  return (
    <nav className={`sticky-nav ${isSticky ? 'stickya' : ''}`}>
     <div className="nav-header">
        <button className="hamburger" onClick={toggleMobileNav}>
          <div className={`bar ${isMobileNavOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileNavOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileNavOpen ? 'open' : ''}`}></div>
        </button>
        <a class="Home mobile"  href="#">Nathan Daniel</a>
        <ul className={`nav-links ${isMobileNavOpen ? 'open' : ''}`}>
      <li><a class="Home desktop"  href="#">Nathan Daniel</a></li>
      <li className="dropdown">
        <a class="dropdownItem"  href="#GD" onClick={toggleDropdown}>Graphic Design </a>
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
        <a class="dropdownItem" href="#LP" onClick={toggleDropdown}>Letterpress </a>
        <div className="dropdown-content">
            <Link to={`/Personal`}>
                <a href="#">14ers</a>
            </Link>
            <Link to={`/Rant`}> 
                <a href="#">Rant</a>
            </Link>
            <Link to={`/Wedding`}>   
                <a href="#">Wedding</a>
            </Link>
            <Link to={`/Zine`}>
                <a href="#Top">Zine</a>
            </Link>
        </div>
      </li>
      <li><a href="#">Reach Out</a></li>
      <li><a href="#">Resume</a></li>
    </ul>
     </div>
  </nav>
  );
};

export default Navi;