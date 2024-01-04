import React from "react";
import "../App.css"
import "../sub.css"
import "../AppMobile.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function Kunikos() {
  return (
    <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
      <h1 class = "header center">Menu Redesign</h1>
      <p class = 'SubP center'>
      In this project, I was challenged to redesign a menu for Kunikos. 
      I leaned into the art style from the Edo period of japan. that was then 
      paired with a modern typeface to bring the menu into the 21st century.
      </p>
      <div class="imgFlexSub">
        <div  class="containSub">
          <img src="./Imgs/Kunikos/Kunikos1.jpg" alt=""class="imagesSub" /> 
          </div>
          <div  class="containSub">
          <img src="./Imgs/Kunikos/Kunikos2.jpg" alt=""class="imagesSub" />                  
        </div>
      </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Kunikos/Kunikos3.jpg" alt=""class="imagesSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/Kunikos/Kunikos4.jpg" alt=""class="imagesSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/Kunikos/Kunikos5.jpg" alt=""class="imagesSub" />                     
        </div>   
      </div>  
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Kunikos/Kunikos6.jpg" alt=""class="imagesSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/Kunikos/Kunikos7.jpg" alt=""class="imagesSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/Kunikos/Kunikos8.jpg" alt=""class="imagesSub" />                     
        </div>   
      </div>  
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Kunikos;