const { Schema, model} = require ('mongoose');

const pointSchema = new Schema({
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
    idDriver: Number,
    idCompany: Number,
    idCar: Number,
    created: Date,
    updated: Date,
    location: {
        type: pointSchema,
        required: true
      }
    

});

/* const schemas = [];
mongoose.modelNames().forEach(function(modelName){
    schemas.push(model(modelName).schema.obj);
})

console.log(schemas); */

 let Location = model('location', locationShema);

/*  const collection = db.collection('location');
 const changeStream = collection.watch();
 changeStream.on('change', next => {
  console.log("debra ");
  
 }); */
 //Location.watch()
 //.on('change', data =>console.log(new Date(), data))

// console.log(  )
 

module.exports = Location;