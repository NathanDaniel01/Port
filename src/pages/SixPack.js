import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';

function SixPack() {
  return (
   <div>
        <h2 class = 'header1'>6 Pack</h2>
        <p>
        Create a new design for a 6 pack of beer from Samuel Smith Brewery, using a Victorian style packaging that is visually appealing and maintains the brewery's roots. The existing design is poorly designed and in need of an update.
        The 6 pack will be purchased by consumers of craft beer, who are looking for unique and visually appealing packaging.
        The project will involve creating a new design for the 6 pack, including the packaging itself as well as any labels or branding elements. The design should be inspired by Victorian style and incorporate elements of the brewery's history and heritage.
        The design should be sophisticated and elegant, reflecting the quality of the beer and the history of the brewery. It should also be modern and visually appealing, appealing to a contemporary audience.
        A high-resolution digital file of the completed design, including any necessary mockups or prototypes.
        The project should be completed within 4-6 weeks, with the opportunity for revisions if necessary.
        </p>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/six_pack_1.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/SixPack/six_pack_2.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/six_pack_3.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/SixPack/Detail_5.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/SixPack/Detail_8.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/SixPack/Detail_7.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/SixPack/Detail_4.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <Footer/>
    </div>
  );
}

export default SixPack;