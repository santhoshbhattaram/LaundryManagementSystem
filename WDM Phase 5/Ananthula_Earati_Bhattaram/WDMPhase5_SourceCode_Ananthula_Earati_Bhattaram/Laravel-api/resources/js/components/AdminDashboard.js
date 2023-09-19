/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React, { Component } from "react";
import { Icon } from '@iconify/react';
import bxMenu from '@iconify/icons-bx/bx-menu';
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down';
import bxCartAlt from '@iconify/icons-bx/bx-cart-alt';
import bxsCartAdd from '@iconify/icons-bx/bxs-cart-add';
import bxCart from '@iconify/icons-bx/bx-cart';
import bxsCartDownload from '@iconify/icons-bx/bxs-cart-download';
import Chat from "./Chat";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

function actionCellRenderer(params) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  if (isCurrentRowEditing) {
    eGui.innerHTML = `
<button  class="action-button update"  data-action="update"> update  </button> <button  class="action-button cancel"  data-action="cancel" > cancel </button>
`;
  } else {
    eGui.innerHTML = `
<button class="action-button edit"  data-action="edit" > edit  </button> <button class="action-button delete" data-action="delete" > delete </button>
`;
  }

  return eGui;
}

class AdmimDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminDashboardData: [],

          modules: [ClientSideRowModelModule, AllCommunityModules],
          managerOrdercolumnDefs : [
            { headerName:"Order id", field: "order_Id" , headerTooltip: "Order id"},
            { headerName:"Customer id", field: "Customer_Id", headerTooltip: "Customer_Id" },
           
            { headerName:"Status", field: "Status", headerTooltip: "Status" },
            { headerName:"Quantity", field: "Quantity", headerTooltip: "Quantity" },
           
    
            
          ],
          rowData: null,
          managerOrderData: null,
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
    httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/RecentOrders.php");
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
         updateData(JSON.parse(httpRequest.responseText));
      }
    };
}
   getAdminDashboardData = () => {
    const updateData = (data) => {
      this.setState({ adminDashboardData: data });
    };
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/AdminDashboard.php");
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  }

  componentDidMount() {
    this.getAdminDashboardData();
  }

  render() {
    var username=localStorage.getItem("name");
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
        <span className="admin_name">{username}</span>
        <Icon icon={bxChevronDown} />
      </div>
    </nav>

    <div className="home-content">
      <div className="overview-boxes" >
        <div className="box" >
          <div className="right-side" >
            <div className="box-topic" >Total Order</div>
            <div className="number" >{this.state.adminDashboardData.TotalOrder}</div>
          </div>
          <Icon icon={bxCartAlt} className="boxCart boxCartOne" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Equipments</div>
            <div className="number">{this.state.adminDashboardData.Equipments}</div>
          </div>
          <Icon icon={bxsCartAdd} className="boxCart boxCartTwo"/>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Orders Pending</div>
            <div className="number">{this.state.adminDashboardData.OrdersPending}</div>
          </div>
          <Icon icon={bxCart} className="boxCart boxCartThree"/>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Profit</div>
            <div className="number">${this.state.adminDashboardData.TotalProfit}</div>
          </div>
          <Icon icon={bxsCartDownload} className="boxCart boxCartFour"/>
        </div>
      </div>
      
      <div style={{
                    height: "300px"
                  }} className="ag-theme-alpine">
                    <div className="right-side" >Recent Orders</div>
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
          </section>
          <Chat></Chat>
        </>
    )}
    
}
export default AdmimDashboard;