import React from "react";
import "../App.css"
import "../sub.css"
import {Link} from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function SixPack() {
  return (
   <div class = "mainBG">
     <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
        <h1 class = "header center">6 Pack</h1>
                <p class = 'SubP center'>
                The goal of this project was to reimagine Samuel Smith Brewery's 6-pack beer
                packaging by embracing a Victorian-style aesthetic that pays homage to the brewery's heritage.
                </p>
        
          
        <div class="imgFlexSub">
            <div  class="containSub">
                <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="imagesSub" /> 
                <img src="./Imgs/SixPack/Detail_5.jpg" alt=""class="imagesSub" />                  
                <img src="./Imgs/SixPack/Detail_8.jpg" alt=""class="imagesSub" /> 
            </div>
            <div  class="containSub">
                <img src="./Imgs/SixPack/six_pack_2.jpg" alt=""class="imagesSub" />                  
                <img src="./Imgs/SixPack/six_pack_3.jpg" alt=""class="imagesSub" />   
                <img src="./Imgs/SixPack/Detail_7.jpg" alt=""class="imagesSub" />                  
            </div>
        </div>
        <div  class="containSub">
                <img src="./Imgs/SixPack/six_pack_1.jpg" alt=""class="imagesSub" /> 
            </div>
        <Footer/>
    </div>
  );
}

export default SixPack;