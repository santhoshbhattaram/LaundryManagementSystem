/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import "./Report.css";
import Chart from "react-google-charts";
import Chat from "./Chat";

function Report() {
  return (
    <>
    <section className="home-section">
      <nav>
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
          <span className="dashboard">Dashboard</span>
        </div>
        <div className="profile-details">
          <span className="admin_name">Sai Santhosh</span>
          <i className="bx bx-chevron-down"></i>
        </div>
      </nav>
      <div className="body-content-report">
        <div id="flex-container">
          <div class="flex-graph">
        <Chart
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["Year", "Sales", "Expenses", "Profit"],
            ["2017", 1000, 400, 200],
            ["2018", 1170, 460, 250],
            ["2019", 660, 1120, 300],
            ["2020", 1030, 540, 350],
          ]}
          options={{
            // Material design options
            chart: {
              title: "Company Performance",
              subtitle: "Sales, Expenses, and Profit: 2017-2020",
            },
          }}
        />
        </div>
        </div>
        <script type="text/javascript" src="../Js/admin.js"></script>
        <div id="flex-container">
          <div className="flex-item">
            <h3>Total Visits</h3>
            <p>2500</p>
          </div>
          <div className="flex-item">
            <h3>Total Sales</h3>
            <p>$15455.500</p>
          </div>
          <div className="flex-item">
            <h3>Tasks Done</h3>
            <p>1600</p>
          </div>
          <div className="flex-item">
            <h3>Employees</h3>
            <p>40</p>
          </div>
        </div>

        <div className="Reportrow">
          <div className="Reportcolumn">
            <h4>Monthly Sales Performance(2021)</h4>
            <table>
              <tbody>
                <tr>
                  <th>Month</th>
                  <th>Sales</th>
                </tr>
                <tr>
                  <td>May</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>June</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>190</td>
                </tr>
                <tr>
                  <td>August</td>
                  <td>230</td>
                </tr>
                <tr>
                  <td>September</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>October</td>
                  <td>140</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="Reportcolumn">
            <h4>Services by Employee - September(2021) </h4>
            <table>
              <tbody>
                <tr>
                  <th>Employee Id</th>
                  <th>Name</th>
                  <th>No. of Orders Processed</th>
                </tr>
                <tr>
                  <td>E15000</td>
                  <td>Jackson</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>E165032</td>
                  <td>Johnson</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>E165034</td>
                  <td>James</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>E165042</td>
                  <td>Rahul</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>E165062</td>
                  <td>Tim</td>
                  <td>35</td>
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

export default Report;
