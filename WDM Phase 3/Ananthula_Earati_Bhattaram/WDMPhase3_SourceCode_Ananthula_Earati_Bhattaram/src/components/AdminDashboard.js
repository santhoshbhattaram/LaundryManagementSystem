/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import { Icon } from '@iconify/react';
import bxMenu from '@iconify/icons-bx/bx-menu';
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down';
import bxCartAlt from '@iconify/icons-bx/bx-cart-alt';
import bxsCartAdd from '@iconify/icons-bx/bxs-cart-add';
import bxCart from '@iconify/icons-bx/bx-cart';
import bxsCartDownload from '@iconify/icons-bx/bxs-cart-download';
import Chat from "./Chat";
function AdmimDashboard() {
    return(
        <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    </meta>
 
    <section className="home-section">
    <nav>
      <div className="sidebar-button">
       <Icon icon={bxMenu} className="sidebarBtn"/>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="profile-details">
        <span className="admin_name">Sai Santhosh</span>
        <Icon icon={bxChevronDown} />
      </div>
    </nav>

    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">500</div>
          </div>
          <Icon icon={bxCartAlt} className="boxCart boxCartOne" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Equipments</div>
            <div className="number">100</div>
          </div>
          <Icon icon={bxsCartAdd} className="boxCart boxCartTwo"/>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Orders Pending</div>
            <div className="number">40</div>
          </div>
          <Icon icon={bxCart} className="boxCart boxCartThree"/>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Profit</div>
            <div className="number">$11,086</div>
          </div>
          <Icon icon={bxsCartDownload} className="boxCart boxCartFour"/>
        </div>
      </div>

      <div className="sales-boxes">
        <div className="recent-sales box">
          <div className="title">Recent Orders</div>
          <div className="sales-details">
            <ul className="details">
              <li className="topic">Date</li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
              <li><a  href="#0">09 Oct 2021</a></li>
            </ul>
            <ul className="details">
            <li className="topic">Customer</li>
            <li><a  href="#0">Joseph</a></li>
            <li><a  href="#0">Ruth</a></li>
            <li><a  href="#0">Harry</a></li>
            <li><a  href="#0">Raju</a></li>
            <li><a  href="#0">Vibhav</a></li>
            <li><a  href="#0">Viraj</a></li>
            <li><a  href="#0">Neeraj</a></li>
            <li><a  href="#0">Rathod</a></li>
             <li><a  href="#0">Tim Cook</a></li>
          </ul>
          <ul className="details">
            <li className="topic">Order</li>
            <li><a  href="#0">Drying</a></li>
            <li><a  href="#0">Washing</a></li>
            <li><a  href="#0">Dry Clean</a></li>
            <li><a  href="#0">Cold Press</a></li>
            <li><a  href="#0">Washing</a></li>
            <li><a  href="#0">Fabric Soft</a></li>
            <li><a  href="#0">Washing</a></li>
             <li><a  href="#0">Dry Clean</a></li>
            <li><a  href="#0">Drying</a></li>
          </ul>
          <ul className="details">
            <li className="topic">Total</li>
            <li><a  href="#0">$95.98</a></li>
            <li><a  href="#0">$68.55</a></li>
            <li><a  href="#0">$77.88</a></li>
            <li><a  href="#0">$100.66</a></li>
            <li><a  href="#0">$160.56</a></li>
            <li><a  href="#0">$70.95</a></li>
            <li><a  href="#0">$40.33</a></li>
             <li><a  href="#0">$50.53</a></li>
             <li><a  href="#0">$60.52</a></li>
          </ul>
          </div>
          </div>
          </div>
          </div>
          </section>
          <Chat></Chat>
        </>
    );
    
}
export default AdmimDashboard;