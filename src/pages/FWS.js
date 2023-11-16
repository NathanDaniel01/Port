import React from "react";
import "../App.css"
import "../AppMobile.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";

function FWS() {
     return (
     <div id="Top" class = "mainBG">
        <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
        <h1 class = "header center">FutureWork</h1>
        <h1 class = "header center">Systems</h1>
     

     <div  class="containSub center">
      <p class = 'SubP TF'>
      I led a project to enhance the front-end of client-facing dashboards, significantly improving navigation and the overall user experience. This transformation also included making the dashboards responsive to different devices.

My role involved building trust and confidence with the management team, enabling me to take ownership of the responsive development process. I independently set priorities, met milestones, and ensured the successful implementation of the project.

In addition, I engaged with key leaders within the organization, including C-Suite executives, and maintained regular communication with an external software provider to effectively manage future product releases by conveying specific requirements.
      </p>
      </div>  
     <Footer style={{margin: "100px auto auto auto"}}/>
    </div>
     
  );
}

export default FWS;