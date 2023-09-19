/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import LoginRegister from "./LoginRegister";
import SideBar from "./SideBar";
import logo from '../Images/logo.png';
import Blog from "./Blog";

function Header() 
{
  const token=window.localStorage.getItem('jwt');

  if(token==='admin')
  {
      return(<SideBar></SideBar>);
  }
else
{
  //window.localStorage.clear(); 
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <nav>
        <div>
          <h1>
              <img src={logo} alt="Logo"  width="70" height="40" />
            InstaWash
          </h1>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          {/* <a href="http://vxa3922.uta.cloud/WDMProject_Phase3/Blog/" target="_blank" rel="noreferrer">Blog</a> */}
          <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <AboutUs/>
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/login">
          <LoginRegister />
        </Route>
        <Route path="/"><Home /></Route>
      </Switch>
      </Router>
    </>
  );
}
}


export default Header;
