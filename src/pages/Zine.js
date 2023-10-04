import React from "react";
import "../App.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";
function Zine() {
  return (
    <div id="Top" class = "mainBG">
      <Subnav/>
      <h1 class = "header center">Zine</h1>
      <p class = 'SubP center'>
          In my project detailing the various mishaps that befell my phone, 
          I embarked on a complex endeavor that involved a nearly five hour lock-up process 
          using a Vandercook press. The zine-style presentation added an extra layer of challenge, 
          with each fold line and page requiring distinct orientation, making it one of the most intricate 
          lock-ups my professor had ever encountered. Custom cutting my lettering further intensified the project,
           resulting in a meticulously crafted and uniquely challenging endeavor.
      </p>
      <img src="./Imgs/LP/Zine_7.JPG" alt=""class="img"/>
      
      <div class="col">
        <div class="row">
          <img src="./Imgs/LP/Zine_1.JPG" alt=""class="img"/>
        </div>
        <div class="row">
          <img src="./Imgs/LP/Zine_9.JPG" alt=""class="img"/>
        </div>
        <div class="row">
          <img src="./Imgs/LP/Zine_3.JPG" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
            <img src="./Imgs/LP/Zine_4.JPG" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine_5.JPG" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
            <img src="./Imgs/LP/Zine_4.JPG" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine_5.JPG" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine_6.JPG" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
            <img src="./Imgs/LP/Zine_7.JPG" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine_8.JPG" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Zine_2.JPG" alt=""class="img"/>
        </div>
      </div>
      <h1 class = "SubP center">I know the prints missing, getting it next week from storage!</h1>
      <h1 class = "header center">Other Work</h1>
      <div class="col">
        <div class="row">
        <img src="./Imgs/LP/Test_1.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Test_2.JPG" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Sayings_2.jpg" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
        <img src="./Imgs/LP/Sayings_1.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Sayings_3.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/Rant_1.jpg" alt=""class="img"/>
        </div>
      </div>
      <div class="col">
        <div class="row">
        <img src="./Imgs/LP/14ers_1.jpg" alt=""class="img"/>
        </div>
        <div class="row">
        <img src="./Imgs/LP/14ers_2.jpg" alt=""class="img"/>
        </div>   
      </div>
    
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Zine;