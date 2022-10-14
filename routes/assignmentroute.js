const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");
const assignment=require('../models/assignment');
const cors=require('cors');


   router.post('/addassign',async function(req,res){

    try{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
   
    var assigncreate ={ 
    title:req.body.assignment.title,
    date:req.body.assignment.date,
    description:req.body.assignment.description
   
 }

 var addassign = new assignment(assigncreate);
 addassign.save();
}
catch(error){
    console.log(error)
}

})

router.get('/getassign', function(req,res){
    try{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    assignment.find()
    .then(function(assignments){
        res.send(assignments);
        console.log(assignments)
    });
}
catch(er){
    console.log("error"+er)
}
})
router.get('/:id',(req, res) => {

    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    const id = req.params.id;
      assignment.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })

router.put('/update',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    console.log(req.body)
    id=req.body._id,
    title= req.body.title,
    date = req.body.date,
    description = req.body.description,
   
   
   assignment.findByIdAndUpdate({"_id":id},
                                {$set:{"title":title,
                                "date":date,
                                "description":description,
                               
                                }})
   .then(function(){
       res.send();
   })
 })
 
    router.delete('/remove/:id',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    id = req.params.id;
   assignment.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })
   







 module.exports = router;
