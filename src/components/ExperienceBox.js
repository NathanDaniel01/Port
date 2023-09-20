import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function ExperienceBox(){
    return(
    <div id="EP"class = "Box"> 
        <h5>Experience:</h5>
        <div class="imgFlex">
            <div  class="contain Bottom L">
                <img src="./SVG/Trailfunds.svg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/TrailFunds`}>TrailFunds</Link>
                </div>
            </div>
            <div  class="contain Bottom R">
                <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/FWS`}>FWS</Link>
                </div>
            </div>   
        </div>  
    </div>
   );
}
export default ExperienceBox;