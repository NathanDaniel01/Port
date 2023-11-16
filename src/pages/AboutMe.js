import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function AboutMe() {
  return (
      <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
     <h1 class = "header center">Nathan</h1>
       <img src="./Imgs/Raskog/ras.jpg" alt=""class="PersonalImg" />
             <p class = 'SubP center'>
             Raskog's objective was to create a visually compelling instruction manual for assembling a mechanical device, using only illustrations and symbols to convey information.
      The scope manual will include illustrations for each step of the assembly process, as well as symbols and graphics to represent different tools and components. It covers all necessary information for a complete and successful assembly.
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
export default AboutMe;