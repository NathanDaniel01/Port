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
                    <Link to={`/GraphicDesign`}> <div class = {"links"}>Graphic Design</div></Link>
                    <Link to={`/Letterpress`}> <div class = {"links"}>Letterpress</div></Link>
                    <Link to={`/ComputerScience`}> <div class = {"links"}>Computer Science</div></Link>
                    <Link to={`/ContactMe`}> <div class = {"links"}>Contact Me</div></Link>
                </Col>
            </Row>
                <div>
                    <div class = {"lines4"}/>
                    <div class = {"lines5"}/>
                    <div class = {"lines6"}/>
                </div>
            
            <Row>
                <div class="col Drop720">
                    <div class = "BreathingRoom"/>
                </div>
                <Col>
                <div class = "BreathingRoom Drop720"/>
                    <p>
                    <span class = "span1">H</span>ello, my name is Nate and I am a    
                        creative and tech-savvy individual with a strong passion 
                        for graphic design, computer science, and the great outdoors. 
                        With a background in art and design, I have always been drawn to the
                        world of graphic design and love using my skills 
                        and creativity to create visually appealing and 
                        effective designs. In addition to my love for
                        design, I am also interested in computer
                        science and enjoy learning and exploring 
                        new technologies and programming languages.
                        When I’m not busy designing or coding, you can      
                        often find me enjoying the great outdoors and
                        all that nature has to offer.
                    </p>
                </Col>  
            </Row>
            <div class = "BreathingRoom"/>
            <div class = "BlackBG">
            <Row>
                <Col>
                        <p class = "whiteText addtopspacing">
                            <span class = "span2">w</span>hether it’s rafting down a raging 
                            river or hiking through the mountains, I am 
                            constantly in awe of the natural beauty and 
                            excitement that the outdoors has to offer.
                            Being a white water raft guide has truly been a 
                            life-changing experience, and I am grateful 
                            for the opportunity to share my passion for 
                            the outdoors with others.
                            AHAHHAHAHAH
                        </p>
    
               </Col>
                <div class = "col Drop720">
                make not col row
                </div>

            </Row>
            </div>
            <ParallaxProvider>
                <ParallaxDemo/>
            </ParallaxProvider>
            <div>
                <Dropdowns/>
                <div class = {'ContactPadding'}>    
                <Row> 
                        <Link to={`/ContactMe`} class = "dropTitles" > Reach out!</Link>
                   
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
    