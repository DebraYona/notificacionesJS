var mongoose = require('mongoose');

const url = 'mongodb://localhost/viajes'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology :true
}). catch(err => console.log(err));


mongoose.connection.on('open', _ =>{

    console.log('database connected to', url);
    
})

module.exports = mongoose;
