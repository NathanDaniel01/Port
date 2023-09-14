import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
function ContactMe() {
    return (
        <div class = "mainBG">
         <Link to={`/`}>
         <a href="#top">
                 <img src="./SVG/Home_Button.svg" alt=""class="nav sticky" style={{width:'50px'}}/>
         </a>
         </Link>
             
         </div>
       );
     }

export default ContactMe;