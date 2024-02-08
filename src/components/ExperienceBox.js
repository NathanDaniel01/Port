import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function ExperienceBox(){
    return(
    <div id="EP"class = "Box GD"> 
        <div class="imgFlex">
            <div  class="contain L">
            <Link to={`/TrailFunds`}>
                <img src="./SVG/Trailfunds.svg" alt=""class="image" />
                <div class="middle">
                    <a class="titlesWhitetoRed" >TrailFunds Case Study</a>
                </div>
            </Link>
            </div>
            <div  class="contain R">
                <Link to={`/Ecom`}>
                <img src="./Imgs/Ecom/LandingColor.png" alt=""class="image" />
                <div class="middle">
                    <a class="titlesWhitetoRed">E-Commerce</a>
                </div>
                </Link>
            </div>   
        </div>  
    </div>
   );
}
export default ExperienceBox;