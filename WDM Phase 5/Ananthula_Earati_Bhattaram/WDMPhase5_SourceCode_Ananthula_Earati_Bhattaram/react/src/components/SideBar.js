/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import bxGridAlt from "@iconify/icons-bx/bx-grid-alt";
import bxPieChartAlt2 from "@iconify/icons-bx/bx-pie-chart-alt-2";
import bxLogOut from '@iconify/icons-bx/bx-log-out';
import logo from '../Images/logo.png';

function SideBar() {
  const baseUrl = process.env.PUBLIC_URL;
  const handleclick = (event) => {
    localStorage.setItem("jwt", "home");
    window.location.href = baseUrl+"/Home";
  };
  const handledashboard = (event) => {
    localStorage.setItem("jwt", "admin");
    window.location.href = baseUrl+"/AdminDashboard";
  };
  const handlereport = (event) => {
    localStorage.setItem("jwt", "admin-report");
    window.location.href = baseUrl+"/Report";
  };
  const handlemanage = (event) => {
    localStorage.setItem("jwt", "admin-manage");
    window.location.href = baseUrl+"/Manage";
  };
  return (
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
                to="./Dashboard"
                className="links_name"
                onClick={handledashboard}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"  onClick={handledashboard} />
                <span className="links_name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="./Manage"
                className="links_name"
                onClick={handlemanage}
              >
                <Icon icon={bxGridAlt} className="sidebarBtn"  onClick={handlemanage}/>
                <span className="links_name">Manage</span>
              </Link>
            </li>
            <li>
              <Link to="./Report" className="links_name">
                <Icon icon={bxPieChartAlt2} onClick={handlereport}/>
                <span className="links_name" onClick={handlereport}>
                  Reports
                </span>
              </Link>
            </li>
            <li>
              <Link to="./Home" className="links_name">
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
export default SideBar;
