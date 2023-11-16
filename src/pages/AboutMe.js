import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function AboutMe() {
  return (
      <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>

     <h1 class = "header center">Nathan</h1>
             <p class = 'SubP center'>
            I need to get better at talking about myself. But anywho, hello, my name is nathan daniel and I like art
            i was a raft guide on the Arkansas river and enjoy anything outside. I graduated in computer science and 
            also got a minor in graphic design. I am currently looking for my first job in the UX/UI feild because I 
            will be able to utilize my design skills along with my knowladge of codeing.
             </p>
     
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default AboutMe;