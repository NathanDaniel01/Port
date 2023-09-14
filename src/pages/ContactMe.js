import React from "react";
import "../App.css"
import "../indepth.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
function ContactMe() {
    return (
        <div class = "mainBG">
         <Link to={`/`}>
         <a href="#top">
                 <img src="./SVG/Home_Button.svg" alt=""class="nav sticky" style={{width:'50px'}}/>
         </a>
         </Link>
             <div class="imgFlex">
                 <div>
                     <h2>Nathan Daniel</h2>
                     <p class = 'P_sub'>
                        Hello! my name is nathan Daniel, I am a Outdoor adviacate by heart, but fell in love 
                        with technology and design along the way. I have been trying to build my life to support and follow it.
                        If you have any questions, 
                        please reach out to the following:
                     </p>
                 </div>
             </div>
             <div>Form</div>
<div>Email: Nate@thedanielfamily.com</div>
<div>Number:7205568806</div>
<div>Social Medias</div>
<div>Linked In</div>
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

export default ContactMe;