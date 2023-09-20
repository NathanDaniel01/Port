import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";
function Wedding() {
  return (
    <div id="Top" class = "mainBG">
      <Subnav/>
     <h1 class = "header center">Wedding</h1>

             <p class = 'SubP center'>
             I had a fun role during my sister's wedding preparations by crafting elegant thank you cards using a C&P letterpress,
              capturing the timeless charm of classic letterpress style. These meticulously crafted cards added a personal touch to 
              her expressions of gratitude, becoming a memorable keepsake for her guests.
             </p>
     <div class="imgFlex">
         <img src="./Imgs/Raskog/ras.jpg" alt=""class="image" style={{width:'33%'}}/>
         <img src="./Imgs/Raskog/ras3.jpg" alt=""class="image" style={{width:'33%'}}/>
         <img src="./Imgs/Raskog/ras2.jpg" alt=""class="image" style={{width:'33%'}}/>
     </div>
     <div class="imgFlex">
         <img src="./Imgs/Raskog/ras4.jpg" alt=""class="image" style={{width:'33%'}}/>
         <img src="./Imgs/Raskog/ras5.jpg" alt=""class="image" style={{width:'33%'}}/>
         <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" style={{width:'33%'}}/>
     </div>
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Wedding;