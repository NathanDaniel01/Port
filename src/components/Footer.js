import React from 'react';
import "../App.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer(){
    return(
        <div class = {'Footer'}>
            <Row>
                <Col>
                    <div class = {'FooterText'}>
                        Copyright Nathan Daniel 2023.
                    </div>
                </Col>
                <Col>
                
                <div  class = {'FooterText'} to={`/ReachOut`}>
                    Follow Me!
                </div>
                <div class = {'icons'}/>
                <a href = "https://www.instagram.com/nathan___daniel/ " target="_blank">
                    <img src="./Svg/instagram.svg"/>
                </a>
                <a href = "https://www.linkedin.com/in/nathan-daniel-236b3b225/" target="_blank">
                    <img src="./Svg/linkedin.svg"/>
                </a>
                <div class = {'icons'}/>
                </Col>
            </Row>
            </div>
    );
}
export default Footer;

