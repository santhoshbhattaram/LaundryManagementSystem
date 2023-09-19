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
function UserDashboard()
{
  const baseUrl = process.env.PUBLIC_URL;
    const handleclick = (event) => {
        localStorage.setItem("jwt", "home");
        window.location.href = baseUrl+"/Home";
      };
      const handle_userdashboard = (event) => {
        localStorage.setItem("jwt", "user");
        window.location.href = baseUrl+"/UserOrders";
      };
      const handle_pickup = (event) => {
        localStorage.setItem("jwt", "user-pickup");
        window.location.href = baseUrl+"/UserOrders";
      };

      const handle_complain = (event) => {
        localStorage.setItem("jwt", "user-complain");
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
                onClick={handle_userdashboard}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"  onClick={handle_userdashboard}/>
                <span className="links_name">Dashboard</span>
              </Link>
              {/* <span className="links_name">Dashboard</span> */}
            </li>
            <li>
              <Link
                to="/Manage"
                className="links_name"
                onClick={handle_pickup}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"   onClick={handle_pickup} />
                <span className="links_name">Schedule for pickup</span>
              </Link>
              {/* <span className="links_name">Dashboard</span> */}
            </li>
            <li>
              <Link
                to="/Manage"
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

export default UserDashboard;