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
function ManageDashboard()
{
    const baseUrl = process.env.PUBLIC_URL;
    const handleclick = (event) => {
        localStorage.setItem("jwt", "home");
        window.location.href = baseUrl+"/Home";
      };
      const handle_managedashboard = (event) => {
        localStorage.setItem("jwt", "manager");
        window.location.href = baseUrl+"/Manage";
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
                to="./Manage"
                className="links_name"
                onClick={handle_managedashboard}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"  onClick={handle_managedashboard} />
                <span className="links_name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="./Manage"
                className="links_name"
                onClick={handle_managedashboard}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn" onClick={handle_managedashboard} />
                <span className="links_name">Manage</span>
              </Link>
          
            </li>

            <li>
              <Link to="./Home" className="links_name">
              <Icon icon={bxLogOut}  onClick={handleclick}/>
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

export default ManageDashboard;