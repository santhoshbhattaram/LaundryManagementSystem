/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import { BrowserRouter as Router, Link, Route,Routes} from "react-router-dom";
import "../../css/Header.css";
import Home from "./Home";
import ReactDOM from 'react-dom';
// import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import LoginRegister from "./LoginRegister";
// import SideBar from "./SideBar";
import logo from '../../Images/logo.png';
import Blog from "./Blog";
import "../../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import AboutUs from "./AboutUs";

function Header() 
{
//   const token=window.localStorage.getItem('jwt');

//   if(token==='admin')
//   {
//       return(<SideBar></SideBar>);
//   }
// else
// {
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
              <Link to ="/">Home</Link>
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
          <Link to="/blog">Blog</Link> 
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li> 

          </ul>
          </nav>
              <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<LoginRegister/>}/>
            <Route path="/blog" element={<Blog/>}/>
            </Routes>


          </Router>
<Router>
      <div className="contact-footer">
        <h3>Follow Us</h3>
        <div className="social-links">
          <Link to="">
          <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link to="">
          <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="">
          <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="">
          <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="">
          <FontAwesomeIcon icon={faYoutube} /></Link>

        </div>
      </div>
      </Router>

    </>
  );
}
// }


export default Header;
if (document.getElementById('header')) {
    ReactDOM.render(< Header/>, document.getElementById('header'));
}
