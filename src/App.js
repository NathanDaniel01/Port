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
import GraphicDesign from "./pages/GraphicDesign"
import Letterpress from "./pages/Letterpress";
import ComputerScience from "./pages/ComputerScience";
import SixPack from "./pages/SixPack";
import Childrens from "./pages/Childrens";
import TShirt from "./pages/T-Shirt";
import Police from "./pages/Police"
import Hello from "./pages/Hello"
import Icons from "./pages/Icons"
import Interview from "./pages/Interview"
import Cluster from "./pages/Cluster"
import ContactMe from "./pages/ContactMe"
import Zine from "./pages/Zine"
import Wedding from "./pages/Wedding"
import TrailFunds from "./pages/TrailFunds"
import Sayings from "./pages/Sayings"
import Rant from "./pages/Rant"
import Portfolios from "./pages/Portfolio"
import Personal from "./pages/Personal"
import NYLimes from "./pages/NY-Limes"
import Christmas from "./pages/Christmas"
import Blog from "./pages/BlogPages/Blog"
import Geezeers from "./pages/Geezeers"
export default function App() {
  return (
   <Router>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Portfolio" element={<LandingPage/>}/>
          <Route path="/GraphicDesign" element={<GraphicDesignPage/>}/>
          <Route path="/Letterpress" element={<LetterpressPage/>}/>
          <Route path="/ComputerScience" element={<ComputerSciencePage/>}/>
          <Route path="/ContactMe" element={<ContactMePage/>}/>
          <Route path="/ReachOut" element={<RaskogPage/>}/>

          <Route path="/Raskog" element={<RaskogPage/>}/>
          <Route path="/SixPack" element={<SixPackPage />}/>
          <Route path="/Police" element={<PolicePage/>}/>
          <Route path="/Childrens" element={<ChildrensPage/>}/>
          <Route path="/Icons" element={<IconsPage/>}/>
          <Route path="/T-Shirt" element={<TShirtPage/>}/>
          <Route path="/Cluster" element={<ClusterPage/>}/>
          <Route path="/Hello" element={<HelloPage/>}/>
          <Route path="/Interview" element={<InterviewPage/>}/>

          <Route path="/Zine" element={<ZinePage/>}/>
          <Route path="/Personal" element={<PersonalPage/>}/>
          <Route path="/Christmas" element={<ChristmasPage/>}/>
          <Route path="/Rant" element={<RantPage/>}/>
          <Route path="/Wedding" element={<WeddingPage/>}/>
          <Route path="/Sayings" element={<SayingsPage/>}/>

          <Route path="/TrailFunds" element={<TrailFundsPage/>}/>
          <Route path="/MyPortfolio" element={<PortfoliosPage/>}/>
          <Route path="/NY-Limes" element={<NYLimesPage/>}/>
          <Route path="/Blog" element={<BlogPage/>}/>
          <Route path="/Geezers" element={<GeezersPage/>}/>

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
const GraphicDesignPage = () => {
  return(
    GraphicDesign()
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
const ContactMePage = () => {
  return(
    ContactMe()
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
const ChildrensPage = () => {
  return(
    Childrens()
  )
};
const TShirtPage = () => {
  return(
    TShirt()
  )
};
const IconsPage = () => {
  return(
    Icons()
  )
};
const HelloPage = () => {
  return(
    Hello()
  )
};
const PolicePage = () => {
  return(
    Police()
  )
};
const InterviewPage = () => {
  return(
    Interview()
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
const SayingsPage = () => {
  return(
    Sayings()
  )
};
const ChristmasPage = () => {
  return(
    Christmas()
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
const NYLimesPage = () => {
  return(
    NYLimes()
  )
};
const BlogPage = () => {
  return(
    Blog()
  )
};
const GeezersPage = () => {
  return(
    Geezeers()
  )
};
const TrailFundsPage = () => {
  return(
      TrailFunds()
  )
};