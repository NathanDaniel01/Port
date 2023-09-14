import React from "react";
import "../App.css"
import "../indepth.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
function Raskog() {
  return (
    <div class = "mainBG">
     <Link to={`/`}>
     <a href="#top">
             <img src="./SVG/Home_Button.svg" alt=""class="nav sticky" style={{width:'50px'}}/>
     </a>
     </Link>
         <div class="imgFlex">
             <div>
                 <h2 class = 'header1 header1_sub'>Räskog</h2>
                 <p class = 'P_sub'>
                 Raskog's objective was to create a visually compelling instruction manual for assembling a mechanical device, using only illustrations and symbols to convey information.
      The manual will be used by individuals with varying levels of mechanical expertise, so it is important to make the instructions clear and easy to follow for all users.
      The scope manual will include illustrations for each step of the assembly process, as well as symbols and graphics to represent different tools and components. It covers all necessary information for a complete and successful assembly, including any precautions or warnings.
      The manual should be concise and straightforward, using clear visuals to guide the user through the assembly process.
                 </p>
             </div>
         <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="images" style={{width:'50%'}}/>
         </div>
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
export default Raskog;