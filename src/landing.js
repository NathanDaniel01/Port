import React from 'react';
import "./App.css"
import "./AppMobile.css"
import ParallaxDemo from './components/Parallax';
import { ParallaxProvider} from 'react-scroll-parallax';
import GraphicDesignBox from './components/GraphicDesignBox';
import LetterPressBox from './components/LetterPressBox';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import Leaf from './components/Leafs';
import Static from './components/Static';
import ExperienceBox from './components/ExperienceBox';
import NavBar from './components/NavBar';
import NavBar_NS from "./components/NavBar_NS";
function Landing() {
    return (
         <div id="Top" class = "mainBG"> 
            <a href="#">
            <img className="HomeBtn" src="./SVG/camper.svg" />
            </a>

            <NavBar_NS/>
            <Leaf/>
            <h2 class = {'header1 sticky'}>Nathan</h2>
            <h2 class = {'header2 sticky'}>Daniel</h2>
            
            <ParallaxProvider>
                <ParallaxDemo/>
            </ParallaxProvider>
            <Static/>
            <div class = 'externalspacertest hide'/> 
            <NavBar/>
            
            <ExperienceBox id="GD"/>
            <GraphicDesignBox/>
            <LetterPressBox/>
            <Footer/>
        </div>
    );
}
export default Landing;
    