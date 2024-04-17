const Booking = require("../../models/Booking");

module.exports = {
    create
};


async function create(req, res) {
  console.log('create booking kene');
    try {
        const booking = await Booking.create(req.body);
        
        res.json(booking);
        //console.log('response sent', booking);
      
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      //res.status(400).json(err);
      console.log(err);
    }
  }
