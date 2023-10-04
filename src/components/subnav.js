import React, { useState, useEffect } from 'react';
import "../subnav.css"
import "../navResponcive.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

// FOR V2 https://codepen.io/piyushpd139/pen/gOYvZPG

const Subnav = () => {
  const pdfUrl = './Imgs/NathanDaniel_Design_Resume.pdf';

  const openPdfInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  //const [isGD, setisGD] = useState(false); for later use

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 750) {
          setIsMobileNavOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);

      return () => {
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
    <nav className={"stickyb "}>
     <div className="nav-header-b">
        <button className="hamburger-b" onClick={toggleMobileNav}>
          <div className={`bar-b ${isMobileNavOpen ? 'open' : ''}`}></div>
          <div className={`bar-b ${isMobileNavOpen ? 'open' : ''}`}></div>
          <div className={`bar-b ${isMobileNavOpen ? 'open' : ''}`}></div>
        </button>
        <ul className={`nav-links-b ${isMobileNavOpen ? 'open' : ''}`}>
      <li>
        <Link to={`/`}>
        <a class="Home-b"  href="#Tobb">Nathan Daniel</a>
        </Link>
        </li>
      <li className="dropdown-b">
        <a class="dropdownItem-b"  href="#Topb" onClick={toggleDropdown}>Graphic Design </a>
        <div className="dropdown-content-b">
            <Link to={`/Raskog`}>
                <a href="#Topb">Raskog</a>
            </Link>
            <Link to={`/Kunikos`}>
                <a href="#Topb">Kunikos</a>
            </Link>
            <Link to={`/LostDog`}>
                <a href="#Topb">LostDog</a>
            </Link>
            <Link to={`/SixPack`}>
                <a href="#Topb">SixPack</a>
            </Link>
            <Link to={`/Folly`}>
                <a href="#Topb">Folly</a>
            </Link>
            <Link to={`/Cluster`}>
                <a href="#Topb">Cluster</a>
            </Link>
        </div>
      </li>
      <li className="dropdown-b">
        <a class="dropdownItem-b" href="#Topb" onClick={toggleDropdown}> Experience </a>
        <div className="dropdown-content-b">
            <Link to={`/Trailfunds`}>
                <a href="#Topb">Trail Funds</a>
            </Link>
            <Link to={`/FWS`}>   
                <a href="#Topb">FWS</a>
            </Link>
        </div>
      </li>
      <li className="dropdown-b">
        <a class="dropdownItem-b" href="#Topb" onClick={toggleDropdown}>Letterpress </a>
        <div className="dropdown-content-b">
            <Link to={`/Zine`}>
                <a href="#Topb">Zine</a>
            </Link>
            <Link to={`/Wedding`}>   
                <a href="#Topb">Wedding</a>
            </Link>
        </div>
      </li>
        <li>
                <a href="#Topb" onClick={openPdfInNewTab} >Resume</a>
        </li>
    </ul>
     </div>
  </nav>
  );
};

export default Subnav;