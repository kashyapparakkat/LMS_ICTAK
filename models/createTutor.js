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
    //username: {
      //  type: String,
    //},
    number:{
        type:String,
    },
    password: {
        type: String,
    },
    //dob: {
        //type: String,
    //},
    //subject: {
       // type: String,
    //}
    qualification: {
        type: String,
    },
    specialisation: {
        type: String,
    },
    isEnrolled: {
        type: Boolean,
    },
    gender: {
        type: String,
    },
    user: {
        type: String,
    },

});
tutorDetails.path('email').validate(async(email)=>{
    const emailcount=await mongoose.models.tutor.countDocuments({email})
    return !emailcount
},'Email already exists')



module.exports = mongoose.model("tutor", tutorDetails);
