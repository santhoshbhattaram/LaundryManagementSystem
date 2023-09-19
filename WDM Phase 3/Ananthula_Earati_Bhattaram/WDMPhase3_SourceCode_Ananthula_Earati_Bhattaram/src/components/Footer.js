/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  //window.localStorage.clear(); 
  return (
    <>
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

export default Footer;
