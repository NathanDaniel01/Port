import React from "react";
import "../App.css"
import "../AppMobile.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function Multi() {
  return (
  
    <div id="Top" class = "mainBG">
     
      <a href="#">
      <Link to={`/`}>
        <img className="HomeBtn" src="./SVG/camper.svg" />
        </Link>
      </a>
  
      <NavBar_Alt/>
      <h1 class = "header center">E-commerce UX</h1>
      <p class = 'SubP center'>
            In this protfolio Project, I challenged myself to create a UX that 
            allows me to demmonstrate what I learned from my Google UX Certification from user reaserch to prototyping and mocks.
            A part of this process was through a guided user experience that can help people find the right trip for them. I also wanted to dempnstrate my skills in figma 
            and to implemented  variable states inside of figma to make it mulit-branded, making it unique to a company. 
      </p>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Ecom/LandingColor.png" alt=""class="imagesSub" />
          </div>                  
          <div  class="containSub">
            <img src="./Imgs/Ecom/Landing.png" alt=""class="imagesSub" />                  
          </div>
      </div>

      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Ecom/FishRaft.png" alt=""class="imagesSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/Ecom/Age.png" alt=""class="imagesSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/Ecom/Active_1.png" alt=""class="imagesSub" />                     
        </div>   
        </div> 
        <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Ecom/IntSD.png" alt=""class="imagesSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/Ecom/IntFull.png" alt=""class="imagesSub" />                     
        </div>  
      </div> 
{/*
      <p class = 'SubP center'> multi Branding</p>
      <p class = 'SubP center'>Using figmas new variable states to allow me to create a 
      templated brand idenity that can change in the click of a button
      </p>
  
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Ecom/ARTLanding.png" alt=""class="imagesSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/Ecom/EchoLanding.png" alt=""class="imagesSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/Ecom/NohasLanding.png" alt=""class="imagesSub" />                     
        </div>   
        <div  class="containSub">
            <img src="./Imgs/Ecom/RGRLanding.png" alt=""class="imagesSub" />                     
        </div>   
      </div>  
  */}

      <Footer style={{margin: "100px auto auto auto"}}/>
    </div>
   );
 }
export default Multi;