/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React, { useState } from "react";
import './LoginRegister.css';
import logo from '../Images/logo.png';
import Signup from "./Signup";

function LoginRegister() {
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const baseUrl = process.env.PUBLIC_URL;
    const handleSubmit = (event) =>
    {
        if(name ==='' | password ==='')
        {
          setErrorMessage('Fields cannot be empty');
        }
        else
        {
          setErrorMessage('');
        } 
        if(name ==="admin@instawash.com" & password === "admin12345")
        {
          window.localStorage.setItem('jwt',"admin");
          window.location.href=baseUrl+"/admin";               
        }
        else if(name ==="manager@instawash.com" & password ==="manager12345")
        {
          window.localStorage.setItem('jwt',"manager");
          
          window.location.href=baseUrl+'/ManageDashboard';  
                }
        else if(name ==="user@gmail.com" & password ==="user123456")
        {       
          window.localStorage.setItem('jwt',"user");   

          window.location.href=baseUrl+'/UserDashboard';
        }
        else if(name==="visitor@gmail.com" & password==="visitor12345")
        {
          window.localStorage.setItem('jwt',"visitor");
          window.location.href=baseUrl+'/VisitorDashboard';
        }
        else
        {            
          setErrorMessage('Please enter valid credentials');   
        }
        event.preventDefault();
                    
      //setErrorMessage('Example error message!');
    }
  return (
    <>

      <form className="login-form" onSubmit={handleSubmit} method="POST" id="login-form">
      <div className="login-form__logo-container">
            <h1><img src={logo} alt="Logo" width="70" height="40"/>InstaWash</h1>
        </div>
        <div className=" login-form__content">
          <div className="login-form__header">Login to your account</div>
          <input
            className="login-form__input"
            type="text"
            id="username"
            name="dc_username"
            placeholder="Username"
            value={name} onChange={(e)=> setName(e.target.value)}
          />
          <input
            className="login-form__input"
            type="password"
            id="password"
            name="dc_password"
            placeholder="password"
            value={password} onChange={(e)=> setPassword(e.target.value)}
          />
          <input type="submit"  className="login-form__button" />
          <div className="login-form__links">
            {/* <Link to="signup" className="login-form__link">
              New User?
            </Link> */}
            
            <br></br>
            <span id="error"  style={{ color: "red" }}>{errorMessage}</span>
          </div>
        </div>
      </form>
      <Signup/>
      <br />
      <br />
    </>
  );
}

export default LoginRegister;
