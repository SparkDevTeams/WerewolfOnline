import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import sparkdevLogo from "./../images/SparkDev.png";
import './style.css';

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
        <img
            src={sparkdevLogo}
            alt="sparkdev-logo"
            className="header-logo"
          ></img>
         
        </div>
      
        <div className="title-container">
          <h1 className="title">
             
 <table id="t01">
  <tr>
    <th>{username}</th>
    <th>{username}</th>
  </tr>
  <tr>
    <th>{username}</th>
    <th>{username}</th>
  </tr>
  <tr>
    <th>{username}</th>
    <th>{username}</th>
  </tr>
  <tr>
    <th>{username}</th>
    <th>{username}</th>
  </tr>  
</table>
          </h1>


        </div>
       </div>
      </div>
    );
  }
export default WaitingRoom;

