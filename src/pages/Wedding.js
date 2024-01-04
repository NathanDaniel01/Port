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
     <h1 class = "header center">A Special Freelance</h1>

             <p class = 'SubP center'>
                 I was commissioned to create unique letterpress thank you notes 
                 for my sister’s wedding. The design leans into the timeless charm of 
                 the classic letterpress style, while bringing in aspects of my sister & 
                 her husband’s interests. I printed the thank you notes on a 1910 C&P letterpress to 
                 create a memorable keepsake for the guests at her wedding.
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



