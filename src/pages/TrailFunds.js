import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';

function TrailFunds() {
  return (
   <div>
        <h2 class = 'header1'>TrailFunds</h2>
        <p>
        At Trail Funds My Role switched alot. I took on Trail Funds as a side project my junor year, 
        where I was assigned to the role of the UX/UI as the semester continued, I started helping on 
        the Geo-fence and location data through swift. I then became the back-end lead working on 
        redesigning the database and creating API calls that the client requested. We decided on a 
        SQLlite DB running through along with Flask API in python.
        </p>
        <div class="imgFlex">
            <img src="./Imgs/six_pack_1.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/six_pack_2.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div>
            Lets put links, Refrence and Github here
        </div>
        <Footer/>
    </div>
  );
}

export default TrailFunds;