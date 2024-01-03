import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function GraphicDesignBox(){
    return(
    <div id="GD"class = "Box "> 
        <div class="imgFlex">
            <div  class="contain L">
                <Link to={`/Raskog`}>
                    <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >Techical Drawings</a>
                    </div>
                </Link>
            </div>
            <div  class="contain R">
                <Link  to={`/Kunikos`}>
                    <img src="./Imgs/Kunikos.jpg" alt=""class="image" />
                    <div class="middle">
                            <a href="#top"class="titlesWhitetoRed">Menu Redesign</a>
                    </div>
                </Link>
            </div>   
        </div>  
        <div class="imgFlex">
            <div  class="contain L">
                <Link to={`/LostDog`}>
                    <img src="./Imgs/LostDog.jpg" alt=""class="image" />
                    <div class="middle">
                    <a class="titlesWhitetoRed" >Poster Redesign</a>
                        
                    </div>
                </Link>
            </div>
            <div  class="contain R">
                <Link to={`/SixPack`}>
                    <img src="./Imgs/SixPack/Detail_8.jpg" alt=""class="image" />
                    <div class="middle">
                    <a class="titlesWhitetoRed" >Package Redesign</a>
                    </div>
                </Link>
            </div>   
        </div>  
        <div class="imgFlex">
            <div  class="contain L" >
                <Link to={`/Folly`}>
                    <img src="./Imgs/Folly.jpg" alt=""class="image" />
                    <div class="middle">
                    <a class="titlesWhitetoRed" >Typeface Design</a>
                    </div>
                </Link>
            </div>
            <div  class="contain R" >
                <Link to={`/Cluster`}>
                    <img src="./Imgs/Cluster.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >Water Color</a>
                    </div>
                </Link>
            </div>   
        </div>     
    </div>
   );
}
export default GraphicDesignBox;