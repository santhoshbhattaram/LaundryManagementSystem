/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import Chat from "./Chat";
import "./Manage.css";

function Complain() {
    return(
        <>
    <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="profile-details">
        <span className="admin_name">Sai Santhosh</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>
<div className="body-content">

 <div className="row">
  <div className="column">
     
  <form className='complain'>
       <h3> Compain/Feedback</h3>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Complain/Feedback"
                className="form-control"
              ></textarea>
              <input type="submit" className="saveButton" value="Send message" />
            </form>
  </div>
</div>  
</div>
  </section>
<Chat></Chat>
        </>
    );
}

export default Complain;