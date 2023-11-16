import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function GraphicDesign() {
  return (
      <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
        <h2 class = 'header'>Design</h2>
        <p>
            Applied
        </p>
        <div class = "BlackBG">
            <div class="imgFlex">
                <div  class="contain">
                    <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Raskog`}>Räskog</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/SixPack/Detail_8.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/SixPack`}>6-pack</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/Kunikos/Kunikos1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Kunikos`}>Kunikos</Link>
                    </div>
                </div>
            </div>
            <div class="imgFlex">
                <div  class="contain">
                <img src="./Imgs/TShirt/TShirt1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/T-Shirt`}>T-Shirt</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/Icons/Icons1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Icons`}>Icons</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/Cluster/Cluster2.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Cluster`}>Cluster</Link>
                    </div>
                </div>
            </div>
            <div class="imgFlex">
                <div  class="contain">
                    <img src="./Imgs/SketchBook/SketchBook1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Hello`}>SketchBook</Link>
                    </div>
                </div>
                <div  class="contain">
                <img src="./Imgs/Interview/Interview1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Interview`}>Interview</Link>
                    </div>
                </div>
                <div  class="contain">
                    <img src="./Imgs/Police/Police1.jpg" alt=""class="image" style={{width:'100%'}}/>
                    <div class="middle">
                        <Link class="titlesWhitetoRed" to={`/Police`}>Police</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default GraphicDesign;