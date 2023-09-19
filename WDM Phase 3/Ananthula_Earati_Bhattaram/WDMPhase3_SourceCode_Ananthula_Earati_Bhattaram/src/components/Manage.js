/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import "./Manage.css";
import Chat from "./Chat";
function Manage()
{
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
            <h4>Manage Orders</h4>
                <table>
                  <tbody>
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
                </tbody>
            </table>
        </div>
        <div className="column">
        <h4>Manage Equipment</h4>
        <table>
          <tbody>
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
            </tbody>
    </table>
  </div>
</div>


<div className="row">
  <div className="column">
     <h4>Manual Order</h4>
     <form>
        <table>
          <tbody>
        <tr>
        <th><input type="text" id="fname" name="fname" placeholder="Name"></input><br/><br/>
        <input type="text" id="lname" name="lname" placeholder="Quantity"></input><br/><br/>
        <select id="cars">
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
        <input type="submit" className="saveButton" value="Save"></input>
        </th></tr>
        </tbody>
    </table>
    </form>
  </div>
  <div className="column">
  <h4>Manage Tasks</h4>
    <table>
     <tbody>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Assigned To</th>
        <th>Desc</th>
        <th>Services</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Hemanth</td>
        <td>115</td>
        <td>Dry & Wash</td>
        <td>W,F,D</td>
      </tr>
       <tr>
        <td>2</td>
        <td>Raju</td>
        <td>125</td>
        <td>Fabric Clothes</td>
        <td>W,D,C</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Jaison</td>
        <td>130</td>
        <td>Drying</td>
        <td>W,E</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Ankith</td>
        <td>130</td>
        <td>Fabric Clothes</td>
        <td>W,E</td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
<div className="row">
  <div className="column">
    <h4>Add new employee</h4>
     <form>
        <table>
          <tbody>
        <tr>
        <th><input type="text" id="fname" name="fname" placeholder="First name"></input><br/><br/>
        <input type="text" id="lname" name="lname" placeholder="Last name"></input><br/><br/>
        <select id="employees">
            <option value="0">Role</option>
            <option value="1">Admin</option>
            <option value="2">Manager</option>
            <option value="3">Staff</option>
        </select>
        </th>
        <th>
        <textarea id="comments" name="comments" placeholder="comments" rows="6" cols="">
        </textarea>
        <br/><br/>
  <input type="submit" className="saveButton" value="Save"></input>
  </th>
</tr>
</tbody>
</table>
</form>
</div>
  <div className="column">
  <h4>Manage Employees</h4>
    <table>
      <tbody>
      <tr>
        <th>Employee Number</th>
        <th>Name</th>
        <th>Assigned To</th>
        <th>Duties</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Hemanth</td>
        <td>115</td>
        <td>Dry & Wash</td>
      </tr>
       <tr>
        <td>2</td>
        <td>Raju</td>
        <td>125</td>
        <td>Fabric Clothes</td>
      </tr>
         <tr>
        <td>3</td>
        <td>Jaison</td>
        <td>130</td>
        <td>Drying</td>
      </tr>
         <tr>
        <td>4</td>
        <td>Ankith</td>
        <td>130</td>
        <td>Fabric Clothes</td>
      </tr>
      </tbody>
    </table>
  </div>
</div> 
</div>
  </section>
  <Chat></Chat>
        </>
    );
}
export default Manage;