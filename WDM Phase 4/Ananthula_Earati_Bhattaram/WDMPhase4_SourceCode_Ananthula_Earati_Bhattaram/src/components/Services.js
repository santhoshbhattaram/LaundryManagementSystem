/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import './Services.css';

function Services() {
  return (
    <>
      <div className="body-service">
        <div className="container">
          <div className="contact-bg">
            <h2>SERVICES</h2>
          </div>
          <div className="card3">
            <div className="top-text">
              <div className="name">
                Manage equipment’s
              </div>
            </div>
            <div className="bottom-text">
              <div className="text">
                The personnel will utilize this to register each washing
                machine, drying machine, balances, irons and baskets.
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="top-text">
              <div className="name">
                Management of Customers /Personnel /Services
              </div>
            </div>
            <div className="bottom-text">
              <div className="text">
                This has the following details.

                <br></br>
                <li>
                  <span>Manage/Register Customer details</span>
                </li>
                <br></br>
                <li>
                  <span>Manage/Register Personnel details</span>
                </li>
                <br></br>
                <li>
                  <span>
                    Manage/Register the laundry services and their prices
                    according to weight.
                  </span>
                </li>
                <br></br>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="top-text">
              <div className="name">
                Management of Daily Tasks
              </div>
            </div>
            <div className="bottom-text">
              <div className="text">
                This module manages the daily tasks of the personnel like
                scheduling pickups, taking new orders and managing the services.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
