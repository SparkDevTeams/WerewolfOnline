const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connection',(socket)=>{
  
socket.on("join",(username , room, callback) => {
  //Just print it for now 
  console.log(username)
  const { error, user } = addUser({ id: socket.id, username , room });
  if(error) return callback(error);

  socket.join(user.room);
 
})


})

const port = process.env.PORT || 5000;
testAPIRouter = require("./routes/testAPI") 


app.use(cors());
app.use(express.json());

app.use("/testAPI",testAPIRouter)



app.get('/', function(req, res){
    res.sendFile('index.html', {root : __dirname + '/'});
  });

app.listen(port,() => {
    console.log(`Server running on port: ${port}`);
});


