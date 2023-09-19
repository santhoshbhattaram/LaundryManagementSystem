/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React, {Component} from "react";
import "./Report.css";
import Chart from "react-google-charts";
import Chat from "./Chat";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

class Report extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      reportTotalData: [],
      modules: [ClientSideRowModelModule, AllCommunityModules],
      managerOrdercolumnDefs : [
        { headerName:"Month", field: "Month" , headerTooltip: "Month"},
        { headerName:"Orders", field: "Count", headerTooltip: "Customer_Id" }
        
      ],
      rowData: null,
      managerOrderData: null,
      chartdata:[],
      result:[]
    }
  }
  
  onRowEditingStarted(params) {
    params.api.refreshCells({
      columns: ["action"],
      rowNodes: [params.node],
      force: true,
    });
  }
  onRowEditingStopped(params) {
    params.api.refreshCells({
      columns: ["action"],
      rowNodes: [params.node],
      force: true,
    });
  }
  manageorderService= (params) => {
    params.api.sizeColumnsToFit();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const updateData = (data) => {
      this.setState({ managerOrderData: data });
    };
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/MonthlyPerformance.php");
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
         updateData(JSON.parse(httpRequest.responseText));
      }
    };
}
  getReportTotalData = () => {
    const updateData = (data) => {
      this.setState({ reportTotalData: data });
    };
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/ReportTotals.php");
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  }

  getReportTotalData = () => {
    const updateData = (data) => {
      this.setState({ reportTotalData: data });
    };
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/ReportTotals.php");
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
        updateData1(JSON.parse(httpRequest.responseText));
      }
    };

    const updateData1 = (data) => {
      this.setState({ chartdata: data });
      var chardata=this.state.chartdata;
      var result = [];

    for(var i in chardata){
    result.push([i, chardata[i]]);
    }
    this.setState({result:result});
  }
  }

  componentDidMount() {
    this.getReportTotalData();
  }
  render(){
    

    var username=localStorage.getItem("name");

  return (
    <>
    <section className="home-section">
      <nav>
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
          <span className="dashboard">Dashboard</span>
        </div>
        <div className="profile-details">
          <span className="admin_name">{username}</span>
          <i className="bx bx-chevron-down"></i>
        </div>
      </nav>
      <div className="body-content-report">
        <div id="flex-container">
          <div className="flex-graph">
        <Chart
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={this.state.result}
          options={{
            // Material design options
            chart: {
              title: "Company Performance",
              subtitle: "Sales, Tasks, Employees",
            },
          }}
        />
        </div>
        </div>
        <script type="text/javascript" src="../Js/admin.js"></script>
        <div id="flex-container">
          <div className="flex-item">
            <h3>Total Visitors</h3>
            <p>{this.state.reportTotalData.TotalVisitors}</p>
          </div>
          <div className="flex-item">
            <h3>Total Sales</h3>
            <p>${this.state.reportTotalData.TotalSales}</p>
          </div>
          <div className="flex-item">
            <h3>Tasks Done</h3>
            <p>{this.state.reportTotalData.TotalTasks}</p>
          </div>
          <div className="flex-item">
            <h3>Employees</h3>
            <p>{this.state.reportTotalData.Employees}</p>
          </div>
        </div>

        <div className="Reportrow">
          <div className="Reportcolumn">
            <h4>Monthly Sales Performance(2021)</h4>
            <div style={{
                    height: "300px"
                  }} className="ag-theme-alpine">
                   
      <AgGridReact style={{ background:"white"}} id='table-1'
                    onRowEditingStopped={this.onRowEditingStopped}
                    onRowEditingStarted={this.onRowEditingStarted}
                    onCellClicked={this.onCellClickedmanageorder}
                    editType="fullRow"
                    suppressClickEdit={true}
                    modules={this.state.modules}
                    columnDefs={this.state.managerOrdercolumnDefs}
                    defaultColDef={this.state.defaultColDef}
                    enableRangeSelection={true}
                    onGridReady={this.manageorderService}
                    rowData={this.state.managerOrderData}                   
                    />
      </div>
            
          
          </div>
        
        </div>
      </div>
    </section>
    <Chat></Chat>
    </>
  );
}
}

export default Report;
