import React from "react";
import "../App.css"
import "../AppMobile.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function LostDog() {
  return (
  
    <div id="Top" class = "mainBG">
     
      <a href="#">
      <Link to={`/`}>
        <img className="HomeBtn" src="./SVG/camper.svg" />
        </Link>
      </a>
  
      <NavBar_Alt/>
      <h1 class = "header center">Poster Redesign</h1>
      <p class = 'SubP center'>
            In this project, I was challenged to find a 
            poster or flyer that was poorly designed and redesign 
            it to replace the original. I utilized a  handmade typeface 
            in the end poster to make it feel more personal.
      </p>
      <div  class="containSub">
            <img src="./Imgs/LostDog4.jpg" alt=""class="imagesSub" />                  
        </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/LostDog2.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/LostDog3.jpg" alt=""class="imageSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/LostDog5.jpg" alt=""class="imageSub" />                     
        </div>   
      </div>  
      <Footer style={{margin: "100px auto auto auto"}}/>
    </div>
   );
 }
export default LostDog;