/*Learnt it from Youtube : https://www.youtube.com/watch?v=NU-HfZY3ATQ&t=1893s */
/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */
import './App.css';
import io from 'socket.io-client';
import { useState } from "react";
import Chat from './Chat';
/* Conncet to socket 3000 as the react app is running on prt 3000*/
const socket=io.connect("http://localhost:3000");
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div className="App">
        {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room Id."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
          </div>
          ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
    );
}

export default App;
