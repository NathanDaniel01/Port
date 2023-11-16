import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function Zine() {
  return (
    <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
      <h1 class = "header center">Zine</h1>
      <p class = 'SubP center'>
          In my project detailing the various ways that I broke my phone, 
          it was byfar a complex layout that involved a nearly five hour lock-up process 
          using a Vandercook press. The zine-style presentation added an extra layer of challenge, 
          with each fold line and page requiring distinct orientation, making it one of the most intricate 
          lock-ups my professor had ever encountered. Custom cutting my lettering further intensified the project,
           resulting in a meticulously crafted and uniquely challenging endeavor.
      </p>
      <img src="./Imgs/LP/Zine/Zine_7.jpg" alt=""class="img"/>
      
      <div class="col">
        <div class="row">
          <img src="./Imgs/LP/Zine/Zine_1.jpg" alt=""class="img"/>
        </div>
        <div class="row">
          <img src="./Imgs/LP/Zine/Zine_9.jpg" alt=""class="img"/>
        </div>
        <div class="row">
          <img src="./Imgs/LP/Zine/Zine_3.jpg" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
            <img src="./Imgs/LP/Zine/Zine_4.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine/Zine_5.jpg" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
            <img src="./Imgs/LP/Zine/Zine_4.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine/Zine_5.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine/Zine_6.jpg" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
            <img src="./Imgs/LP/Zine/Zine_7.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine/Zine_8.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine/Zine_2.jpg" alt=""class="img"/>
        </div>
      </div>
      <h1 class = "SubP center">I know the prints missing, getting it next week from storage!</h1>
    
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Zine;