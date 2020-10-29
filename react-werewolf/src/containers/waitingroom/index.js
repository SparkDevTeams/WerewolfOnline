import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
let users = [];

const WaitingRoom = ({ location }) => {

  const [username, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const {username,room} = queryString.parse(location.search);

    socket = io(ENDPOINT)
    setName(username);
    setRoom(1);
    
    socket.emit('waiting', {username, room});

    
    socket.on('getuser', function(data){
      users.push(data);
    });
    
  
     
  }, [ENDPOINT, location.search])

    return (
      <div className="WaitingRoom">
       <div className="main-container">
        <div className="background-container">
            
        </div>
        <div className="header">
         
        </div>
        <div className="title-container">
          <h1 className="title">
             {users[0]}  
          </h1>
           
        </div>
       </div>
      </div>
    );
  }
export default WaitingRoom;

