const express = require('express');

const router = express.Router();
const bookingCtrl = require('../../controllers/api/bookings');

router.post('/', bookingCtrl.create);

module.exports = router;