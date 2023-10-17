require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlmenu = require('../controller/menu');
var ctrlcontact = require('../controller/contact');
const testrese = require('../model/reservation');

/* GET menu page. */
router.get('/',ctrlmenu.home);
router.get('/menu',ctrlmenu.menu);
router.get('/nonveg',ctrlmenu.nonveg);
router.get('/veg',ctrlmenu.veg);
router.get('//Users/rajeshpalanthod/Downloads/flavorscape-main/app_server/views',ctrlmenu.desert);
/* get contact page */
router.get('/aboutus',ctrlcontact.aboutus);
router.get('/contact', ctrlcontact.contact);
router.post('/rese',testrese.rese);  
router.get('/reserve', ctrlcontact.reservation);
module.exports= router;