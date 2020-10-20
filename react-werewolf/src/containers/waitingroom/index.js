import React, { useState, useEffect } from "react";
import queryString from 'query-string';

const WaitingRoom = ({ location }) => {
  useEffect(() => {
    const data = queryString.parse(location.search);

    console.log(data)
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

