import React from "react";
import "../App.css"
import "../sub.css"
import {Link} from "react-router-dom";
import Footer from '../components/Footer';

function SixPack() {
  return (
   <div class = "mainBG">
    <Link to={`/`}>
    <a href="#top">
            <img src="./SVG/Home_Button.svg" alt=""class="nav sticky" style={{width:'50px'}}/>
    </a>
    </Link>
        <h1 class = "header center">6 Pack</h1>
                <p class = 'SubP center'>
                     The objective for this design was to revidalize 6 pack of beer from Samuel Smith Brewery, using a Victorian style packaging that maintains the brewery's roots. The existing design is poorly designed and in need of an update.
                </p>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/six_pack_1.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/six_pack_2.jpg" alt=""class="image" style={{width:'33%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/six_pack_3.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_5.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_8.jpg" alt=""class="image" style={{width:'33%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_7.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_4.jpg" alt=""class="image" style={{width:'33%'}}/>
        </div>
        <Footer/>
    </div>
  );
}

export default SixPack;