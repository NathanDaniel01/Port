import React from "react";
import "../App.css"
import "../AppMobile.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";

function TrailFunds() {
  return (
     <div id="Top" class = "mainBG">
      <Subnav/>
     <h1 class = "header center">Trail Funds</h1>
     <div>GOcode Award Stamp </div>
      <p class = 'SubP'>
        Design Work UX UI Wireframes Mobile First Logo Creation, Slide Deck Creation
      </p>
      <p class = 'SubP'>
        Coding work
        At Trail Funds My Role switched alot. I took on Trail Funds as a side project my junor year, 
        where I was assigned to the role of the UX/UI as the semester continued, I started helping on 
        the Geo-fence and location data through swift. I then became the back-end lead working on 
        redesigning the database and creating API calls that the client requested. the end desision was to run on a 
        SQLlite DB along with Flask API in Python. We won 3rd at GoCode Colorado 2022 along with peoples choice award.
      </p>
      <div  class="containSub">
            <img src="./Imgs/LostDog4.jpg" alt=""class="imagesSub" />                  
        </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/LostDog2.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/LostDog3.jpg" alt=""class="imageSub" /> 
        </div>   
        <div  class="containSub">
            <img src="./Imgs/LostDog5.jpg" alt=""class="imageSub" />                     
        </div>   
      </div>  
     <Footer style={{margin: "100px auto auto auto"}}/>
    </div>
     
  );
}

export default TrailFunds;