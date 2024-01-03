import React from 'react';
import "../Styles/Footer.css"
import "../Styles/Smoke.css"
import Smoke from './Smoke';

function Footer(){
    return(
        <>
            <div className = 'Footer'>
               <div className = 'Col_6 TextCluster DEBUG'>
                    <h3 className = 'DEBUG'>Nathan Daniel</h3>
                    <div className = 'Col_5 IconCluster DEBUG'>
                        <a href = "https://www.linkedin.com/in/nathan-daniel-design23/" target="_blank">
                            <img className= "Icon"src="./SVG/linkedin.svg"/>

                        </a>
                    </div>
                    <div className = 'Col_5  IconCluster DEBUG'>
                        <a  href = "https://www.instagram.com/nathan___daniel/ " target="_blank">
                            <img className= "Icon" src="./SVG/instagram.svg"/>
                        </a>
                    </div>
               </div>
               <div className = 'Col_4 ArtCluster DEBUG'> 
                        <Smoke/>
                        <img className = "DEBUG" src="./SVG/Footer.svg"/>
                </div>
            </div>
        </>
    );
}
export default Footer;

/*
    <div className= "IconCluster">
                                    <a  href = "https://www.instagram.com/nathan___daniel/ " target="_blank">
                                        <img className= "Icon" src="./SVG/instagram.svg"/>
                                        <p className = "Handel">@nathan___daniel</p>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={7}>
                                <div className= "IconCluster">
                                    <a href = "https://www.linkedin.com/in/nathan-daniel-236b3b225/" target="_blank">
                                        <img className= "Icon"src="./SVG/linkedin.svg"/>
                                        <p className = "Handel">@nathan___daniel</p>
                                    </a>
                                </div>
*/