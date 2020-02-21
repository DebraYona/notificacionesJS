const express = require('express');
const bodyParser= require('body-parser');
require('./config/mongoose/connetion')
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.use(bodyParser.urlencoded({extended: true}))

//app.use(cors());

http.listen(5000, function() {
    console.log('listening on 5000')
  })

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
  })
  io.on('connection', (socket) =>{
    console.log('a user connected', socket.id);
    socket.on('disconnect', ()=>{
      console.log('user disconnected');
    });
  });

  app.post('/quotes', (req, res) => {
    console.log(req.body)
})