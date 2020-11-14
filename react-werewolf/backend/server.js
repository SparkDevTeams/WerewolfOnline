const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const { worker } = require('cluster');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/' });
});
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 5000;
let users = [];

//Rounds activities variables
let round1Map = {};
let round2Map = {};
let round3Map = {};
let round4Map = {};
let round5Map = {};
let round6Map = {};
let round7Map = {};

//Random role assignment
let rolesmap = {};
let roles = ["Villager", "Doctor", "Alpha Werewolf", "Werewolf", "Wolf Seer", "Detective", "Fool", "Seer", "BodyGuard", "Gunner", "Detective"]

const random = (min, max) => {
  return Math.floor((Math.random() * max) + min);
}

const assignRole = () => {
  //get the random selection from role array 
  let index = random(0, roles.length - 1)
  const role = roles[index]
  roles.splice(index, 1);
  return role;
}

//Will not be needing this logic since there is one type of each role
//remove the role unless its villager(there could be multiple villagers )
// if(role !== "Villager" ){
//     roles=roles.filter( (item) =>item!==role )

//     console.log(roles)
// }
//if it is an array such as with the werewolf where there a re multiple types then assign a random type
// else if (typeof role === "object"){
//get random role within array
// const index=random(0,randomSelection.length-1)
// role=randomSelection[index]
// //remove specific role
// randomSelection.splice(index,1);

//rounds countdown
var countdown = 250;
setInterval(function () {
  countdown--;
  io.sockets.emit('timer', { countdown: countdown });
}, 250);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

io.on('connection', (socket) => {

  socket.on('waiting', ({ username, room }) => {

    const { error, user } = addUser({ id: socket.id, username, room });

    //in case we need to get a single user at a specific time
    // if(getUser(socket.id)!=undefined){
    //   console.log(getUser(socket.id).username);
    //   io.emit('getuser', getUser(socket.id).username);
    // }

    if (getUser(socket.id) != undefined) {
      let length = getUsersInRoom(1).length;
      for (let i = 0; i < length; i++) {
        let current = getUsersInRoom(1)[i].username;
        if (rolesmap[current] == undefined) {
          users.push(current);
          rolesmap[current] = assignRole();
        }
      }

      console.log(rolesmap.size)
      console.log(rolesmap)

     

      io.emit('getusers', JSON.stringify(Object.keys(rolesmap)));

      
        
      
      

      

      //   socket.on('reset', function (data) {
      //     countdown = 250;
      //     io.sockets.emit('timer', { countdown: countdown });
      // });

    };
  });

  socket.on('gameRoom_loaded', () => {
    io.emit('getusersandroles', JSON.stringify(Object.entries(rolesmap)));
  });
});
