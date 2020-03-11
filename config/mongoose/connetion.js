var mongoose = require('mongoose');
f = require('util').format,
assert = require('assert');

var user = encodeURIComponent('root');
var password = encodeURIComponent('example');
var authMechanism = 'DEFAULT';
const url = 'mongodb://jorge:samer123$@192.168.1.51:27017,192.168.1.51:27018,192.168.1.51:27019/myClusterwideAdmin?replicaSet=rs0'

//const url = f('mongodb://%s:%s@192.168.1.51:5000/userdata?authSource=admin', user , password)
//const url ='mongo --username root --password --authenticationDatabase admin --host 192.168.1.51 --port 5000'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology :true
}). catch(err => console.log(err));
//mongo --username root --password --authenticationDatabase admin --host 192.168.1.51 --port 5000

mongoose.connection.on('open', _ =>{

    console.log('database connected to', url);
    
})


//DriverLocation= 
//const changeStream = DriverLocation.watch().on('change', change => console.log(change));

module.exports = mongoose;
