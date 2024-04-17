const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    activity: {type: Schema.Types.ObjectId, ref: 'Activity', required: true},
    date: {type: Date, required: true},
    tickets: Number,
    price: Number
});

module.exports = mongoose.model('Booking', bookingSchema);