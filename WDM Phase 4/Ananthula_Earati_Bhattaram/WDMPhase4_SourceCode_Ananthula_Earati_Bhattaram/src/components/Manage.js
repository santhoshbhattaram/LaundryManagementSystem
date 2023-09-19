/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React, { Component } from "react";
import "./Manage.css";
import Chat from "./Chat";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import axios from "axios";


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

class Manage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modules: [ClientSideRowModelModule, AllCommunityModules],
      managerOrdercolumnDefs : [
        { headerName:"Order id", field: "order_Id" , headerTooltip: "Order id"},
        { headerName:"Customer id", field: "Customer_Id", headerTooltip: "Customer_Id" },
        { headerName:"Type", field: "Type", headerTooltip: "Type" },
        { headerName:"Status", field: "Status", headerTooltip: "Status" },
        { headerName:"Quantity", field: "Quantity", headerTooltip: "Quantity" },
        { headerName:"Assigned to", field: "AssignedTo", headerTooltip: "AssignedTo" },
        {
          headerName: "action",
          cellRenderer: actionCellRenderer,
          suppressCellFlash: true,
          editable: false,
          colId: "action",
          headerTooltip: "action"
        },
      ],
      managerEquipmentcolumnDefs : [
        { headerName:"Equipment id", field: "Equipment_Id" , headerTooltip: "Order id"},
        { headerName:"Equipment Name", field: "EquipmentName", headerTooltip: "Equipment Name" },
        { headerName:"Equipment Type", field: "EquipmentType", headerTooltip: "Equipment Type" },
        { headerName:"Status", field: "Status", headerTooltip: "Status" },
        {
          headerName: "action",
          cellRenderer: actionCellRenderer,
          suppressCellFlash: true,
          editable: false,
          colId: "action",
          headerTooltip: "action"
        },
      ],
      //`TaskId`, `Personnel_Id`, `Order_Id`, `Status`
      manageTaskscolumnDefs : [
        { headerName:"Task Id", field: "TaskId", headerTooltip: "Task Id" },
        { headerName:"Personnel Id", field: "Personnel_Id", headerTooltip: "Personnel Id" },
        { headerName:"Order Id", field: "Order_Id", headerTooltip: "Order Id" },
        { headerName:"Status", field: "Status", headerTooltip: "Status" },

      ],
      //`Personnel_Id`, `FName`, `LName`, `ContactNo`, `Email`, `UserRole`
      manageEmployeescolumnDefs : [
        { headerName:"Personnel Id", field: "Personnel_Id", headerTooltip: "Personnel Id" },
        { headerName:"First Name", field: "FName", headerTooltip: "First Name" },
        { headerName:"Last Name", field: "LName", headerTooltip: "Last Name" },
        { headerName:"Contact No", field: "ContactNo", headerTooltip: "Contact No" },
        { headerName:"Email", field: "Email", headerTooltip: "Email" },
        { headerName:"Role", field: "UserRole", headerTooltip: "Role" },
        // {
        //   headerName: "action",
        //   cellRenderer: actionCellRenderer,
        //   suppressCellFlash: true,
        //   editable: false,
        //   colId: "action",
        //   headerTooltip: "action"
        // },
      ],
      columnDefs: [
        { field: "Equipment_Id" },
        { field: "Type" },
        { field: "Registered_By" },
        {
          headerName: "action",
          cellRenderer: actionCellRenderer,
          suppressCellFlash: true,
          editable: false,
          colId: "action",
        },
      ],
      defaultColDef: {
        editable: true,
        wrapText: true,
        autoHeight: true,
        tooltipShowDelay: 500,
      },
      rowData: null,
      managerOrderData: null,
      manageEquipmentData: null,
      manageTasksData: null,
      manageEmployeesData: null,
      style: { width: "100%", height: "100%" },
      selection:'',
      Customer_Id:'',
      Quantity:'',
      ErrorMessag:'',
      SuccessMessage:'',
      Comments:'',
      Totalcost:'',
      EName:'',
      EType:'',
      ErrorMessag1:'',
      SuccessMessage1:''
    };
  }

  manageorderService= (params) => {
    //params.api.sizeColumnsToFit();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const updateData = (data) => {
      this.setState({ managerOrderData: data });
    };
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Orders.php");
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
         updateData(JSON.parse(httpRequest.responseText));
      }
    };
}

manageEquipmentService= (params) => {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  const updateData = (data) => {
    this.setState({ manageEquipmentData: data });
  };
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Equipment.php");
  httpRequest.send();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
       updateData(JSON.parse(httpRequest.responseText));
    }
  };
}

manageTaskService= (params) => {
  params.api.sizeColumnsToFit();
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  const updateData = (data) => {
    this.setState({ manageTasksData: data });
  };
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Tasks.php");
  httpRequest.send();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
       updateData(JSON.parse(httpRequest.responseText));
    }
  };
}

