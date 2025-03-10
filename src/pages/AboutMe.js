import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
import '../Styles/AboutMe.css';
import { FunctionComponent } from 'react';
function AboutMe() 
{
return (
<div className ="AboutMe">
<a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
  <NavBar_Alt/>

  <div className ="Title_container">
    <div className ="TitleCopy">
      <b className ="Header_Big">Hello, I’m Nate</b>
      <div className ="Header_Sub">You probably knew that Already...</div>
    </div>
    <img src="./Imgs/Aboutme/Headshot.jpg" alt=""className="Img_headshot" /> 
    
  </div>

  <div className ="body">
    <div className ="Container">
    <img src="./Imgs/Aboutme/Rafting.jpg" alt=""className="Img-1" /> 
      <div className ="CopyBlock">
        <b className ="TextCopyCOL">
            <p className ="Header_Titles">So, Your here to Get to know me?</p>
        </b>
        <div className ="TextCopyCOL">
          <p className ="BodyCopy">
          I’m Nate Daniel and I just recently graduated from Colorado Mesa 
          University with my B.S. in Computer Science and a minor in Graphic Design.
           Throughout my studies I focused on the intersection between design and technology, 
           believing that online interactions can not only be functional, but also beautiful. I would make a great 
           addition to your team because not only am I a great designer, but I spent my summers
           as a white water raft guide! </p>
        </div>
      </div>
    </div>

    <div className ="Container flip">
      <div className ="CopyBlock">
        <b className ="TextCopyROW">
          <p className ="Header_Titles">Oh, you want to hear about my hobbies?</p>
        </b>
        <div className ="BulletsBlock">
          <div className ="bullets2">
            <div className ="so-your-here-container">
              <ul className = "under-water-basket">
                <li className = "Bullets">Rafting</li>
                <li className = "Bullets">Skiing</li>
                <li className = "Bullets">Climbing</li>
                <li className = "Bullets">Hiking</li>
                <li className = "Bullets">Sketching</li>
              </ul>
            </div>
          </div>
          <div className ="bullets2">
            <div className ="so-your-here-container">
              <ul className = "under-water-basket">
                <li className = "Bullets">Guitar</li>
                <li className = "Bullets">Piano</li>
                <li className = "Bullets">Cooking</li>
                <li className = "Bullets">Backpacking</li>
                <li className = "Bullets">Letterpress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="./Imgs/Aboutme/Climbing.jpg" alt=""className="Img-2" /> 
    </div>

  <div className ="game-hoby">
    <div className = "Container">
    <div className ="TextCopyCOL Wide">
      <b className ="Header_Titles Light">Lets Play A Game</b>
      <div className ="Header_Sub">2 truths and a lie</div>
    </div>
    <div className ="TextCopyROW">
      <ul className ="GameBlock">
        <li className ="Bullets_Center"> I sold a pancake mix</li>
        <li className ="Bullets_Center"> I can fly a plane</li>
        <li className ="Bullets_Center"> I can breathe fire</li>
      </ul>
    </div>
    </div>
  </div>

  <div className ="Container">
    <b className ="Header_Titles">What Am I Looking For?</b>
    <div className ="InnerContainer">
      <img src="./Imgs/Aboutme/Looking.jpg" alt=""className="Img-3" /> 
      <div className ="TextCopyCOL Wide">
        <p className ="BodyCopy">I’m looking for a collaborative workplace that can help make me continue to grow in my UX / UI design skills. </p>
        <p className ="BodyCopy">I would love to find a team full of creative and talented people that inspire me to produce top quality work.</p>
      </div>
    </div>
  </div>

  <div className ="last-segment">
    <div>
      <b className ="Header_Titles Primary">Well, thats all I want to tell you for now.</b>
    </div>
  </div>
  </div>
  <Footer/>
</div>
  
);
};
export default AboutMe;

