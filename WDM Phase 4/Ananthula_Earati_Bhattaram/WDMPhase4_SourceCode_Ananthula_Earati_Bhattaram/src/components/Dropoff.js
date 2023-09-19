/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import { Component } from "react";
import React from "react";
import Chat from "./Chat";
import axios from "axios";
class Dropoff extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      orderId:'',
      pickupdate:'',
      Comment:'',
      cust:''
    }
  }
  render(){
    var orderId,pickupdate;
    var name=localStorage.getItem("name");
    var id=localStorage.getItem("Id");
    const handleOrderSubmit =(event)=>
    { 
      pickupdate=this.state.pickupdate;
      orderId=this.state.orderId;
      this.setState({cust:id});
    if(pickupdate==='' | orderId==='')
    {
      this.setState({ErrorMessag:'Please enter all fields'});
      event.preventDefault();
      return false;
    }
    else
    {
      this.setState({ErrorMessag:''});
    }   
    
    const api_path='https://vxa3922.uta.cloud/WDMProject_Phase4/server/DropOffUpdate.php';
      axios({
        method: 'post',
        url: api_path,
        headers: {
          'content-type': 'application/json'
        },
        data: this.state
      })
      .then(result => {
      if(result.data.update===1)
      {
        this.setState({SuccessMessage:'Delivery Updated',pickupdate:'',Comment:'',orderId:''});
        this.setState({orderId:''});
      }
  })
  .catch(error => this.setState({
      error: error.message
  }));
  event.preventDefault();
}
    return( 
        <>
    <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Dashboard</span>
      </div>
      <div class="profile-details">
        <span class="admin_name">{name}</span>
        <i class='bx bx-chevron-down' ></i>
      </div>
      </nav>
    <div class="pickup-table">    
    <div class="body-content">
    <div class="row">
    <div class="column">
     <h4>Schedule Drop Off</h4>
     
  </div>
</div>


<div class="row">
  <div class="column">

     <form onSubmit={handleOrderSubmit}>
        <table>
        <tr>

        <th><label for="Order">Order Id:</label><input type="text" id="orderid" name="Order Id" 
        placeholder="Order Id"  value={this.state.orderId}
        onChange={(e)=>this.setState({ orderId: e.target.value  })}/><br/><br/>
        <label for="start">Drop off :</label>
        <input type="date" id="start" name="pickup-date"
        value={this.state.pickupdate}
        onChange={(e)=>this.setState({ pickupdate: e.target.value  })}  
        />
        </th>
        <th>
        <label for="start">Address:</label>
        <textarea id="comments" name="comments" placeholder="comments" rows="5" cols=""
        value={this.state.Comment} onChange={(e)=>this.setState({ Comment: e.target.value  })}>
            
        </textarea>
  <br/><br/>
  <input type="submit" class="saveButton" value="Save"/>
    </th></tr>
        </table>
</form>
<span id="error"  style={{ color: "red" }}>{this.state.ErrorMessag}</span>
                <span id="success"  style={{ color: "green" }}>{this.state.SuccessMessage}</span>
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

export default Dropoff;