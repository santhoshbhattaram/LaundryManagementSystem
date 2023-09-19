/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import Laundry from "../Images/Laundry.jpeg"

function AboutUs() {
  return (
    <>
      <section className="AboutUsSection">
        <div className="image">
          <img src={Laundry} alt="logo"/>
        </div>

        <div className="content">
          <h2>About Us</h2>
          <span></span>
          <p>
            Our family-possessed wash n’ crease central station in Arlington,
            has been conveying nearby cleaning and laundry administrations to
            cheerful clients for more than 20 years. We have as of late extended
            our administrations to incorporate internet requesting and an
            assortment of get and conveyance choices to suit our clients needs.
            The outcome: Imaginative laundry administrations ideal for your
            bustling way of life.
          </p>
          <ul className="links">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <div className="vertical-line"></div>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
