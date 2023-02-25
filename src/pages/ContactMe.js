import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function ContactMe() {
  return (
   <div>
        <h2 class = 'header1'>Hi There!</h2>
        <h2 class = 'header1'>Lets Chat!</h2>
        <Row>
            <Col> 
                <p>
                    Heres a little more about me, 
                    I currently live in Colorado
                    attending Colorado Mesa University.
                    I will be Graduating in May of 2023 and looking to get into the web development field.
                    I Play the gutair, Sold a pancake mix, and any free time I get is spent in the outdoors.
                    If you want to follow my Trips and Photography, Find my Blog... (Its a seecret)
                    I found a dog and kept it, And spend my free time growing as much as I can.
                    This is my way to show you my Querkey life. I want to Implement and grow this project so keep chaacking back to see what I do..
                    Heres some fun things you can try and guess about me...
                    how many Bones have I broken?
                    How many times have i been outside the United states?
                    Am I a dog person or a Cat person? 
                    What the hell am i doing?
                    AHHHHHH!
                    Check out some fun or random stuff below :)
                </p>
            </Col>
            <Col>
                <div>Form</div>
                <div>Email</div>
                <div>Number</div>
                <div>Social Medias</div>
                <div>Linked In</div>


            </Col>
        </Row>
        <p>Lets make it into a grid of jokes and photos</p>
        <div class="imgFlex">
            <img src="./Imgs/six_pack_1.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/six_pack_2.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/six_pack_3.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_5.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_8.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_7.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_4.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <Footer/>
    </div>
  );
}

export default ContactMe;