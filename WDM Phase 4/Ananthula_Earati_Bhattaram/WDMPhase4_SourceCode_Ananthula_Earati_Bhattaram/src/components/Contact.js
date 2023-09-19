/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMobileAlt, faEnvelopeOpen, faMapMarkedAlt, faClock} from "@fortawesome/free-solid-svg-icons";
import ContactImage from "../Images/contact.png"
import {Component} from "react";
import axios from "axios";

class Contact  extends Component {
  
 constructor(props)
 {
   super(props);
   this.state = {
     fname:'',
     lname:'',
     cmobile:'',
     cmessage:'',
     cemail:''
   }
 }
  render(){
    var fname,lname,cmobile,cmessage,cemail;
    const handleSubmit = (event) =>
    {
      const api_path='https://sxb4167.uta.cloud/Contact.php';
      axios({
        method: 'post',
        url: api_path,
        headers: {
            'content-type': 'application/json'
        },
        data: this.state
    })
    .then(result => {
  
        console.log(result.data)
        this.setState({
            dataSent: result.data.sent,
        })
        console.log(this.state)
    })
    .catch(error => this.setState({
        error: error.message
    }));
    event.preventDefault();
    }
  return (
    <>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text">
            Your laundry service provider is just a phone call away.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <a href="#0">
                <FontAwesomeIcon icon={faMobileAlt} />
                </a>
              </span>
              <span>Phone No.</span>
              <span className="text">1-2392-23928-2</span>
            </div>
            <div>
              <span>
                <a href="#0">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </a>
              </span>
              <span>E-mail</span>
              <span className="text">service@laundry.com</span>
            </div>
            <div>
              <span>
                <a href="#0">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </a>
              </span>
              <span>Address</span>
              <span className="text">
                1008 greek row Dr, Arlington TX, United States
              </span>
            </div>
            <div>
              <span>
                <a href="#0">
                  <FontAwesomeIcon icon={faClock} />
                </a>
              </span>
              <span>Opening Hours</span>
              <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} id="Contact-form-form"> 
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={fname} onChange={(e)=>this.setState({ fname: e.target.value })}                 
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lname} onChange={(e)=>this.setState({ lname: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  value={cemail} onChange={(e)=>this.setState({ cemail: e.target.value })}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  value={cmobile} onChange={(e)=>this.setState({ cmobile: e.target.value })}
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="form-control"
                value={cmessage} onChange={(e)=>this.setState({ cmessage: e.target.value })}
              ></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>

            <div>
              <img src={ContactImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
}

export default Contact;
