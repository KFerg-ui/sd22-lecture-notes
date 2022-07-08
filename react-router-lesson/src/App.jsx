import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import NotFound from "./404";
import { Link } from "react-router-dom";


/* 
*ROUTES AND ROUTERS
  * 1. install react router DOM ['npm i react-router-dom@6']
  * 2. import BrowserRouter and Routes from "react-router-dom"
    * BroswerRouter is a wrapper for ALL compononents in a routing system
    * Routes (frmrly "Switch") declare where each dynamic component will belong.
    * Route - individual route specifying component to be rendered when hit
*/ 
function App() {
  return <>
  <Router>
    <nav>
      <a href="/aboutme">About</a>
      //* Anchor tags RELOAD the page
      <br />
      <Link to="/contact">Contact</Link>
      //* Link component does NOT reload 
      <br />
      <Link to="/" >Home</Link>
    </nav>
    <Routes>
      <Route path="*" element={<NotFound />}/>
      <Route path='/'element={ <Home />} />
      <Route path='/contact'element={ <Contact />} />
      <Route path='/aboutme'element={ <AboutMe />}/>
    </Routes>
  </Router>
  </>;
}

export default App;
