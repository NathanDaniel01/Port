import React from 'react';
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function GraphicDesignBox(){
    return(
    <div id="GD"class = "Box GD"> 
        <h5>Graphic Design:</h5>
        <div class="imgFlex">
            <div  class="contain L">
                <Link to={`/Raskog`}>
                    <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >Räskog</a>
                    </div>
                </Link>
            </div>
            <div  class="contain R">
                <Link  to={`/Kunikos`}>
                    <img src="./Imgs/Kunikos.jpg" alt=""class="image" />
                    <div class="middle">
                            <a href="#top"class="titlesWhitetoRed">Kunikos</a>
                    </div>
                </Link>
            </div>   
        </div>  
        <div class="imgFlex">
            <div  class="contain L">
                <Link to={`/LostDog`}>
                    <img src="./Imgs/LostDog.jpg" alt=""class="image" />
                    <div class="middle">
                    <a class="titlesWhitetoRed" > Lost Dog </a>
                        
                    </div>
                </Link>
            </div>
            <div  class="contain R">
                <Link to={`/SixPack`}>
                    <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                    <div class="middle">
                    <a class="titlesWhitetoRed" >6-pack</a>
                    </div>
                </Link>
            </div>   
        </div>  
        <div class="imgFlex">
            <div  class="contain Bottom L" >
                <Link to={`/Folly`}>
                    <img src="./Imgs/Folly.jpg" alt=""class="image" />
                    <div class="middle">
                    <a class="titlesWhitetoRed" >Folly</a>
                    </div>
                </Link>
            </div>
            <div  class="contain Bottom R" >
                <Link to={`/Cluster`}>
                    <img src="./Imgs/Cluster.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >Cluster</a>
                    </div>
                </Link>
            </div>   
        </div>     
    </div>
   );
}
export default GraphicDesignBox;