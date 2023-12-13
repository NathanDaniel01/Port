import React, { Fragment } from "react";
import "./index.css"
import "./App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './landing';
import Raskog from "./pages/Raskog";
import Letterpress from "./pages/Letterpress";
import ComputerScience from "./pages/ComputerScience";
import SixPack from "./pages/SixPack";
import Folly from "./pages/Folly"
import Icons from "./pages/Icons"
import Kunikos from "./pages/Kunikos"
import Cluster from "./pages/Cluster"
import AboutMe from "./pages/AboutMe"
import Zine from "./pages/Zine"
import Wedding from "./pages/Wedding"
import TrailFunds from "./pages/TrailFunds"
import FWS from "./pages/FWS"
import Rant from "./pages/Rant"
import Design from "./pages/Design"
import Portfolios from "./pages/Portfolio"
import Personal from "./pages/Personal"
import LostDog from "./pages/LostDog"
import Blog from "./pages/BlogPages/Blog"
import ScrollToTop from "./components/ScrollToTop"
export default function App() {
  return (
   <Router>
    <ScrollToTop/>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Portfolio" element={<LandingPage/>}/>
          <Route path="/Letterpress" element={<LetterpressPage/>}/>
          <Route path="/ComputerScience" element={<ComputerSciencePage/>}/>
          <Route path="/AboutMe" element={<AboutMePage/>}/>
          <Route path="/Design" element={<DesignPage/>}/>

          <Route path="/Raskog" element={<RaskogPage/>}/>
          <Route path="/SixPack" element={<SixPackPage />}/>
          <Route path="/Folly" element={<FollyPage/>}/>
          <Route path="/Icons" element={<IconsPage/>}/>
          <Route path="/Cluster" element={<ClusterPage/>}/>
          <Route path="/Kunikos" element={<KunikosPage/>}/>

          <Route path="/Zine" element={<ZinePage/>}/>
          <Route path="/Personal" element={<PersonalPage/>}/>
          <Route path="/LostDog" element={<LostDogPage/>}/>
          <Route path="/Rant" element={<RantPage/>}/>
          <Route path="/Wedding" element={<WeddingPage/>}/>
          <Route path="/FWS" element={<FWSPage/>}/>

          <Route path="/TrailFunds" element={<TrailFundsPage/>}/>
          <Route path="/MyPortfolio" element={<PortfoliosPage/>}/>
          <Route path="/Blog" element={<BlogPage/>}/>

        </Routes>
      </main>
    </Router>
  );
}

const LandingPage = () => {
  return(
    Landing()
  )
};
const ComputerSciencePage = () => {
  return(
    ComputerScience()
  )
};
const LetterpressPage = () => {
  return(
    Letterpress()
  )
};
const AboutMePage = () => {
  return(
    AboutMe()
  )
};
const RaskogPage = () => {
  return(
    Raskog()
  )
};
const SixPackPage = () => {
  return(
    SixPack()
  )
};
const IconsPage = () => {
  return(
    Icons()
  )
};
const FollyPage = () => {
  return(
    Folly()
  )
};
const KunikosPage = () => {
  return(
    Kunikos()
  )
};
const ClusterPage = () => {
  return(
    Cluster()
  )
};
const ZinePage = () => {
  return(
    Zine()
  )
};
const WeddingPage = () => {
  return(
    Wedding()
  )
};
const RantPage = () => {
  return(
    Rant()
  )
};
const FWSPage = () => {
  return(
    FWS()
  )
};
const LostDogPage = () => {
  return(
    LostDog()
  )
};
const PersonalPage = () => {
  return(
    Personal()
  )
};
const PortfoliosPage = () => {
  return(
    Portfolios()
  )
};
const BlogPage = () => {
  return(
    Blog()
  )
};
const TrailFundsPage = () => {
  return(
      TrailFunds()
  )
};
const DesignPage = () => {
  return(
      Design()
  )
};