const Booking = require("../../models/Booking");

module.exports = {
    create,
    getAll
};

// Function to create a new booking
async function create(req, res) {
    try {
        console.log(req.body);
        const booking = await Booking.create(req.body);
        res.json(booking);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
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