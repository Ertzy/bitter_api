const mongoose = require('mongoose');


const visualSchema = new mongoose.Schema({
    title: {type: String},
    value: {type: String},
}, {timestamps: true})

const visualScreen = mongoose.model('Post', visualSchema);

module.exports = visualScreen;