/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */
import React, { Component } from "react";
import Chat from "./Chat";
import "./Manage.css";
import axios from "axios";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

class VisitorOrder extends Component {
  constructor(props)
  {
    super(props);
    this.state={
    selection :'',
      Customer_Id:'',
      Quantity:'',
      ErrorMessag:'',
      SuccessMessage:'',
      Comments:'',
      Totalcost:'',
      modules: [ClientSideRowModelModule, AllCommunityModules],
      managerOrdercolumnDefs : [
        { headerName:"Order id", field: "order_Id" , headerTooltip: "Order id"},
        { headerName:"Customer id", field: "Customer_Id", headerTooltip: "Customer_Id" },
        { headerName:"Type", field: "Type", headerTooltip: "Type" },
        { headerName:"Status", field: "Status", headerTooltip: "Status" },
        { headerName:"Quantity", field: "Quantity", headerTooltip: "Quantity" },
        { headerName:"Assigned to", field: "AssignedTo", headerTooltip: "AssignedTo" },
        { headerName:"TypeOfDelivery", field: "TypeOfDelivery", headerTooltip: "TypeOfDelivery" },
        {headerName:"Delivery Date",field:"DeliveryDate",headerTooltip:"DeliveryDate"}
      ]
    }

  }
  manageorderService= (params) => {
    //params.api.sizeColumnsToFit();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const updateData = (data) => {
      this.setState({ managerOrderData: data });
    };
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", "https://vxa3922.uta.cloud/WDMProject_Phase4/server/VisitorOrder.php");
    
    httpRequest.send(JSON.stringify(this.state));
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
         updateData(JSON.parse(httpRequest.responseText));
      }
    };
}

  render()
  {
    var username=localStorage.getItem("name");
    var id=localStorage.getItem("Id");
    var selection,Customer_Id,Quantity,comments;
    this.state.Customer_Id=id;
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

    return(
        <>
    <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="profile-details">
        <span className="admin_name">{username}</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>
<div className="body-content">

 <div className="row">
  <h4>Order Details</h4>
  <div id="myGrid"
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


<div className="row">
  <div className="column">
     <h4>New Order</h4>
                <form  onSubmit={handleOrderSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <th>
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
</div>  
</div>
  </section>
<Chat></Chat>
        </>
    );
  }
}

export default VisitorOrder;