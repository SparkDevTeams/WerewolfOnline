import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import sparkdevLogo from "./../images/SparkDev.png";
import villager from "./../images/Villager.png";

function Game() {
    return(
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
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                    <div className="grid-item">
                        <img 
                        src={villager}
                        alt="villager-img"
                        className="player-img"
                        ></img>
                    </div>
                </div>
                <div className="player-container">
                    <div className="current-player">
                        <img 
                            src={villager}
                            alt="villager-img"
                            className="current-player-img"
                        ></img>
                    </div> 
                    <h3 className="player-name">Username: ????</h3>  
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

/*
There could be multiple Villagers
There  could only be one of the Special Roles

*/



let  roles = ["Villager","Doctor","AlphaWerewolf","Werewolf","Junior Werewolf","Detective",]

const  random=(min,max)=>{
    return Math.floor((Math.random() * max) + min);

}


const  assignRole= ()=> {
//get the random selection from role array 
const role=roles[random(0,roles.length-1)]
//remove the role unless its villager(there could be multiple villagers )
if(role !== "Villager" ){
    roles=roles.filter( (item) =>item!==role )
    
    console.log(roles)
}/*
//if it is an array such as with the werewolf where there a re multiple types then assign a random type
else if (typeof role === "object"){
//get random role within array
const index=random(0,randomSelection.length-1)
role=randomSelection[index]
//remove specific role
randomSelection.splice(index,1);
}
*/
//return 
return role;
}