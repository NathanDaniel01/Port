import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('Woah HI there!'),
    );
  
    return (
      <div
        type="button"
        onClick={decoratedOnClick}
        class = "dropTitles"
      >
        {children}
      </div>
    );
  }

  
function Dropdowns() {
    return (
        <div class = "padding">
            <Accordion>
                <div class="extrapadding">
                    <CustomToggle eventKey="0">
                        Graphic Design
                        <div class="line"/>
                    </CustomToggle>
                    
                    <Accordion.Collapse eventKey="0">
                    <div class = "BlackBG">
                        <p class = "DropTitlesWhiteText">
                            As a skilled graphic designer, 
                            I have a strong foundation in design 
                            principles, proficiency in a variety 
                            of design software, and experience 
                            creating a wide range of design materials 
                            such as logos, brochures, and websites.
                        </p>
                        <div
                        type="button"
                        class = "titlesWhitetoRed"
                        >
                        </div>
                        <div class="imgFlex">
                            <div  class="contain">
                            <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" style={{width:'100%'}}/>
                                <div class="middle">
                                <Link class="titlesWhitetoRed" to={`/Raskog`}>Räskog</Link>
                                </div>
                            </div>
                            <div  class="contain">
                            <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
                                <div class="middle">
                                <Link class="titlesWhitetoRed" to={`/SixPack`}>6-pack</Link>
                                </div>
                            </div>
                            <div  class="contain">
                            <img src="./Imgs/TShirt/TShirt1.jpg" alt=""class="image" style={{width:'100%'}}/>
                                <div class="middle">
                                    <Link class="titlesWhitetoRed" to={`/T-Shirt`}>T-Shirt</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Accordion.Collapse>
                </div>
                <div class="extrapadding">
                    <CustomToggle eventKey="1">
                        Letter Press
                        <div class="line"/>
                    </CustomToggle>
                    
                    <Accordion.Collapse eventKey="1">
                    <div class = "BlackBG">
                        <p class = "DropTitlesWhiteText">
                            I have a deep passion for letterpress 
                            and the traditional printing techniques 
                            that it involves, and I love the tactile 
                            and aesthetic qualities of prints produced 
                            using this method.
                        </p>
                        <div class="imgFlex">
                            <div  class="contain">
                                <div class="image" style={{width:'100%'}}>will be img</div> 
                                <div class="middle">
                                    <Link class="titlesWhitetoRed" to={`/Zine`}>Zine</Link>
                                </div>
                            </div>
                            <div  class="contain">
                                <div class="image">will be img</div> 
                                <div class="middle">
                                    <Link class="titlesWhitetoRed" to={`/Rant`}>Rant</Link>
                                </div>
                            </div>
                            <div  class="contain">
                                <div class="image">will be img</div> 
                                <div class="middle">
                                    <Link class="titlesWhitetoRed" to={`/Personal`}>Personal</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Accordion.Collapse>
                </div>
                <div class="extrapadding">
                    <CustomToggle eventKey="2">
                        Computer Science
                        <div class="line"/>
                    </CustomToggle>

                    <Accordion.Collapse eventKey="2">
                    <div class = "BlackBG">
                        <p class = "DropTitlesWhiteText">
                            I have a strong drive to learn and master 
                            both front-end and back-end development for 
                            websites, and I am constantly seeking out 
                            opportunities to improve my skills in these 
                            areas in order to create innovative and 
                            functional solutions for my clients.
                        </p>
                        <div class="imgFlex">
                            <div  class="contain">
                                <div class="image" style={{width:'100%'}}>will be img</div> 
                                <div class="middle">
                                <Link class="titlesWhitetoRed" to={`/MyPortfolio`}>Portfolio</Link>
                                </div>
                            </div>
                            <div  class="contain">
                                <div class="image">will be img</div> 
                                <div class="middle">
                                    <Link class="titlesWhitetoRed" to={`/TrailFunds`}>Trail Funds</Link>
                                </div>
                            </div>
                            <div  class="contain">
                                <div class="image">img</div> 
                                <div class="middle">
                                    <Link class="titlesWhitetoRed" to={`/FWS`}>FWS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Accordion.Collapse>
                </div>
      </Accordion>
      </div>
    );
}
export default Dropdowns;
