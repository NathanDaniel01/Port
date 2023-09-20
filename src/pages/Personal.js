import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";
function Personal() {
  return (
    <div id="Top" class = "mainBG">
      <Subnav/>
     <h1 class = "header center">14er</h1>
     <h1 class = "header center">Check List</h1>

             <p class = 'SubP center'>
             In my ambitious project, I meticulously designed a 14er checklist featuring
              all 58 majestic peaks towering above 14,000 feet in Colorado. Setting the metal 
              type was a laborious process, spanning five days, and involved two layers of vinyl 
              and wood type. Each checklist item was meticulously hand-inked, resulting in a total 
              of 90 distinct runs, capturing the essence of these breathtaking mountains.
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
export default Personal;