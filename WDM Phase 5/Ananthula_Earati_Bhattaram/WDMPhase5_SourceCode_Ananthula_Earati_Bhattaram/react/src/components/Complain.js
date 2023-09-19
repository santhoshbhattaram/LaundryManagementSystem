/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import { Component } from "react";
import Chat from "./Chat";
import "./Manage.css";
import axios from "axios";

class Complain extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      IncidentType:'',
      Order:'',
      Comment:'',
      ErrorMessag:'',
      SuccessMessage:''
    }
  }
  render()
  {
    var IncidentType,Order,Comment;
    var username=localStorage.getItem("name");
    const handlecomplain =(event)=>
    { 
      IncidentType=this.state.IncidentType;
      Order=this.state.Order;
      Comment=this.state.Comment;

    if(IncidentType==='' | Order=='' | Comment=='')
    {
      this.setState({ErrorMessag:'Please enter all fields'});
      event.preventDefault();
      return false;
    }
    else
    {
      this.setState({ErrorMessag:''});
    }   
    console.log(this.state);
    const api_path='https://vxa3922.uta.cloud/WDMProject_Phase4/server/Complain.php';
      axios({
        method: 'post',
        url: api_path,
        headers: {
          'content-type': 'application/json'
        },
        data: this.state
      })
      .then(result => {

        this.setState({SuccessMessage:'Registered Complaint',IncidentType:'',Order:'',Comment:''});
      
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
  <div className="column">
     
  <form className='complain' onSubmit={handlecomplain}>
       <h3> Report an Incident</h3>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="IncidentType"  value={this.state.IncidentType} 
                  onChange={(e)=>this.setState({ IncidentType: e.target.value  })} 
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Order"
                  value={this.state.Order}  
                  onChange={(e)=>this.setState({ Order: e.target.value  })} 
                />
              </div>
              <textarea
                rows="5"
                placeholder="Comment"
                value={this.state.Comment}
                className="form-control"  onChange={(e)=>this.setState({ Comment: e.target.value  })} 
              ></textarea>
              <input type="submit" className="saveButton" value="Report an Incident" />
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

export default Complain;