manageEmployeesService = (params) => {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  const updateData = (data) => {
    this.setState({ manageEmployeesData: data });
  };
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Personnel.php");
  httpRequest.send();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
       updateData(JSON.parse(httpRequest.responseText));
    }
  };
}

  onCellClickedmanageorder(params) {
    // Handle click event for action cells
    if (
      params.column.colId === "action" &&
      params.event.target.dataset.action
    ) {
      let action = params.event.target.dataset.action;

      if (action === "edit") {
        params.api.startEditingCell({
          rowIndex: params.node.rowIndex,
          // gets the first columnKey
          colKey: params.columnApi.getDisplayedCenterColumns()[0].colId,
        });
      }

      if (action === "delete") {
        
        const xhr = new XMLHttpRequest();
        const httpRequest=new XMLHttpRequest();
        xhr.open('POST', "https://vxa3922.uta.cloud/WDMProject_Phase4/server/OrderDelete.php");

        xhr.send(JSON.stringify(params.node.data));
        httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Orders.php");

        httpRequest.send();

        httpRequest.onreadystatechange = () => {

          if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            params.api.setRowData(JSON.parse(httpRequest.responseText));

          };
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
        };
      }

      if (action === "update") {

        const httpRequest = new XMLHttpRequest();

        params.api.stopEditing(false);

        const xhr = new XMLHttpRequest();

        xhr.open('POST', "https://vxa3922.uta.cloud/WDMProject_Phase4/server/OrderUpdate.php");

        xhr.send(JSON.stringify(params.data))

        if (xhr.readyState === 4 && xhr.status === 200) {

        httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Orders.php");

        httpRequest.send();

        httpRequest.onreadystatechange = () => {

          if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            params.api.setRowData(JSON.parse(httpRequest.responseText));
            window.location.reload();

          }
        }
        };

      }

      if (action === "cancel") {
        params.api.stopEditing(true);
      }
    }
  }

  onCellClickedNEW(params) {
    // Handle click event for action cells
    if (
      params.column.colId === "action" &&
      params.event.target.dataset.action
    ) {
      let action = params.event.target.dataset.action;

      if (action === "edit") {
        params.api.startEditingCell({
          rowIndex: params.node.rowIndex,
          // gets the first columnKey
          colKey: params.columnApi.getDisplayedCenterColumns()[0].colId,
        });
      }

      if (action === "delete") {
        const xhr = new XMLHttpRequest();
        const httpRequest=new XMLHttpRequest();
        xhr.open('POST', "https://vxa3922.uta.cloud/WDMProject_Phase4/server/EquipDelete.php");

        xhr.send(JSON.stringify(params.node.data));
        httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Equipment.php");

        httpRequest.send();

        httpRequest.onreadystatechange = () => {

          if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            params.api.setRowData(JSON.parse(httpRequest.responseText));

          };
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
        };
      }

      if (action === "update") {

        const httpRequest = new XMLHttpRequest();

        params.api.stopEditing(false);

        const xhr = new XMLHttpRequest();

        xhr.open('POST', "https://vxa3922.uta.cloud/WDMProject_Phase4/server/EquipUpdate.php");

        xhr.send(JSON.stringify(params.data))

        if (xhr.readyState === 4 && xhr.status === 200) {

        httpRequest.open("GET", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/Equipment.php");

        httpRequest.send();

        httpRequest.onreadystatechange = () => {

          if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            params.api.setRowData(JSON.parse(httpRequest.responseText));

          }
        }
      }
    }

      if (action === "cancel") {
        params.api.stopEditing(true);
      }
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
  render() {
    var username=localStorage.getItem("name");
    var selection,Customer_Id,Quantity,comments;
    const handleOrderSubmit =(event)=>
    { 
    selection=this.state.selection;
    Customer_Id=this.state.Customer_Id;
    Quantity=this.state.Quantity;
    comments=this.state.Comments;

    if(selection==='' | Customer_Id==='' | Quantity==='' | comments==='')
    {
      this.setState({ErrorMessag:'Please enter all fields'});
      event.preventDefault();
      return false;
    }
    else
    {
      this.setState({ErrorMessag:''});
    }   
    let totalcost=Quantity*10;
    this.setState({Totalcost: totalcost});
    const api_path='https://vxa3922.uta.cloud/WDMProject_Phase4/server/InsertOrder.php';
      axios({
        method: 'post',
        url: api_path,
        headers: {
          'content-type': 'application/json'
        },
        data: this.state
      })
      .then(result => {
      if(result.data.inserted===1)
      {
        this.setState({SuccessMessage:'Order Created',Quantity:'',selection:'',Comments:''});
        this.setState({Customer_Id:''});
      }
  })
  .catch(error => this.setState({
      error: error.message
  }));
    event.preventDefault();

    }

    const handleEquipSubmit =(event)=>
    { 
    var Ename=this.state.EName;
    var EType =this.state.EType;
    
    if(Ename==='' | EType==='' )
    {
      this.setState({ErrorMessag1:'Please enter all fields'});
      event.preventDefault();
      return false;
    }
    else
    {
      this.setState({ErrorMessag1:''});
    }   
    const api_path='https://vxa3922.uta.cloud/WDMProject_Phase4/server/InsertEquipment.php';
      axios({
        method: 'post',
        url: api_path,
        headers: {
          'content-type': 'application/json'
        },
        data: this.state
      })
      .then(result => {
      if(result.data.einsert===1)
      {
        this.setState({SuccessMessage1:'Equipment Created',EType:''});
        this.setState({EName:''})
        event.preventDefault();
        return false;
      }
      else
      {
        return false;
      }
  })
  .catch(error => this.setState({
      error: error.message
  }));
    if(this.state.datasent===1)
    {
      this.setState({SuccessMessage1:'Equipment Created',EType:''});
      this.setState({EName:''})
      event.preventDefault();
      return false;
    }

    event.preventDefault();

    }
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
          <div className="body-content">
            <div className="row">
              <div className="column">
                <h4>Manage Orders</h4>
                <div
                  id="myGrid"
                  style={{
                    height: "300px"
                  }}
                  className="ag-theme-alpine"
                >
                  <AgGridReact id='table-1'
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
                    tooltipShowDelay={this.state.tooltipShowDelay}
                  />
                </div>
              </div>
              <div className="column">
                <h4>Manage Equipment</h4>
                <div
                  id="myGrid"
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="ag-theme-alpine"
                >
                  <AgGridReact
                    onRowEditingStopped={this.onRowEditingStopped}
                    onRowEditingStarted={this.onRowEditingStarted}
                    onCellClicked={this.onCellClickedNEW}
                    editType="fullRow"
                    suppressClickEdit={true}
                    modules={this.state.modules}
                    columnDefs={this.state.managerEquipmentcolumnDefs}
                    defaultColDef={this.state.defaultColDef}
                    enableRangeSelection={true}
                    onGridReady={this.manageEquipmentService}
                    rowData={this.state.manageEquipmentData}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <h4>Manual Order</h4>
                <form  onSubmit={handleOrderSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Customer ID"
                            vaule={this.state.Customer_Id}
                            onChange={(e)=>this.setState({ Customer_Id: e.target.value  })}
                          ></input>
                          <br />
                          <br />
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder="Quantity"
                            value={this.state.Quantity}
                            onChange={(e)=>this.setState({ Quantity: e.target.value  })}
                          ></input>
                          <br />
                          <br />
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder="Service"
                            value={this.state.selection}
                            onChange={(e)=>this.setState({ selection: e.target.value  })}></input>
                        </th>
                        <th>
                          <textarea
                            id="comments"
                            name="comments"
                            placeholder="comments"
                            rows="6"
                            cols=""
                            value={this.state.Comments}
                            onChange={(e)=>this.setState({ Comments: e.target.value  })}
                          ></textarea>
                          <br />
                          <br />
                          <input
                            type="submit"
                            className="saveButton"
                            value="Save"
                          ></input>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <span id="error"  style={{ color: "red" }}>{this.state.ErrorMessag}</span>
                <span id="success"  style={{ color: "green" }}>{this.state.SuccessMessage}</span>
              </div>
              <div className="column">
                <h4>Manage Tasks</h4>
                <div
                  id="myGrid"
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="ag-theme-alpine"
                >
                  <AgGridReact
                    onRowEditingStopped={this.onRowEditingStopped}
                    onRowEditingStarted={this.onRowEditingStarted}
                    onCellClicked={this.onCellClicked}
                    editType="fullRow"
                    suppressClickEdit={true}
                    modules={this.state.modules}
                    columnDefs={this.state.manageTaskscolumnDefs}
                    defaultColDef={this.state.defaultColDef}
                    enableRangeSelection={true}
                    onGridReady={this.manageTaskService}
                    rowData={this.state.manageTasksData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <h4>Add Equipment</h4>
                <form onSubmit={handleEquipSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Equipment Name"
                            value={this.state.EName}
                            onChange={(e)=>this.setState({ EName: e.target.value  })}
                          ></input>
                          <br />
                          <br />
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder="Type"
                            value={this.state.EType}
                            onChange={(e)=>this.setState({ EType: e.target.value  })}
                          ></input>
                          <br />
                          <br />                       
                        </th>
                        <th>
                          <br />
                          <br />
                          <input
                            type="submit"
                            className="saveButton"
                            value="Save"
                          ></input>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <span id="error"  style={{ color: "red" }}>{this.state.ErrorMessag1}</span>
                <span id="success"  style={{ color: "green" }}>{this.state.SuccessMessage1}</span>
              </div>
              <div className="column">
                <h4>Manage Employees</h4>
                <div
                  id="myGrid"
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="ag-theme-alpine"
                >
                  <AgGridReact
                    onRowEditingStopped={this.onRowEditingStopped}
                    onRowEditingStarted={this.onRowEditingStarted}
                    onCellClicked={this.onCellClicked}
                    editType="fullRow"
                    suppressClickEdit={true}
                    modules={this.state.modules}
                    columnDefs={this.state.manageEmployeescolumnDefs}
                    defaultColDef={this.state.defaultColDef}
                    enableRangeSelection={true}
                    onGridReady={this.manageEmployeesService}
                    rowData={this.state.manageEmployeesData}
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

export default Manage;
