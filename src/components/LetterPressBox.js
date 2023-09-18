import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function LetterPressBox(){
    return(
    <div id="LP"class = "Box"> 
        <h5>Letterpress:</h5>
        <div class="imgFlex">
            <div  class="contain L">
                <img src="./Imgs/Personal.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>14ers</Link>
                </div>
            </div>
            <div  class="contain R">
                <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/SixPack`}>6-pack</Link>
                </div>
            </div>   
        </div>  
        <div class="imgFlex">
            <div  class="contain Bottom L">
                <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>Räskog</Link>
                </div>
            </div>
            <div  class="contain Bottom R">
                <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/SixPack`}>6-pack</Link>
                </div>
            </div>   
        </div>     
    </div>
   );
}
export default LetterPressBox;