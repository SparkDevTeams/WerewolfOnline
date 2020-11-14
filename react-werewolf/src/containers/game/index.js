/*
There could be multiple Villagers
There  could only be one of the Special Roles

*/
import queryString from 'query-string';
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import './styles.css';
import sparkdevLogo from "./../images/SparkDev.png";
import villager from "./../images/Villager.png";

let socket;

const Game = ({ location }) => {

    const [username, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000'
    socket = io(ENDPOINT)

    useEffect(() => {
        // const {username,room} = queryString.parse(location.search);
        
        setName(username);
        setRoom(1);

        socket.emit('join', { username, room }, () => {

        });

        socket.on('getusers', function (data) {
            setUsers(data);

        });

        // return () => {
        //     socket.emit('disconnect');
            
        //     socket.off();
        // }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(message, messages);

    console.log(users)
    let roles = ["Villager", "Doctor", "AlphaWerewolf", "Werewolf", "Junior Werewolf", "Detective",]

    const random = (min, max) => {
        return Math.floor((Math.random() * max) + min);

    }


    const assignRole = () => {
        //get the random selection from role array 
        const role = roles[random(0, roles.length - 1)]
        //remove the role unless its villager(there could be multiple villagers )
        if (role !== "Villager") {
            roles = roles.filter((item) => item !== role)

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
        // <div className="Game">
        //     <div className="main-container">
        //         <div className="header">
        //             <img
        //                 src={sparkdevLogo}
        //                 alt="sparkdev-logo"
        //                 className="header-logo"
        //             ></img>
        //         </div>
        //         <div className="grid-container">
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //             <div className="grid-item">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="player-img"
        //                 ></img>
        //             </div>
        //         </div>
        //         <div className="player-container">
        //             <div className="current-player">
        //                 <img
        //                     src={villager}
        //                     alt="villager-img"
        //                     className="current-player-img"
        //                 ></img>
        //             </div>
        //             <h3 className="player-name">Username: ????</h3>
        //         </div>
        //         <div className="chat-container">
        //             <div className="chat-display">

        //             </div>
        //             <div className="chat-input">
        //                 <input
        //                     type="text"
        //                     name="chat"
        //                     id="chat-field"
        //                     placeholder="Type..."
        //                 ></input>
        //             </div>
        //         </div>
        //     </div>
            <div className="outerContainer">
                <div className="container">
                    <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
                    />
                    </div>
            </div>
        // </div>

    );
}
export default Game;