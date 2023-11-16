import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function ComputerScience() {
  
  return (
    <div class = "mainBG">
         <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
         <h2 class = 'header'>Computer Science</h2>
         <p>
             What do I Add here
         </p>
         <div class = "BlackBG">
             <div class="imgFlex">
                 <div  class="contain">
                     <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" style={{width:'100%'}}/>
                     <div class="middle">
                         <Link class="titlesWhitetoRed" to={`/TrailFunds`}>TrailFunds</Link>
                     </div>
                 </div>
                 <div  class="contain">
                     <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
                     <div class="middle">
                         <Link class="titlesWhitetoRed" to={`/Portfolio`}>Portfolio</Link>
                     </div>
                 </div>
                 <div  class="contain">
                     <img src="./Imgs/Childrens/Childrens_1.jpg" alt=""class="image" style={{width:'100%'}}/>
                     <div class="middle">
                         <Link class="titlesWhitetoRed" to={`/NY-Limes`}>NY-Limes</Link>
                     </div>
                 </div>
             </div>
         </div>
         <Footer/>
     </div>
   );
}

export default ComputerScience;