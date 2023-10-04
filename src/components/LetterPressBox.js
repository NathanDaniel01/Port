import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function LetterPressBox(){
    return(
    <div id="LP"class = "Box"> 
        <h5>Letterpress:</h5>
        <div class="imgFlex">
            <div  class="contain Bottom L">
                <img src="./Imgs/LP/Zine_5.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Zine`}>Zine</Link>
                </div>
            </div>
            <div  class="contain Bottom R">
                <img src="./Imgs/Wedding/Wed_3.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Wedding`}>Wedding</Link>
                </div>
            </div>   
        </div>  
        {/*
        <div class="imgFlex">
            <div  class="contain L">
                <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Rant`}>Rant</Link>
                </div>
            </div>   
            <div  class="contain Bottom R">
                <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Zine`}>Zine</Link>
                </div>
            </div>   
        </div>   
    */ }  
    </div>
   );
}
export default LetterPressBox;