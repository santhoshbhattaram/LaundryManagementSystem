/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";

function UserProfile() {
    return( 
        <>
    <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Dashboard</span>
      </div>
      <div class="profile-details">
        <span class="admin_name">Sai Santhosh</span>
        <i class='bx bx-chevron-down' ></i>
      </div>
      </nav>
    <div class="pickup-table">    
    <div class="body-content">
    <div class="row">
    <div class="column">
     <h4>Schedule for pickup</h4>
      <table>
        <tr>
            <th>#</th>
            <th>Services</th>
            <th>Cost</th>
            <th>weight</th>
            <th>Time</th>
        </tr>
        <tr>
            <td>1</td>
            <td> Wash</td>
            <td>$99</td>
            <td>10lbs</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2</td>
            <td> Dry Clean</td>
            <td>$80</td>
            <td>10lbs</td>
            <td>30</td>
        </tr>
    <tr>
        <td>3</td>
        <td> Cold Press</td>
        <td>$35</td>
        <td>10lbs</td>
        <td>10</td>
    </tr>
    <tr>
        <td>4</td>
        <td> Fabric Soft</td>
        <td>$998</td>
        <td>58lbs</td>
        <td>50</td>
    </tr>
    
   </table>
  </div>
</div>


<div class="row">
  <div class="column">

     <form>
        <table>
        <tr>

        <th><label for="Order">Order Id:</label><input type="text" id="orderid" name="Order Id" placeholder="Order Id" value="12345"/><br/><br/>
        <label for="start">Pickup date:</label>
        <input type="date" id="start" name="pickup-date"/>
        </th>
        <th>
        <label for="start">Comments:</label>
        <textarea id="comments" name="comments" placeholder="comments" rows="5" cols="">
            
        </textarea>
  <br/><br/>
  <input type="submit" class="saveButton" value="Save"/>
    </th></tr>
        </table>
</form>
  </div> 

</div>  
</div>
</div>
  </section>
  </>
  );
}

export default UserProfile;