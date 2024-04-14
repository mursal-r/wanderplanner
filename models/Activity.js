const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: {type: String, required: true},
    description: String,
    imageURL: String,
    price: Number,
    destination: String
}, {timestamps: true});

module.exports = mongoose.model('Activity', activitySchema);
