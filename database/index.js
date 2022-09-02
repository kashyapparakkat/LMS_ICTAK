const mongoose = require('mongoose')
const assert = require('assert')


const connecttDB = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/lms_ictak");
        console.log("Mongo DB connected ...")

    }catch(err) {
        console.log(err);
        process.exit(1);

    }
}

module.exports = connecttDB;