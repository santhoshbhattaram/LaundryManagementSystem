/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import "./Signup.css"
import logo from '../Images/logo.png';
import { Component } from "react";
import axios from "axios";

  class Signup extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      FName:'',
      LName:'',
      Cnumber:'',
      SPassword:'',
      CPassword:'',
      SEmail:'',
      ErrorMessag:'',
      SuccessMessage:'',
      dataSent:'',
      role:''
    };
  }
  render()
  {
    var FName,LName,Cnumber,SPassword,CPassword,SEmail,role;
    const handle_signup=(event)=>
    {
      //console.log(this.state);
      role=this.state.role;
      FName=this.state.FName;
      LName=this.state.LName;
      Cnumber=this.state.Cnumber;
      SPassword=this.state.SPassword;
      CPassword=this.state.CPassword;
      SEmail=this.state.SEmail;
      this.setState({ErrorMessag:'',SuccessMessage:''});
      //ErrorMessag=this.state.ErrorMessag;
    if(FName ==='' | LName ==='' | Cnumber ==='' | SPassword ==='' | CPassword ==='' | SEmail==='' |role==='')
    {
      this.setState({ErrorMessag:'Fields cannot be empty'});
      //setErrorMessag('Fields cannot be empty');
      event.preventDefault();
      return false;    
   }
  else
  {
    this.setState({ErrorMessag:''});
    //setErrorMessag('');
  } 
  if(Cnumber.length>10 | Cnumber.length <10)
  {     
    this.setState({ErrorMessag:'Please enter valid mobile number'});    
    //setErrorMessag('Please enter valid mobile number');
    event.preventDefault();
    return false;
  } 
  else
  {
    this.setState({ErrorMessag:''});
    //setErrorMessag('');   
  }
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  if(validEmail.test(SEmail))
  {
    this.setState({ErrorMessag:''});
    //setErrorMessag('');
  }
  else
  {
    this.setState({ErrorMessag:'Please enter valid Email ID'});
    //setErrorMessag('Please enter valid Email ID');
    event.preventDefault();
    return false;
  }
  
  if(SPassword === CPassword)
  {
    this.setState({ErrorMessag:''});
    if(SPassword.length>=8 & SPassword.length<=10)
    {
      this.setState({ErrorMessag:''});
    }
    else
    {
       this.setState({ErrorMessag:'Password should be between 8 to 10 characters'});
       event.preventDefault();
       return false;
    }
  }         
  else
  {
    this.setState({ErrorMessag:'Password & Confirm password is not match'});
    //setErrorMessag('Password & Confirm password is not match');
    event.preventDefault();
    return false;
  }
console.log(this.state);
   const api_path='http://127.0.0.1:8000/api/register';
        axios({
          method: 'post',
          url: api_path,
          headers: {
              'content-type': 'application/json'
          },
          data: this.state
      })
      .then(result => {
      if(result.data.Isuser===1)
      {
        this.setState({ErrorMessag:'User Already Exists'});
      }
      else
      {
        const api_path='https://vxa3922.uta.cloud/WDMProject_Phase4/server/Mail.php';
        axios({
          method: 'post',
          url: api_path,
          headers: {
              'content-type': 'application/json'
          },
          data: this.state
      })
      
        this.setState({SuccessMessage:'User has been created',LName:'',SEmail:'',FName:'',Cnumber:'',SPassword:'',CPassword:''});
      }
          // //console.log(result.data)
          // this.setState({
          //     dataSent: result.data.Isuser,
          // })
          console.log(this.state)
      })
      .catch(error => this.setState({
          error: error.message
      }));
      
  event.preventDefault();
}
    return(
    <>
    
        <form className="signup-form"  id="signup-form" onSubmit={handle_signup} >
        <div className="signup-form__logo-container">
            <h1><img src={logo} alt="logo" width="70" height="40"/>InstaWash</h1>            
        </div>
        <div className=" signup-form__content">
        <div className="signup-form__header"> <b>No Account?</b> <br/>Create a new account here</div>
            <input className="signup-form__input" type="text" 
            name="dc_firstname"
            id="dc_firstname"
            placeholder="First name" 
            value={this.state.FName}
            onChange={(e)=>this.setState({ FName: e.target.value })}           
            />
            <input className="signup-form__input" 
            type="text" 
            name="dc_lastname" 
            id="dc_lastname"
            value={this.state.LName}
            onChange={(e)=>this.setState({ LName: e.target.value })}  
            placeholder="Last name"/>
            <input className="signup-form__input" type="number" 
            name="dc_contact" 
            id="dc_contact" 
            placeholder="Contact number"
            value={this.state.Cnumber}
            onChange={(e)=>this.setState({ Cnumber: e.target.value })}  
            />
            <input className="signup-form__input" 
            type="text" name="dc_email" 
            id="dc_email"
            placeholder="Email" 
            value={this.state.SEmail}         
            onChange={(e)=>this.setState({ SEmail: e.target.value })}
            />
            <input className="signup-form__input" type="password"
             name="dc_password"
              id="dc_password"               
             placeholder="Password"
             value={this.state.SPassword}            
             onChange= {(e)=>this.setState({ SPassword: e.target.value })}
             />
            <input className="signup-form__input" 
            type="password" name="dc_Confirmpassword"
             id="dc_Confirmpassword" 
             value={this.state.CPassword}
             onChange={(e)=>this.setState({ CPassword: e.target.value })}
             placeholder="Confirm Password"/>
             
            <input type="radio" id="user" name="role" value="User"  onChange={(e)=>this.setState({role:"user"})}/>
            <label className="padding" htmlFor="user">User</label>
            <input type="radio" id="admin" name="role" value="Admin" onChange={(e)=>this.setState({role:"admin"})} />
            <label className="padding" htmlFor="admin" >Admin</label>
            <input
              type="radio"
              id="manager"
              name="role"
              value="Manager" onChange={(e)=>this.setState({role:"manager"})}
            />
            <label className="padding" htmlFor="visitor">Manager</label>
            <input
              type="radio"
              id="visitor"
              name="role"
              value="Visitor" onChange={(e)=>this.setState({role:"visitor"})}
            />
            <label htmlFor="visitor">Visitor</label>
            <br/>
            <br/>
            <button className= "signup-form__button" type="submit">Sign up</button>

            <br/>
            <span id="error"  style={{ color: "red" }}>{this.state.ErrorMessag}</span>
            <span id="success"  style={{ color: "green" }}>{this.state.SuccessMessage}</span>
        </div>
      </form> 
      <br />
      <br />
    </>
    );
  }
  }

export default Signup;
