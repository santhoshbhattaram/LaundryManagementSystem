/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import Chat from "./Chat";
import "./Manage.css";

function UserOrders() {
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
<div class="body-content">

 <div class="row">
  <div class="column">
  <h4>Order Details</h4>
    <table>
      <tr>
        <th>#</th>
        <th> Order#</th>
        <th> Name</th>
        <th> Phone</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>1</td>
        <td>O12345</td>
        <td>Smith</td>
        <td>50</td>
        <td>P</td>
      </tr>
      <tr>
        <td>2</td>
        <td>O18955</td>
        <td>Jameson</td>
        <td>60</td>
        <td>W</td>
      </tr>
      <tr>
        <td>3</td>
        <td>O15355</td>
        <td>Johnson</td>
        <td>60</td>
        <td>W,E</td>
      </tr>
      <tr>
        <td>4</td>
        <td>O15355</td>
        <td>Johnson</td>
        <td>60</td>
        <td>W,E</td>
      </tr>
        <tr>
        <td>5</td>
        <td>O15355</td>
        <td>Johnson</td>
        <td>60</td>
        <td>W,E</td>
      </tr>
      <tr>
        <td>6</td>
        <td>O15355</td>
        <td>Johnson</td>
        <td>60</td>
        <td>W,E</td>
      </tr>
    
    </table>
  </div>
  {/* <div class="column">
  <h4>Manage Equipment/Service</h4>
    <table>
    
      <tr>
        <th>#</th>
        <th> Machine Name</th>
        <th >Status</th>
        <th>Order#</th>
        <th>Name</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Machine 1</td>
        <td>A</td>
        <td>O12345</td>
        <td>Raju</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Machine 21</td>
        <td>M</td>
        <td>O15355</td>
        <td>Raju</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Machine 21</td>
        <td>M</td>
        <td>O18955</td>
        <td>Birbal</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Machine 31</td>
        <td>M</td>
        <td>O18355</td>
        <td>Rathod</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Machine 11</td>
        <td>F</td>
        <td>O16355</td>
        <td>Rama</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Machine 6</td>
        <td>A</td>
        <td>O17355</td>
        <td>Jaison</td>
      </tr>
    </table>
  </div> */}
</div>


<div class="row">
  <div class="column">
     <h4>New Order</h4>
     <form>
        <table>
        <tr>
        <th><input type="text" id="fname" name="fname" placeholder="Name"/><br/><br/>
        <input type="text" id="Quantity" name="Quantity" placeholder="Quantity"/><br/><br/>
        <select id="selection">
            <option value="0">Make a selection</option>
            <option value="1">Wash</option>
            <option value="2">Dry Clean</option>
            <option value="3">Pressing</option>
            <option value="4">Fabric Soft</option>
        </select>
        </th>
        <th>
        <textarea id="comments" name="comments" placeholder="comments" rows="6" cols="">
            
        </textarea>
  <br/><br/>
  <input type="submit" className="saveButton" value="Save"/>
    </th></tr>
        </table>
</form>
  </div>
</div>  
</div>
  </section>
<Chat></Chat>
        </>
    );
}

export default UserOrders;