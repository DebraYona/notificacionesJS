const { Schema, model} = require(mongoose)

const conductorSchema =new Schema({
    conductor:{
        nombre :String,
        apellido : String
    }
})

module.exports= model('Conductor', conductorSchema)