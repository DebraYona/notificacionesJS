const express = require('express');
const bodyParser= require('body-parser');
const connected= require('./config/mongoose/connetion')
location = require('./models/location')
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
  io.on('connection', function(socket){
    console.log('a user connected', socket.id);

    socket.on('notificacion:location', (data) =>{
      console.log(data);

       /*  let locationNow = new( data);
        locationNow.save();       */
    })
    
  });

  app.post('/quotes', (req, res) => {
    console.log(req.body)
    })