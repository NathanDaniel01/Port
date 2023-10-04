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
      <div class="col">
        <div class="row">
          <img src="./Imgs/LP/14ers_1.jpg" alt=""class="img" />
        </div>
        <div class="row">
          <img src="./Imgs/LP/14ers_2.jpg" alt=""class="img" />
        </div>
        <div class="row">
          <img src="./Imgs/LP/14ers_3.jpg" alt=""class="img" />
        </div>
      </div>
      <div class="col">
        <div class="row">
          <img src="./Imgs/LP/14ers_4.jpg" alt=""class="img" />
        </div>
        <div class="row">
          <img src="./Imgs/LP/14ers_5.jpg" alt=""class="img"/>
        </div>
        <div class="row">
          <img src="./Imgs/LP/14ers_6.jpg" alt=""class="img"/>
        </div>
      </div>
      <h1 class= "header center">Other Work</h1>
      <img src="./Imgs/LP/Rant_1.jpg" alt=""class="img"/>
      <img src="./Imgs/LP/Sayings_1.jpg" alt=""class="img"/>
      <img src="./Imgs/LP/Sayings_2.jpg" alt=""class="img"/>
      <img src="./Imgs/LP/Sayings_3.jpg" alt=""class="img"/>
      <img src="./Imgs/LP/Test_1.jpg" alt=""class="img"/>
      <img src="./Imgs/LP/Test_2.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_1.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_2.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_3.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_4.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_5.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_6.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_7.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_8.JPG" alt=""class="img"/>
      <img src="./Imgs/LP/Zine_9.JPG" alt=""class="img"/>
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Personal;