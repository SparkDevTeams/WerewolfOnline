import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import { Socket } from "socket.io-client";
import io from 'socket.io-client';

let socket;

const WaitingRoom = ({ location }) => {
  const [username, setName] = useState('');
  const [room, setRoom] = useState('1');
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(socket);

  //  console.log(name, room);
  //  console.log(data);
  })

    return (
      <div className="WaitingRoom">
       <div className="main-container">
        <div className="background-container">
            
        </div>
        <div className="header">
         
        </div>
        <div className="title-container">
          <h1 className="title">
          WEREWOLF
          </h1>
           
        </div>
       </div>
      </div>
    );
  }
export default WaitingRoom;

