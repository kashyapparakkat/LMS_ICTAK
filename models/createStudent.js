const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/lms_ictak");

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
    },
    isEnrolled: {
        type: String,
    },
    batch:{
        type:String,
    }
});

module.exports = mongoose.model('students', studentDetails);
