const express = require('express');
const bodyParser= require('body-parser');

const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(bodyParser.urlencoded({extended: true}))

//app.use(cors());

http.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
  })
  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

  app.post('/quotes', (req, res) => {
    console.log(req.body)
})