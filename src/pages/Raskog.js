import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function Raskog() {
  return (
    <div id="Top" class = "mainBG"> 
          <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
  
      <NavBar_Alt/>
     <h1 class = "header center">Techical Drawings</h1>
             <p class = 'SubP center'>
             Following the assembly manual from Ikea, this was one of the 
             hardest tasks I have been assigned. as the goal was to create a 
             visually compelling instruction manual for assembling a mechanical 
             device, using only illustrations and symbols to convey information.
             </p>
      <div  class="containSub">
          <img src="./Imgs/Raskog/ras.jpg" alt=""class="imagesSub" />                  
      </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Raskog/ras2.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/Raskog/ras5.jpg" alt=""class="imageSub" />                  
        </div> 
      </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/Raskog/ras4.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/Raskog/ras3.jpg" alt=""class="imageSub" />                  
        </div>
      </div>
      
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Raskog;