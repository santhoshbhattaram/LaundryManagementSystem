/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import { Component } from "react";
import React from "react";
import './Manage.css'
import axios from "axios";
class UserProfile extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      orderId:'',
      pickupdate:'',
      Comment:''
    }
  }
  render(){
    var orderId,pickupdate;
    var name=localStorage.getItem("name");
    const handleOrderSubmit =(event)=>
    { 
      pickupdate=this.state.pickupdate;
      orderId=this.state.orderId;

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
    
    const api_path='https://vxa3922.uta.cloud/WDMProject_Phase4/server/PickupUpdate.php';
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
        this.setState({SuccessMessage:'Pickup Updated',pickupdate:'',Comment:'',orderId:''});
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
        
    <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="profile-details">
        <span className="admin_name">{name}</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
      </nav>
    <div className="pickup-table">    
    <div className="body-content">
    <div className="row">
    <div className="column">
     <h4>Schedule for pickup</h4>
     <form onSubmit={handleOrderSubmit}>
        <table>
          <tbody>
        <tr>

        <th><label htmlFor="Order">Order Id:</label>
        <input type="text" id="orderid" name="Order Id" placeholder="Order Id" 
        value={this.state.orderId}
          onChange={(e)=>this.setState({ orderId: e.target.value  })}        
        /><br/><br/>
        <label htmlFor="start">Pickup date:</label>
        <input type="date" id="start" name="pickup-date"
        value={this.state.pickupdate}
        onChange={(e)=>this.setState({ pickupdate: e.target.value  })}  
        />
        </th>
        <th>
        <label htmlFor="start">Comments:</label>
        <textarea id="comments" name="comments" placeholder="comments"
        value={this.state.Comment} onChange={(e)=>this.setState({ Comment: e.target.value  })} 
        rows="5" cols="">
            
        </textarea>
  <br/><br/>
  <input type="submit" className="saveButton" value="Save"/>
    </th></tr>
    </tbody>
        </table>
</form>
<span id="error"  style={{ color: "red" }}>{this.state.ErrorMessag}</span>
<span id="success"  style={{ color: "green" }}>{this.state.SuccessMessage}</span>
  </div>
</div>
 
</div>
</div>
  </section>
  </>
  );
}
}

export default UserProfile;