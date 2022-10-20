const mongoose = require('mongoose')
const assert = require('assert')
const studentDetails = require('../models/createStudent');
const createStudent = require('../models/createStudent');
const AddBatch      = require('../models/addbatch');
//app.use(cors());

const connecttDB = async () => {
    try {
        //mongoose.connect("mongodb://localhost:27017/lms_ictak");
        //mongoose.connect("mongodb://localhost:27017/lms_ictak");
        mongoose.connect('mongodb+srv://user:User%40123456@cluster0.cm452yw.mongodb.net/lms_ictak?retryWrites=true&w=majority');
        console.log("Mongo DB connected ...")

    }catch(err) {
        console.log(err);
        process.exit(1);

    }
}
/*app.get('/studentDetails',function(req,res){
    
    
    createStudent.find()
                .then(function(studentDetails){
                    res.send(studentDetails);
                });
});
app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      createStudent.findOne({"_id":id})
      .then((student)=>{
          res.send(student);
      });

app.get('/addbatches',function(req,res){
console.log(req.body);
var addbatch={
BatchId   :req.body.addbatch.BatchId,
BatchName :req.body.addbatch.BatchName
}
        
var addbatch = new Batchata(addbatch);
addbatch.save();
    });      
  })*/
  

module.exports = connecttDB;