const express = require('express');
const router = express.Router();
const bookingCtrl = require('../../controllers/api/bookings');

// POST route for creating a new booking
router.post('/', bookingCtrl.create);
router.post('/remove', bookingCtrl.remove);

router.post('/get', bookingCtrl.getAll);

module.exports = router;


//ADDED A NEW ROUTE TO HANDLE GET REQUESTS FOR FETCHING ALL BOOKINGS AND USE getBookings function from controller