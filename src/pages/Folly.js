import React from "react";
import "../App.css"
import "../AppMobile.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";
function Folly() {
  return (
    <div id="Top" class = "mainBG">
      <Subnav/>
     <h1 class = "header center">Folly</h1>
        <p class = 'SubP center'>
        In the project that I call Folly, I embarked on the creation of a unique Dislplay serif typeface inspired 
        by the intricate patterns of trees, leaves, and foliage. My objective was to craft a versatile typeface 
        that remained legible and visually engaging at both small and large sizes. The result is a meticulously 
        designed typeface that seamlessly combines organic inspiration with practical readability for a wide range 
        of design applications.I started with a existing typeface as the base of the design.
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