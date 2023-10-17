var express = require('express');
var router = express.Router();
var menuItemController = require('../controller/menu');
var reservationController = require('../controller/reservation'); 

//menuitems
router.post('/menuItems', menuItemController.menuItemsCreate);


router.get('/menuItems', menuItemController.menuItemsList);


router.get('/menuItems/:menuitemid', menuItemController.menuItemsReadOne);


router.put('/menuItems/:menuitemid', menuItemController.menuItemsUpdateOne);


router.delete('/menuItems/:menuitemid', menuItemController.menuItemsDeleteOne);

//reservations

router.post('/reservations', reservationController.reservationsCreate);


router.get('/reservations', reservationController.reservationsList);


router.get('/reservations/:reservationid', reservationController.reservationsReadOne);


router.put('/reservations/:reservationid', reservationController.reservationsUpdateOne);


router.delete('/reservations/:reservationid', reservationController.reservationsDeleteOne);

module.exports = router;


module.exports = router;
