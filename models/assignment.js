const mongoose = require("mongoose");

var assigntMent = new mongoose.Schema({
    studentname:{
        type:String
    },
    title: {
        type: String,
    },
    date: {
        type: String,
    },
    description: {
        type: String
    },
    submissionText: {
        type: String
    },
    mark: {
        type: String
    }
})

    const assignment = mongoose.model('assignment',assigntMent);

     module.exports = assignment;
