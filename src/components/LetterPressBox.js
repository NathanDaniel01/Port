import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function LetterPressBox(){
    return(
    <div id="LP"class = "Box"> 
        <div class="imgFlex">
            <div  class="contain Bottom L">
                <Link to={`/Zine`}>
                <img src="./Imgs/LP/Zine/Zine_5.jpg" alt=""class="image" />
                <div class="middle">
                    <a class="titlesWhitetoRed" >Letterpress</a>
                </div>
                </Link>
            </div>
            <div  class="contain Bottom R">
                <Link to={`/Wedding`}>
                <img src="./Imgs/Wedding/Wed_3.jpg" alt=""class="image" />
                <div class="middle">
                    <a class="titlesWhitetoRed">Freelance</a>
                </div>
                </Link>
            </div>   
        </div>  
    </div>
   );
}
export default LetterPressBox;