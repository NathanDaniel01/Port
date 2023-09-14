import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function GraphicDesignBox(){
    return(
    <div class = "Box GD"> 
        <h5>Graphic Design:</h5>
        <div class="imgFlex">
            <div  class="contain L">
                <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>Räskog</Link>
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
            <div  class="contain L">
                <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>Räskog</Link>
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
            <div  class="contain" style={{ margin: "5px 5px 120px auto"}}>
                <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>Räskog</Link>
                </div>
            </div>
            <div  class="contain" style={{ margin: "5px auto 120px 5px"}}>
                <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/SixPack`}>6-pack</Link>
                </div>
            </div>   
        </div>     
    </div>
   );
}
export default GraphicDesignBox;