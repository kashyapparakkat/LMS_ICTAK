const mongoose = require("mongoose");

var assigntMent = new mongoose.Schema({
    title: {
        type: String,
    },
    date: {
        type: String,
    },
    description: {
        type: String
    }
})

    const assignment = mongoose.model('assignment',assigntMent);

     module.exports = assignment;
