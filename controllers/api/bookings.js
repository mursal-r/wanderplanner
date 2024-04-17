const Booking = require("../../models/Booking");
const User = require("../../models/User");


module.exports = {
    create,
    getAll,
    remove
};

// Function to create a new booking
// async function create(req, res) {
//     try {
//         console.log(req.body);
//         const booking = await Booking.create(req.body);
//         res.json(booking);
//     } catch (err) {
//         console.error(err);
//         res.status(400).json(err);
//     }
// }

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



async function remove(req, res) {

    const {_id} = req.body;
    console.log('req.body: ', req.body);
    console.log('id: ', _id);
    try {
        const deletedBooking = await Booking.findByIdAndDelete(_id);
        if (!deletedBooking) {
          throw new Error('Activity not found'); // Handle case where activity with given ID doesn't exist
        }
        console.log('Deleted activity:', deletedBooking);
        return deletedBooking; // Return the deleted activity if needed
      } catch (error) {
        console.error('Error deleting activity:', error);
        throw error; // Propagate the error for handling in calling code
      }

}

// Function to fetch all bookings
async function getAll(req, res) {
    try {
        const data = req.body;
        console.log('asdasd: ', data);
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}


//CREATE NEW FUNCTION getAll TO HANDLE GET REQUESTS FOR FETCHIING ALL BOOKINGS FROM DB