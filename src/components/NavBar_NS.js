import React, { useState, useEffect } from 'react';
import "../Styles/NavBar.css";
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

// FOR V2 https://codepen.io/piyushpd139/pen/gOYvZPG

function NavBar_NS(){
  const pdfUrl = './NathanDaniel_Design_Resume.pdf'

  return (
    <>
     <nav className="NSnav altNS sticky">
      <div className = 'navContainer altNs'>
        {/*
        <Link to={`/Design`} className='navItems alt'> Design</Link>
        <Link to={`/ComputerScience`} className='navItems alt'> ??CS?? </Link>
        */}
        <Link to={`/AboutMe`} className='navItems altNS'> About Me</Link>
        <a  href={pdfUrl} without rel='noopener noreferrer' target="_blank" className='navItems altNS'>Resume</a>
  
        </div>
      </nav>
  </>
    
  );
};
export default NavBar_NS;



