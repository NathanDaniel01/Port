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
                        Copyright Nathan Daniel 2022.
                    </div>
                    <div  class = {'FooterText'}>
                        All rights reserved.
                    </div>
                    <br/>
                    <div  class = {'FooterText'}>
                        Site design by Nathan Daniel.
                    </div>
                </Col>
                <Col>
                    <div class = {'FooterText'}>
                        Nathan is a Colorado-based web developer specializing in Graphic Design, 
                        UX/UI, Front end Development and Back end Development. I am available for 
                        freelance work and can be contacted here.
                    </div>
                </Col>
                <Col>
                
                <div  class = {'FooterText'} to={`/ReachOut`}>
                    Follow Me!
                </div>
                <div class = {'icons'}/>
                <div class = {'icons'}/>
                <div class = {'icons'}/>
                </Col>
            </Row>
            </div>
    );
}
export default Footer;