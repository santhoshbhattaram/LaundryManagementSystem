/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import './style.css';
import { Icon } from "@iconify/react";
import bxGridAlt from "@iconify/icons-bx/bx-grid-alt";
import { BrowserRouter as Router, Link } from "react-router-dom";
import bxLogOut from '@iconify/icons-bx/bx-log-out';
import logo from '../Images/logo.png';
function VisitorDashboard()
{
  const baseUrl = process.env.PUBLIC_URL;
    const handleclick = (event) => {
        localStorage.setItem("jwt", "home");
        window.location.href = baseUrl+"/Home";
      };
      const handle_userdashboard = (event) => {
        localStorage.setItem("jwt", "visitor-order");
        window.location.href = baseUrl+"/UserOrders";
      };
      const handle_dropoff = (event) => {
        localStorage.setItem("jwt", "visitor");
        window.location.href = baseUrl+"/Dropoff";
      };
      const handle_complain = (event) => {
        localStorage.setItem("jwt", "visitor-complain");
        window.location.href = baseUrl+"/Complain";
      };
    return(
        <>
             <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="sidebar">
        <div className="logo-details">
          <img src={logo} alt="Logo" width="70" height="40" />
          <span className="logo_name">InstaWash</span>
        </div>
        <ul className="nav-links">
          <Router>
            <li>
              <Link
                to="/Manage"
                className="links_name"
                onClick={handle_dropoff}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"  onClick={handle_dropoff}/>
                <span className="links_name">Dashboard</span>
              </Link>
              {/* <span className="links_name">Dashboard</span> */}
            </li>
            <li>
              <Link
                to="/Dropoff"
                className="links_name"
                onClick={handle_dropoff}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"   onClick={handle_dropoff} />
                <span className="links_name">Drop off</span>
              </Link>
              {/* <span className="links_name">Dashboard</span> */}
            </li>
            <li>
              <Link
                to="/UserOrders"
                className="links_name"
                onClick={handle_userdashboard}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"  onClick={handle_userdashboard}/>
                <span className="links_name">Orders</span>
              </Link>
              
              {/* <span className="links_name">Dashboard</span> */}
            </li>
            <li>
              <Link
                to="/Complain"
                className="links_name"
                onClick={handle_complain}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"  onClick={handle_complain}/>
                <span className="links_name">Complain</span>
              </Link>
              
              {/* <span className="links_name">Dashboard</span> */}
            </li>
            {/* <li>
          <a href="Manage.html">
            <i className='bx bx-user' ></i>
            <span className="links_name">Manage</span>
          </a>
        </li> */}
            <li>
              <Link to="/Home" className="links_name">
              <Icon icon={bxLogOut} onClick={handleclick}/>
                <span className="links_name" onClick={handleclick}>
                  Log out
                </span>
              </Link>
            </li>
            
          </Router>
        </ul>
      </div>

        </>
    );
}

export default VisitorDashboard;