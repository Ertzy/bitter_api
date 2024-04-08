const mongoose = require('mongoose');


const visualSchema = new mongoose.Schema({
    value: {type: String},
    createdAt: { type: Date},
})

const visualScreen = mongoose.model('Post', visualSchema);

module.exports = visualScreen;