import React, { useState, useEffect } from "react";
import queryString from 'query-string';

const WaitingRoom = ({ location }) => {

  const [username, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const data = queryString.parse(location.search);
    setName(data.username);
    setRoom(1);
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
             {username}  
          </h1>
           
        </div>
       </div>
      </div>
    );
  }
export default WaitingRoom;

