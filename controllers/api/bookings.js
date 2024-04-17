const Booking = require("../../models/Booking");
const User = require("../../models/User");

module.exports = {
  create
};

async function create(req, res) {
  try {
    const booking = await Booking.create(req.body);
    
    // Retrieve the user by ID
    const user = await User.findById(req.body.user);

    // Add the ID of the newly created booking to the user's bookings array
    user.bookings.push(booking._id);

    // Save the updated user object
    await user.save();

    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
}
