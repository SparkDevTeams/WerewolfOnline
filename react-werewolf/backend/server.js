const express = require('express');
const cors = require('cors');
 
const app = express();
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
