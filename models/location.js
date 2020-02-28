const { Schema, model} = require ('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });
  //example
  //location: { type: "Point", coordinates: [ -73.97, 40.77 ] },

const locationShema = new Schema({
    idDriver: Integer,
    idCompany: Integer,
    idCar: Integer,
    created: Date,
    updated: Date,
    location: {
        type: pointSchema,
        required: true
      }
    

});

 let Location = model('location', locationShema);
 Location.watch()
 .on('change', data =>console.log(new Date(), data))

 console.log(  )
 

module.exports = Location;