/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";

function Chat(){
 // window.localStorage.clear(); 
    const  closeForm = (event) => 
    {
      const modal = document.querySelector(".chat-popup");
      modal.style.display = "none";
      event.preventDefault();
    }
  const  openForm = (event) => 
  {
    const modal = document.querySelector(".chat-popup");
    modal.style.display = "block";
    event.preventDefault();
  }
  
    return(
        <>
              <form onSubmit={openForm}>
      <button type="submit"  className="open-button">Chat with us</button>
    </form>
       <div className="chat-popup" id="myForm">
        <div className="form-container">
          <h1>Chat</h1>
          
          <label htmlFor="msg">
            <b>Message</b>
          </label>
          <textarea placeholder="Type message.." name="msg" required></textarea>
          <form>
          <button type="submit"  className="btn">Send</button>
          </form>
          <form onSubmit={closeForm}>
          <button type="submit" className="btn cancel">Close</button>
          </form>
        </div>
      </div>
        </>
    );
}
export default Chat;