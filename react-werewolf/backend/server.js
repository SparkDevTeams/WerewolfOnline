
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const { worker } = require('cluster');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function(req, res){
  res.sendFile('index.html', {root : __dirname + '/'});
});
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 5000;
let users = [];

server.listen(port,() => {
  console.log(`Server running on port: ${port}`);
});

io.on('connection',(socket)=>{
  
socket.on("waiting",({username , room}) => {
 
  const { error, user } = addUser({ id: socket.id, username , room });

  // if(getUser(socket.id)!=undefined){
  //   io.emit('getuser', getUser(socket.id).username);
  // }

  if(getUser(socket.id)!=undefined){
    let length = getUsersInRoom(1).length;
    for(let i=0; i< length; i++){
      if(!users.includes(getUsersInRoom(1)[i].username)){
        users.push(getUsersInRoom(1)[i].username)
      } 
    }

    console.log(users.length)


    io.emit('getusers',Object.values(users)); 
  }

});


  
    // let user = getUser(socket.id).username;
    // console.log(user)
    // return user;
  

  
});






