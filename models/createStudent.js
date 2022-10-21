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
    },
    isEnrolled: {
        type: Boolean,
    },
    batch:{
        type:String,
    },
    gender: {
        type: String,
    },
    user: {
        type: String,
    },
    file:{
        type:String
    }

});

const student = mongoose.model('student',studentDetails);

module.exports = student;


/*//email validation
studentDetails.path('email').validate(async(email)=>{
    const emailcount=await mongoose.models.student.countDocuments({email})
    return !emailcount
},'Email already exists')*/

// //phone number validation
// studentDetails.path('number').validate(async(number)=>{
//     const numbercount=await mongoose.models.student.countDocuments({number})
//     return !numbercount
// },'Phone Number  already exists')

/*

const student = mongoose.model('student',studentDetails);

module.exports = student;
>>>>>>> 0b0e55312ece14c9cf405a1926555867558e1bc5*/
