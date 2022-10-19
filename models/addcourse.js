const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/lms_ictak");

var addcourses = new mongoose.Schema({
    id: {
        type: String,
    },
    coursename: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
    }


})
module.exports = mongoose.model('addcourses', addcourses);
