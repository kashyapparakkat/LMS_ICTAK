const mongoose = require("mongoose");

var studentDetails = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: Number,
    },
/*    username: {
        type: String,
    },*/
    password: {
        type: String,
    },
/*    dob: {
        type: String,
    },*/
/*    subject: {
        type: String,
    },*/
    qualification: {
        type: String,
    },
    specialisation: {
        type: String,
    }
});

module.exports = mongoose.model("student", studentDetails);
