import React from "react";
import "../App.css"
import "../sub.css"
import "../AppMobile.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar_Alt from "../components/NavBar_Alt";
function Cluster() {
  return (
    <div id="Top" class = "mainBG">
      <a href="#">
          <Link to={`/`}>
            <img className="HomeBtn" src="./SVG/camper.svg" />
          </Link>
        </a>
        <NavBar_Alt/>
     <h1 class = "header center">Watercolor</h1>
      <p class = 'SubP center'>
      This piece artfully intertwines Pigeons and Gnomes while maintaining 
      individuality within. Through watercolor, these whimsical and harmonious 
      ensembles exude their unique charm while adhering to the larger theme. The 
      project helped me hone my skills to blend creativity and expressive qualities 
      of watercolor to deliver captivating character clusters.
      </p>
      <div  class="containSub">
        <img src="./Imgs/cluster/Cluster3.jpg" alt=""class="imagesSub" />                  
      </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster6.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster7.jpg" alt=""class="imageSub" />                     
        </div>   
      </div>  
      <div  class="containSub">
        <img src="./Imgs/cluster/Cluster2.jpg" alt=""class="imagesSub" />                  
      </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster5.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster4.jpg" alt=""class="imageSub" />                     
        </div>     
      </div>  
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Cluster;