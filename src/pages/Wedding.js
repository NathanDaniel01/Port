import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function Wedding() {
  return (
    <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
     <h1 class = "header center">Wedding</h1>

             <p class = 'SubP center'>
             I had a fun role during my sister's wedding preparations by crafting elegant thank you cards using a C&P letterpress,
              capturing the timeless charm of classic letterpress style. These meticulously crafted cards added a personal touch to 
              her expressions of gratitude, becoming a memorable keepsake for her guests.
             </p>
    
      <div class="col">
        <div class="row">
        <img src="./Imgs/Wedding/Wed_1.jpg" alt=""class="img" />
        </div>
        <div class="row">
        <img src="./Imgs/Wedding/Wed_2.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/Wedding/Wed_3.jpg" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
        <img src="./Imgs/Wedding/Wed_4.jpg" alt=""class="img" />
        </div>
        <div class="row">
        <img src="./Imgs/Wedding/Wed_5.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/Wedding/Wed_6.jpg" alt=""class="img"/>
        </div>
      </div>
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Wedding;



