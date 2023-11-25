import React, { useState, useEffect } from 'react';
import "../Styles/NavBar.css";
import classNames from 'classnames';
import useSticky from './usesticky';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

// FOR V2 https://codepen.io/piyushpd139/pen/gOYvZPG

function NavBar(){
  const pdfUrl = './NathanDaniel_Design_Resume.pdf'
  const { sticky, stickyRef } = useSticky();

  return (
    <>
    <div className = 'NavSpacer'/>
     <nav ref={stickyRef} className={classNames("nav", { sticky })}>
      <div className = 'navContainer'>
         {/*
        <Link to={`/Design`} className='navItems'> Design</Link>
        <Link to={`/ComputerScience`} className='navItems'> ??CS?? </Link>
        */}
        <Link to={`/AboutMe`} className='navItems'> About Me</Link>
        <a  href={pdfUrl} without rel='noopener noreferrer' target="_blank" className='navItems'>Resume</a>
  
        </div>
      </nav>
      {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`
          }}
        />
      )}

  </>
    
  );
};
export default NavBar;



