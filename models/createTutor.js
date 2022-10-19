const mongoose = require("mongoose");

var tutorDetails = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    dob: {
        type: String,
    },
    subject: {
        type: String,
    },
    isEnrolled: {
        type: String,
    },
    batch:{
        type:String,
    },
});

module.exports = mongoose.model("tutor", tutorDetails);
