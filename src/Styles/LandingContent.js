import React from 'react';
import "../Styles/Teasers.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function LandingContent(){
    return(<>
        <Row>
            <Col xs={1} md={2}>
                <Link to={`/Raskog`}>
                    <img src="./Imgs/Raskog/Raskog1.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >Räskog</a>
                    </div>
                </Link>
            </Col>
            <Col xs={1} md={2}>
            <Link  to={`/Kunikos`}>
                    <img src="./Imgs/Kunikos.jpg" alt=""class="image" />
                    <div class="middle">
                            <a href="#top"class="titlesWhitetoRed">Kunikos</a>
                    </div>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col xs={1} md={2}>
                <Link to={`/LostDog`}>
                    <img src="./Imgs/LostDog.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" > Lost Dog </a>
                            
                    </div>
                </Link>
            </Col>
            <Col xs={1} md={2}>
                <Link to={`/SixPack`}>
                    <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >6-pack</a>
                    </div>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col xs={1} md={2}>
                <Link to={`/Folly`}>
                    <img src="./Imgs/Folly.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >Folly</a>
                    </div>
                </Link>
            </Col>
            <Col xs={1} md={2}>
                <Link to={`/Cluster`}>
                    <img src="./Imgs/Cluster.jpg" alt=""class="image" />
                    <div class="middle">
                        <a class="titlesWhitetoRed" >Cluster</a>
                    </div>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col xs={1} md={2}> 
                <img src="./SVG/Trailfunds.svg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/TrailFunds`}>TrailFunds</Link>
                </div>
            </Col>
            <Col xs={1} md={2}>
                <img src="./Imgs/FWS.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/FWS`}>FWS</Link>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={1} md={2}>
                <img src="./Imgs/LP/Zine/Zine_5.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Zine`}>Zine</Link>
                </div>
            </Col>
            <Col xs={1} md={2}>
                <img src="./Imgs/Wedding/Wed_3.jpg" alt=""class="image" />
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Wedding`}>Wedding</Link>
                </div>
            </Col>
        </Row>
    </>
   );
}
export default LandingContent;