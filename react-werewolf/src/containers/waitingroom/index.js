import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;


const WaitingRoom = ({ location }) => {

  const [username, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const ENDPOINT = 'localhost:5000'
  

  useEffect(() => {
    const {username,room} = queryString.parse(location.search);

    socket = io(ENDPOINT)
    setName(username);
    setRoom(1);
    
    socket.emit('waiting', {username, room});

    socket.on('getusers', function(data){
     setUsers(data);  
     
    });
     
  }, [ENDPOINT, location.search])

    return (
      <div className="WaitingRoom">
       <div className="main-container">
        <div className="background-container">
            <div>{users[0]}</div> 
            <div>{users[1]}</div> 
          
            
        </div>

        <Link  onClick={e => (users.length!=10) ? e.preventDefault() : null} to={`/game`}>
          <button type="submit"> Ready</button>
        </Link>
    
       </div>
      </div>
    );
  }
export default WaitingRoom;

