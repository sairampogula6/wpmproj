const mongoose = require('mongoose');

// Define the reservation schema
const reservationSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    required: true
  },
  Time: {
    type: String,
    required: true
  },
  Guests: {
    type: Number,
    required: true
  }
});

// Create a Reservation model from the schema
const Reservation = mongoose.model('reservations', reservationSchema);




const reservation = mongoose.model('reservations');
const rese = async (req, res) => {
  const { name, email, phone, date, time, guests }  = req.body; // Retrieve the "task" and "status" fields from the form data

  try {
      // Create a new task document in the database using promises
      const reservedt = await reservation.create({
        Name:name,
        Email:email,
        Phone:phone,
        Date:date,
        Time:time,
        Guests:guests,
      });

      // Task created successfully
      console.log('Task created:', reservedt);

      // Redirect or send a success response as needed
      res.redirect("/reserve");
  } catch (err) {
      console.error(err);
      // Handle the error, e.g., send an error response
      res.status(500).send('Error creating the task');
  }
};

module.exports = {
  rese
};