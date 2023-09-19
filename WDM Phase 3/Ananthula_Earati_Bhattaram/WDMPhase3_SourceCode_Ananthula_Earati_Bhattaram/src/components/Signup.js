/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React, { useState } from "react";
import "./Signup.css"
import logo from '../Images/logo.png';
 

  function Signup() {
  const[FName,setFName]=useState('');
  const[LName,setLName]=useState('');
  const[Cnumber,setCnumber]=useState('');
  const[SPassword,setSPassword]=useState('');  
  const[CPassword,setCPassword]=useState('');  
  const[SEmail,setSEmail]=useState(''); 
  const [ErrorMessag, setErrorMessag] = useState('');
const handle_signup=(event)=>
{
  if(FName ==='' | LName ==='' | Cnumber ==='' | SPassword ==='' | CPassword ==='' | SEmail==='')
  {
    setErrorMessag('Fields cannot be empty');
    event.preventDefault();
    return false;
    
  }
  else
  {
    setErrorMessag('');
  } 
  if(Cnumber.length>10 | Cnumber.length <10)
  {         
    setErrorMessag('Please enter valid mobile number');
    event.preventDefault();
    return false;
  } 
  else
  {
    setErrorMessag('');   
  }
  if(SEmail.indexOf('@')!==-1 & SEmail.indexOf('.')!==-1)
  {
    setErrorMessag('');
  }
  else
  {
    setErrorMessag('Please enter valid Email ID');
    event.preventDefault();
    return false;
  }

  if(SPassword === CPassword)
  {
    setErrorMessag('');
  }         
  else
  {
        
    setErrorMessag('Password & Confirm password is not match');
    event.preventDefault();
    return false;
  }
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
            onChange={(e)=> setFName(e.target.value)}
            />
            <input className="signup-form__input" 
            type="text" 
            name="dc_lastname" 
            id="dc_lastname"
            onChange={(e)=> setLName(e.target.value)}
            placeholder="Last name"/>
            <input className="signup-form__input" type="number" 
            name="dc_contact" 
            id="dc_contact" 
            placeholder="Contact number"
            onChange={(e)=> setCnumber(e.target.value)}
            />
            <input className="signup-form__input" 
            type="text" name="dc_email" 
            id="dc_email"
            placeholder="Email"
            onChange={(e)=> setSEmail(e.target.value)}
            />
            <input className="signup-form__input" type="password"
             name="dc_password"
              id="dc_password"               
             placeholder="Password"
             onChange={(e)=> setSPassword(e.target.value)}
             />
            <input className="signup-form__input" 
            type="password" name="dc_Confirmpassword"
             id="dc_Confirmpassword" 
             onChange={(e)=> setCPassword(e.target.value)}
             placeholder="Confirm Password"/>
            <button className= "signup-form__button" type="submit">Sign up</button>

            <br/>
            <span id="error"  style={{ color: "red" }}>{ErrorMessag}</span>
        </div>
      </form> 
      <br />
      <br />
    </>
    );
  }

export default Signup;
