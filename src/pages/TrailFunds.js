import React from "react";
import "../App.css"
import "../AppMobile.css"
import "../sub.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";

function TrailFunds() {
  const pdfUrl = './Imgs/Trailfunds_presentation.pdf';
  const link1Url = 'https://www.behance.net/gallery/185494529/Trailfunds-Prototype';
  const link2Url = 'https://www.youtube.com/live/VAztGjHZFfI?si=IXkR2VLP0lNhfGCr&t=2600';

  const openPdfInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };
  const openlink1InNewTab = () => {
    window.open( link1Url , '_blank');
  };
  const openlink2InNewTab = () => {
    window.open( link2Url , '_blank');
  };

  return (
     <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
      <NavBar_Alt/>
     <h1 class = "header center">Trail Funds</h1>
     <div  class="containSub center">
     <img src="./SVG/GocodeLogo.svg" alt=""class="GocodeLogo" />    
      <h3 className = "GocodeType">GoCode Colorado 3rd Place and Peoples Choice Winners 2022</h3>
     </div>

     <div  class="containSub center">
      <p class = 'SubP TF'>
      I was the designer in charge of the development and execution of TrailFunds brand identity, 
      encompassing the creation of a distinctive logo, slide decks, wireframes, and a 
      responsive high-fidelity interface. This comprehensive effort was guided by a mobile-first approach, 
      ensuring an optimal user experience across various devices.

      To shape the future of the product, I presented the designs for the forthcoming user experience, 
      providing crucial insights and direction to inform its development.
      Finally, I successfully delivered a composable front-end experience by 
      leveraging React and React Native, further enhancing the application's versatility and performance.
    
      </p>
      <p class = 'SubP TF'>
        Coding work
        At Trail Funds My Role switched alot. I took on TrailFunds as a side project my junor year, 
        where I was assigned to the role of the UX/UI as the semester continued, I started helping on 
        the Geo-fence and location data through swift. I then became the back-end lead working on 
        redesigning the database and creating API calls that the client requested. the end desision was to run on a 
        SQLlite DB along with Flask API in Python. We won 3rd at GoCode Colorado 2022 along with peoples choice award.
        Incorporating state-of-the-art technology, I utilized Swift to integrate geofences and location data into the front-end, enhancing the application's functionality and user engagement.
      

      </p>
      </div>
      <div  class="containSub center">
      <button href = "#"  onClick={openlink1InNewTab} target="_blank">
                Mockup
      </button>
      <button href = "#"  onClick={openPdfInNewTab} target="_blank">
                Presentation
      </button>
      
      </div>
      <div  class="containSub">
            <img src="./Imgs/TF.jpg" alt=""class="imagesSub" />                  
        </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/TF2.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/TF3.jpg" alt=""class="imageSub" /> 
        </div>   
        <div  class="containSub">
            <img src="./Imgs/TF4.jpg" alt=""class="imageSub" />                     
        </div>   
      </div>  
     <Footer style={{margin: "100px auto auto auto"}}/>
    </div>
     
  );
}

export default TrailFunds;