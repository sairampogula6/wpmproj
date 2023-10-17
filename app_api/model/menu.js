var mongoose = require('mongoose');

var menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: String,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    image: String,
    
});
var reservationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
  });
mongoose.model('MenuItem', menuItemSchema);
mongoose.model('Reservation', reservationSchema);