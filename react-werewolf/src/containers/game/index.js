import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import { Link } from "react-router-dom";
import queryString from 'query-string';
import $ from 'jquery';
import RoundResults from "./../roundresults"
import './styles.css';
import sparkdevLogo from "./../images/SparkDev.png";
import homepagevillager from "./../images/Villager.png";
import alphawerewolf from "./../images/Alpha Werewolf White Icon.png";
import bodyguard from "./../images/Bodyguard White Icon.png";
import detective from "./../images/Detective White Icon.png";
import doctor from "./../images/Doctor White Icon.png";
import fool from "./../images/Fool White Icon.png";
import seer from "./../images/Seer White Icon.png";
import villager from "./../images/Villager White Icon.png";
import werewolf from "./../images/Werewolf White Icon.png";
import wolfseer from "./../images/Wolf Seer White Icon.png";
import gunner from "./../images/Gunner White Icon.png";

const Game = ({ location }) => {
    let image;
    let unknownToSeer;
    let action;
    let round = 1;
    const [rolesMap, setRolesMap] = useState({}) 
    const [username, setName] = useState(queryString.parse(location.search).username);
    const [room, setRoom] = useState('1');
    const ENDPOINT = 'localhost:5000'
    const socket = io(ENDPOINT);
  
    
    useEffect(() => {
      
    socket.emit('gameRoom_loaded');

    socket.on('getusersandroles', function(data){
      const roleData = JSON.parse(data);
      const newRoles = {}
      
      roleData.forEach(([key, value]) => {
        newRoles[key] = value
      })
      
      setRolesMap(newRoles);
    });
    
    socket.on('timer', function (data) {
      $('#counter').html(data.countdown);
    });

    // $('#reset').click(function() {
    // socket.emit('reset');
    // }
     
    }, [ENDPOINT, location.search])

    const alphaWerewolfVote = (username) => {

    }

    switch (rolesMap[username]) {
        case 'Alpha Werewolf':
            image = alphawerewolf;
            unknownToSeer = true;
            action = alphaWerewolfVote();
            break;
        case 'BodyGuard':
            image = bodyguard;
            break;
        case 'Detective':
            image = detective;
            break;
        case 'Doctor':
            image = doctor;
            break;
        case 'Fool':
            image = fool;
            break;
        case 'Seer':
            image = seer;
            break;
        case 'Villager':
            image = villager;
            break;
        case 'Wolf Seer':
            image = wolfseer;
            break;
        case 'Gunner':
            image = gunner;
            break;
    }
   
return (
    <div className="Game">
            <div className="main-container">
                <div className="header">
                    <img
                    src={sparkdevLogo}
                    alt="sparkdev-logo"
                    className="header-logo"
                    ></img>
                </div>
                <div className="grid-container">
                   
                    <div className="grid-item">
                        <p className="cell-number">1</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link> 
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">2</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]!=='Wolf Seer' && rolesMap[username]!=='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link> 
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">3</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Reveal </button>
                        </Link> 
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">4</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link> 
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">5</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link> 
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">6</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link> 
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">7</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link>  
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">8</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link> 
                    </div>
                    <div className="grid-item">
                        <p className="cell-number">9</p>
                        <img 
                        src={homepagevillager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                        <Link  onClick={e => (rolesMap[username]==='Wolf Seer' && rolesMap[username]==='Seer') ? e.preventDefault() : null} to={`/game?username=${username}&room=${room}`}>
                            <button className="cell-btn" type="submit"> Vote </button>
                        </Link> 
                    </div>
                </div>
                <div className="player-container">
                    <div className="current-player">
                        <img 
                            src={image}
                            alt="villager-img"
                            className="current-player-img"
                        ></img>
                    </div> 
                    <h3 className="player-name">Username: {username}</h3>  <br></br>
                    <h3 className="player-name"> Role:  {rolesMap[username]} </h3>
                    {/* <div id="counter"></div> */}
                    {/* <button id="reset">Reset!</button> */}
                    
                </div>
                <div className="chat-container">
                    <div className="chat-display">
                        
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            name="chat"
                            id="chat-field"
                            placeholder="Type..."
                        ></input>
                    </div>
                </div>
            </div>
        </div>
);
}
export default Game;