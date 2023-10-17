const aboutus = function(req, res){
    res.render('aboutus', { title: 'aboutus' });
  };
  const mongoose = require('mongoose');
  /* GET menu page */
  const contact = function(req, res){
    res.render('contact', { title: 'contact' });
  };
  const reservation = function(req, res){
    const reservation = mongoose.model('reservations');
    reservation.create({
      Name:"fgvdf",
      Email:"fgvdf",
      Phone:"fgvdf",
      Date:"fgvdf",
      Time:"fgvdf",
      Guests:2,
    })
    res.render('reservation');
  };


module.exports={
  contact,
  reservation,
  aboutus
}