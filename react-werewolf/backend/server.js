const express = require('express');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const app = express();
const http = require('http').createServer(app);
const  io = require('socket.io')(http);

io.on('connection',(socket)=>{
  
socket.on("join",(username)=>{
  //Just print it for now 
  console.log(username)
  const { error, user } = addUser({ id: socket.id, username , room });

  //add user to room
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


