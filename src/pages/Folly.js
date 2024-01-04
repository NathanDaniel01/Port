import React from "react";
import "../App.css"
import "../AppMobile.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function Folly() {
  return (
    <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
     <h1 class = "header center">Typeface Design</h1>
        <p class = 'SubP center'>
        I set out to create a unique display serif typeface inspired 
        by the intricate patterns of trees, leaves, and foliage. The goal 
        was to keep it legible and visually engaging at both small and large sizes. 
        The result is a meticulously designed typeface that seamlessly combines organic 
        inspiration with practical readability.
        </p>
        <div  class="containSub">
          <img src="./Imgs/Folly/Folly1.jpg" alt=""class="imagesSub" /> 
        </div>
        <div  class="containSub">
          <img src="./Imgs/Folly/Folly2.jpg" alt=""class="imagesSub" /> 
        </div>
        <div  class="containSub">
          <img src="./Imgs/Folly/Folly3.jpg" alt=""class="imagesSub" /> 
        </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Folly/Folly4.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/Folly/Folly5.jpg" alt=""class="imageSub" />                     
        </div>    
      </div>  
      <div class="imgFlexSub">
      <div  class="containSub">
            <img src="./Imgs/Folly/Folly6.jpg" alt=""class="imageSub" />                     
        </div>  
        <div  class="containSub">
            <img src="./Imgs/Folly/Folly7.jpg" alt=""class="imageSub" />                  
        </div>
      </div>  
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Folly/Folly8.jpg" alt=""class="imageSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/Folly/Folly9.jpg" alt=""class="imageSub" />                     
        </div>   
      </div>  
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Folly;