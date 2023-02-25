import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
function Letterpress() {

  return (
   <div class = "mainBG">
        <h2 class = 'header'>Letterpress</h2>
        <p>
            Some animated Bull shit that looks cool
        </p>
        <div class = "BlackBG">
            <div class="imgFlex">
                <div  class="contain">
                    <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Raskog`}>14er Checklist</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Rant`}>Rant</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/Childrens/Childrens_1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Christmas`}>Christmas</Link>
                    </div>
                </div>
            </div>
            <div class="imgFlex">
                <div  class="contain">
                <img src="./Imgs/TShirt/TShirt1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Zine`}>Zine</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/Icons/Icons1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Icons`}>Saying</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/Cluster/Cluster2.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Cluster`}>Wedding</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Letterpress;