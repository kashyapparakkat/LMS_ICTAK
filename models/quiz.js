const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const quizschema = new Schema({
    Question:String,
    Opt1:String,
    Opt2:String,
    Opt3:String,
    Opt4:String,
    Answer:String
})

const quiz = mongoose.model('quiz',quizschema);
module.exports = quiz;