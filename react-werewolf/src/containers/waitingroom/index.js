import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import queryString from 'query-string';
import io from 'socket.io-client';
import sparkdevLogo from "./../images/SparkDev.png";
import werewolfBackground1 from "./../images/werewolf 1.png";
import './style.css';
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
        <div className="">
        <div className="werewolfbackground1">
                <img src={werewolfBackground1} className = "werewolfbackground1" alt="village-img"></img>
            </div>
        </div>
        <div className="header">
        <img
            src={sparkdevLogo}
            alt="sparkdev-logo"
            className="header-logo"
          ></img>
         
        </div>

  
       <div className="table-container">
          <h1 className="table-title">
          There are {users.length} out of 10 users online

    <table id="t01">
     <tr>
    <th>{users[0]}</th>
    <th>{users[1]}</th>
  </tr>
  <tr>
    <th>{users[2]}</th>
    <th>{users[3]}</th>
  </tr>
  <tr>
    <th>{users[4]}</th>
    <th>{users[5]}</th>
  </tr>
  <tr>
    <th>{users[6]}</th>
    <th>{users[7]}</th>
  </tr>  
  <tr>
    <th>{users[8]}</th>
    <th>{users[9]}</th>
  </tr>  
</table>

</h1>   
        <Link  onClick={e => (users.length!=10) ? e.preventDefault() : null} to={`/game`}>
          <button type="submit"> Ready</button>
        </Link> 
        </div>

       

       </div>
    );
  }
export default WaitingRoom;

