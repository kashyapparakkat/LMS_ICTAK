const mongoose = require('mongoose')
//mongoose.connect('mongodb+srv://ananthakrishnan1213:Asyoulikeit1234@cluster0.ud8dxog.mongodb.net/LMS');

const Schema = mongoose.Schema;

const materialschema = new Schema({
    ModuleName:String,
    ModuleDescription:String,
    Video:String,
    Resources:String
})

const coursematerial = mongoose.model('coursematerial',materialschema);
module.exports = coursematerial;