import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";
function Rant() {
  return (
    <div id="Top" class = "mainBG">
      <Subnav/>
     <h1 class = "header center">Rant</h1>

             <p class = 'SubP center'>
             It's becoming frustrating how hiking trails are getting increasingly crowded.
              The irony lies in the notion of embarking on adventures to explore the wild, 
              only to find it less wild than expected. This has given me the saying
               "Boldly Go Where Millions Have Gone Before," highlighting the paradox of 
               seeking that wild adventure in well-trecked paths.
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
export default Rant; 