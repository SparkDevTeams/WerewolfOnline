/*
There could be multiple Villagers
There  could only be one of the Special Roles

*/
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

let socket;

const Game = ({ location }) => {

    const [users, setUsers] = useState('');
    const ENDPOINT = 'localhost:5000'
    socket = io(ENDPOINT)
    
    useEffect(() => {

      socket.on('getusers', function(data){
       setUsers(data);  
       
      });
    
    }, [ENDPOINT, location.search])

    console.log(users)
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
return (
    <div className="WaitingRoom">
     <div className="main-container">
      <div className="background-container">
         
      </div>
      </div>
      </div>
    );

}

export default Game;