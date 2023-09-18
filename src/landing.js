import React from 'react';
import "./App.css"
import "./AppMobile.css"
import ParallaxDemo from './components/paralax';
import { ParallaxProvider} from 'react-scroll-parallax';
import GraphicDesignBox from './components/GraphicDesignBox';
import LetterPressBox from './components/LetterPressBox';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import Letters from './components/Letters';
import Navi from './components/Navi';
function Landing() {
    return (
            <div class = "mainBG"> 
                <h2 class = {'header1 sticky'}>Nathan</h2>
                <h2 class = {'header2 sticky'}>Daniel</h2>
                <ParallaxProvider>
                    <ParallaxDemo/>
                </ParallaxProvider>
                <div class = 'externalspacertest'/> 
                <Navi/>
                <div id="stopHere" className="stop-div"/>
                <GraphicDesignBox id="GD"/>
                <LetterPressBox id="LP"/>
                <Footer/>
        </div>
        );
    }
    export default Landing;
    