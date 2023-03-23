import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ParallaxDemo from '../components/paralax';
import { ParallaxProvider} from 'react-scroll-parallax';
function ContactMe() {
  return (
   <div>
        <div>
            <p>
                Hello! my name is nathan Daniel, I am a Outdoor adviacate by heart, but fell in love 
                with technology and design along  the way. I have been building my life to support and follow the three.
                If you have any questions, 
                please reach out to the following:
            </p>
        </div>
        <div>
                <div>Form</div>
                <div>Email: Nate@thedanielfamily.com</div>
                <div>Number:7205568806</div>
                <div>Social Medias</div>
                <div>Linked In</div>
        </div>
        <div>
            <h1>
                Past Experience
            </h1>
            <p>
                Trail-Funds
            </p>
            <p>
                Future Work Systems
            </p>
            <p>
                Freelance
            </p>
            <p>
                Raft Guide
            </p>

        </div>
        <div>
                <h1>
                    more about my life:
                </h1>
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
        </div>
        <Footer/>
    </div>
  );
}

export default ContactMe;