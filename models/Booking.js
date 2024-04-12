const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    activity: {type: Schema.Types.ObjectId, ref: 'Activity', required: true},
    date: {type: Date, required: true}
});