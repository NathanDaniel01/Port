import React from 'react';
import "./App.css"
import ParallaxDemo from './components/paralax';
import { ParallaxProvider} from 'react-scroll-parallax';
import GraphicDesignBox from './components/GraphicDesignBox';
import LetterPressBox from './components/LetterPressBox';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import Letters from './components/Letters';
import Navi from './components/Navi';
// I am debaiting on making the text static until I get canvas to work. I need time to disect the canvas code
// Until then,
/*
Isolate each letter,
Transform and apply on screen by % and px location
Each on is inline css to reduce the css file
apply to make text scale with the product.
then when it is fully responsive the text will transition to static 

  <div class = "BlackBG">
                <p class = "whiteText addtopspacing leftCol">
                        Hello, my name is Nate and I am a    
                        creative individual with a strong passion 
                        for graphic design, computer science, and the great outdoors. 
                        With a background in art and design, I have always been drawn to the
                        world of graphic design and love using my skills 
                        and creativity to create visually appealing and 
                        effective designs. In addition to my love for
                        design, I am also a front end web Developer
                        and enjoy learning and exploring 
                        new technologies and programming languages.
                        When I’m not busy designing or coding, you can      
                        often find me enjoying the great outdoors and
                        all that nature has to offer.
                    </p>
            </div>
*/
function Landing() {
    return (
            <div class = "mainBG"> 
            <Navi/>
            <h2 class = {'header1 sticky'}>Nathan</h2>
            <h2 class = {'header2 sticky'}>Daniel</h2>
            <ParallaxProvider>
                    <ParallaxDemo/>
                </ParallaxProvider>
            <div class = 'externalspacertest'/> 
            <div id="stopHere" className="stop-div"/>
           <GraphicDesignBox/>
           <div class='RedBG'/>
           <LetterPressBox/>
            <Footer/>
        </div>
        );
    }
    export default Landing;
    