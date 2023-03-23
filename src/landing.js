import React from 'react';
import "./App.css"
import "./test.css"
import  MyCanvas from "./testings"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ParallaxDemo from './components/paralax';
import { ParallaxProvider} from 'react-scroll-parallax';
import Dropdowns from './components/dropdown';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import Letters from './components/Letters';
// I am debaiting on making the text static until I get canvas to work. I need time to disect the canvas code
// Until then,
/*
Isolate each letter,
Transform and apply on screen by % and px location
Each on is inline css to reduce the css file
apply to make text scale with the product.
then when it is fully responsive the text will transition to static 

*/
function Landing() {
    return (
        <div class = "mainBG"> 
        <a href="#top">
            <img src="./SVG/Home_Button.svg" alt=""class="nav sticky" style={{width:'50px'}}/>
            </a>
            <h2 class = {'header1'}>Nathan</h2>
            <h2 class = {'header2'}>Daniel</h2>
            <p class = {'subHeader'}>Web Developer and Graphic Designer</p>
            <Row>
                <Col>
                    <div class = {"lines1"}/>
                    <div class = {"lines2"}/>
                    <div class = {"lines3"}/>
                </Col>

                <Col>
                
                <a href="#section-1"> <div class = {"links"}>Graphic Design</div></a>
                <a href="#section-1"> <div class = {"links"}>Letterpress</div></a>
                <a href="#section-1"> <div class = {"links"}>Computer Science</div></a>
                <a href="#section-4"> <div class = {"links"}>My Experience</div></a>
                </Col>
            </Row>
           
            <div class = "BlackBG">
                <p class = "whiteText addtopspacing leftCol">
                        Hello, my name is Nate and I am a    
                        creative and  individual with a strong passion 
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
            <ParallaxProvider>
                <ParallaxDemo/>
            </ParallaxProvider>
            <div  id="section-1">
                <Dropdowns/>
                <div class = {'ContactPadding'}>    
                <Row> 
                        <Link to={`/Experience`} class = "dropTitles"id="section-4" >My Experience</Link>
                   
                </Row>
                </div>
            </div> 
            <div class = "tree4">
                    <img src="./SVG/trees_4.svg" alt="" />
                </div>
            <Footer/>
        </div>
        );
    }
    export default Landing;
    