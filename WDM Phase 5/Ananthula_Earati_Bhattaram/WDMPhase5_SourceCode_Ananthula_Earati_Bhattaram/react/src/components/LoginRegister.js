/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */


import './LoginRegister.css';
import logo from '../Images/logo.png';
import Signup from "./Signup";
import React, { Component } from "react";
import axios from 'axios';

class LoginRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      errormessage:'',
      dataSent:[],
      error:''
  }
}
  render(){
    var name;
    var password ;
//const [id,setId]=useState('');
    //const[name,setName]=useState('');
    //const[password,setPassword]=useState('');
    //const [errorMessage, setErrorMessage] = useState('');
    const baseUrl = process.env.PUBLIC_URL;
    const handleSubmit = (event) =>
    {
      name= this.state.name;
      password =this.state.password;
      this.setState({errormessage:''})
      // console.log(name);
      // console.log(password);
        if(name ==='' | password ==='')
        {
          this.setState({errormessage:'Fields cannot be empty'});
          event.preventDefault();
          return false;
         //this.state.errormessage='Fields cannot be empty';
        }
        else
        {
          this.setState({errormessage:''});
          //this.state.errormessage='';
        } 

        const api_path='http://127.0.0.1:8000/api/login';
        axios({
          method: 'post',
          url: api_path,
          headers: {
              'content-type': 'application/json'
          },
          data: this.state
      })
      .then(result => {
        console.log(result.data);    
        if(result.data.InvalidUser!==1)
        {
          window.localStorage.setItem('Id',result.data.Id);
          window.localStorage.setItem('name',result.data.Name);
          window.localStorage.setItem('role',result.data.role)  
        }  
        if(result.data.InvalidUser===1)
        {
          this.setState({errormessage:'Please enter valid credentials'});           
        }   
        else if(result.data.role==="user")
        {
          window.localStorage.setItem('jwt',"user");   
          window.location.href=baseUrl+'/UserDashboard';
        } 
        else if(result.data.role==="admin")
        {
          window.localStorage.setItem('jwt',"admin");
          window.location.href=baseUrl+"/admin";    
        } 
        else if(result.data.role==="visitor")
        {
          window.localStorage.setItem('jwt',"visitor");
          window.location.href=baseUrl+'/VisitorDashboard';
        }
        else if(result.data.role==="manager")
        {
          window.localStorage.setItem('jwt',"manager");
          window.location.href=baseUrl+'/ManageDashboard';  
        }

      })
      .catch(error => this.setState({
          error: error.message
      }));
      // console.log(this.state);
      //   if(name ==="admin@instawash.com" & password === "admin12345")
      //   {
      //     window.localStorage.setItem('jwt',"admin");
      //     window.location.href=baseUrl+"/admin";               
      //   }
      //   else if(name ==="manager@instawash.com" & password ==="manager12345")
      //   {
      //     window.localStorage.setItem('jwt',"manager");
          
      //     window.location.href=baseUrl+'/ManageDashboard';  
      //           }
      //   else if(name ==="user@gmail.com" & password ==="user123456")
      //   {       
      //     window.localStorage.setItem('jwt',"user");   

      //     window.location.href=baseUrl+'/UserDashboard';
      //   }
      //   else if(name==="visitor@gmail.com" & password==="visitor12345")
      //   {
      //     window.localStorage.setItem('jwt',"visitor");
      //     window.location.href=baseUrl+'/VisitorDashboard';
      //   }
      //   else
      //   {            
      //     this.setState({errormessage:'Please enter valid credentials'});
      //     //this.state.errormessage='Please enter valid credentials';   
      //   }
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
            value={name} onChange={(e)=>this.setState({ name: e.target.value })}
          />
          <input
            className="login-form__input"
            type="password"
            id="password"
            name="dc_password"
            placeholder="password"
            value={password} onChange={(e)=> this.setState({ password: e.target.value })}
          />
          <input type="submit"  className="login-form__button" />
          <div className="login-form__links">
            {/* <Link to="signup" className="login-form__link">
              New User?
            </Link> */}
            
            <br></br>
            <span id="error"  style={{ color: "red" }}>
              {this.state.errormessage}
              </span>
          </div>
        </div>
      </form>
      <Signup/>
      <br />
      <br />
    </>
  );
 }
}

export default LoginRegister;
