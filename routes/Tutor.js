const student = require("../models/createTutor");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");

/*router.get("/get-tutor-details", async function (req, res) {
    try {
        const contract = student
=======
/*
const tutor = require("../models/createTutor");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");
const bcrypt=require("bcrypt")


router.get("/get-tutor-details", async function (req, res) {
    try {
        const contract = tutor
>>>>>>> 0b0e55312ece14c9cf405a1926555867558e1bc5
            .findOne({email: req.email})
            .then((data) => {
                if (data) {
                    res.status(200);
                    res.json(data);
                } else {
                    res.status(404);
                    res.json({
<<<<<<< HEAD
                        message: ["student not found"],
=======
                        message: ["tutor not found"],
>>>>>>> 0b0e55312ece14c9cf405a1926555867558e1bc5
                    });
                }
            })
            .catch((err) => {
                console.log("Error:", err);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
<<<<<<< HEAD
}


);*/




/*router.put('/editstudent',function(req,res){
    
    
});*/
// create Scenario api
router.post("/add-tutor", async (req, res) => {
    try {
        console.log("User email -- " + req.body.email);

        let uID = uniqueID();

        const apicontract = new student({
            id: uID,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            number: req.body.number,
            dob: req.body.dob,
            subject:req.body.subject,
            isEnrolled: req.body.isEnrolled

        });
        apicontract
            .save()
            .then((data) => {
                res.status(200);
                res.json({
                    id: data.id,
                    name: data.name
                });
            })
            .catch((err) => {
                console.log("Error:", err);
                res.status(500);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});

router.get('/tutorDetails',function(req,res){
    
    student.find()
                .then(function(student){
                    res.send(student);
                });
});


router.get('/studentDetails',function(req,res){
    
    student.find()
                .then(function(student){
                    res.send(student);
                });
});


// create Scenario api
router.post("/add-student", async (req, res) => {
    try {
        console.log("User email -- " + req.body.email);

        let uID = uniqueID();

        const apicontract = new student({
            id: uID,
            name: req.body.name,
            email: req.body.email,
            /*username: req.body.username,*/
            password: req.body.password,
            number: req.body.number,
            //dob: req.body.dob,
            qualification: req.body.qualification,
            specialisation: req.body.specialisation,
            isEnrolled: req.body.isEnrolled

        });
        apicontract
            .save()
            .then((data) => {
                res.status(200);
                res.json({
                    id: data.id,
                    name: data.name
                });
            })
            .catch((err) => {
                console.log("Error:", err);
                res.status(500);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});


/*router.get("/validate-student-details", async function (req, res) {
    try {
        const contract = student
            .findOne({email: req.email})
            .then((data) => {
                if (data) {
                    res.status(200);
                    res.json(data);
                } else {
                    res.status(404);
                    res.json({
                        message: ["user not found"],
                    });
                }
            })
            .catch((err) => {
                console.log("Error:", err);
                res.json(err);
            });
    }
    catch (err)
    {

    }
});*/

router.post('/add-tutor',async (req,res)=>{

    try{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    let uID = uniqueID();

      //encryption password using bcrypt
       bcrypt.hash(req.body.user.password,10,(err,hash)=>{
        if(err){
            return res.json({success:false,message:'Give password'})
        }

        else
        {
            var user={

                id: uID,
            name: req.body.user.name,
            email: req.body.user.email,
           
            password:hash,
            number: req.body.user.number,
          
            qualification: req.body.user.qualification,
            specialisation: req.body.user.specialisation,
            isEnrolled: req.body.user.isEnrolled,
            gender:req.body.user.gender,
            user:req.body.user.user
               
            }
          
        
           
            const usersign = new tutor(user);
            usersign.save((err,d)=>{
                if(err){
                    res.status(401).json({
                        message: 'Failed to create new user'
                    })
                } else{
                    res.status(200).json({
                        message: 'User created'
                    })
                }
            })
          
 
 
        } })

    }
    catch(err){
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});

router.put('/approvetutor',async function(req,res){
 id=req.body.id,
 isEnrolled="True"   
 console.log(id);

 student.findByIdAndUpdate({
     "id":id },
     {$set:{"isEnrolled":isEnrolled}}
)
    
});

 router.delete('/deletetutor/:id', async function(req,res){
    // router.delete(id,async function(req,res)){
        id = req.params.id;
    console.log(id);
    student.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
});     

/*router.get("/validate-student-details", async function (req, res) {
    try {
        const contract = student
=======

})


router.post('/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    tutor.find({email:req.body.email})
    console.log(req.body.email)
    .exec()
    .then((result)=>{
        if(result.length<1){
            return res.status(404).res.json({success:false,message:"user not found"})
        }
        const user1=result[0];

        //password comparison
        bcrypt.compare(req.body.user.password,user1.password,(err,ret)=>{
            if(ret){
                return res.status(200).json({success:true,message:"Sucessful login approval by admin"})
            }
            else{
                return res.status(404).json({success:false,message:"incorrect password"})
            }
            //if(isEnrolled==true){
               // res.status(200).json({success:true,message:"Approved by admin"})
            //}
            //else{
               // res.status(404).json({success:true,message:"Not approved by admin"})
           // }
        })
    })
    .catch((err)=>{
        res.json({success:false,message:"ERROR"})
    })

    
})



router.get("/validate-tutor-details", async function (req, res) {
    try {
        const contract = tutor
>>>>>>> 0b0e55312ece14c9cf405a1926555867558e1bc5
            .findOne({email: req.email})
            .then((data) => {
                if (data) {
                    res.status(200);
                    res.json(data);
                } else {
                    res.status(404);
                    res.json({
                        message: ["user not found"],
                    });
                }
            })
            .catch((err) => {
                console.log("Error:", err);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});
<<<<<<< HEAD
*/
module.exports = router;
