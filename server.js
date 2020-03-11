const express = require('express');
const bodyParser= require('body-parser');
const connected= require('./config/mongoose/connetion')
location = require('./models/location')
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
    console.log('a user connected', socket.id);

   

    socket.on('notificacion:location', (data) =>{
      console.log(data);

       /*  let locationNow = new( data);
        locationNow.save();       */
    })
/* 
    socket.on('updateLocalization', function(){
      location.watch().
      on('change', data => console.log(new Date(), data));


      console.log(new Date(), 'Inserting doc');
       Person.create({ name: 'Axl Rose' });
      console.log(new Date(), 'Inserted doc');

    })
    
  });
  async function setupReplicaSet() {
    const bind_ip = 'localhost';
    // Starts a 3-node replica set on ports 31000, 31001, 31002, replica set
    // name is "rs0".
    const replSet = new ReplSet('mongod', [
      { options: { port: 31000, dbpath: `${__dirname}/data/db/31000`, bind_ip } },
      { options: { port: 31001, dbpath: `${__dirname}/data/db/31001`, bind_ip } },
      { options: { port: 31002, dbpath: `${__dirname}/data/db/31002`, bind_ip } }
    ], { replSet: 'rs0' });
  
    // Initialize the replica set
    await replSet.purge();
    await replSet.start();
    console.log(new Date(), 'Replica set started...');
  } */

 /*  app.post('/quotes', (req, res) => {
    console.log(req.body)
    }) */
  })