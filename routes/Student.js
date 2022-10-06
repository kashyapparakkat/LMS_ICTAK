const student = require("../models/createStudent");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");
const bcrypt=require("bcrypt")

router.get("/get-student-details", async function (req, res) {
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
                        message: ["student not found"],
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

// create Scenario api
// router.post("/add-student", async (req, res) => {
//     try {
//          console.log("User email -- " + req.body.user.email);
//          res.header("Access-Control-Allow-Orgin","*");
//          res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS')
//          let uID = uniqueID();

//             //encryption password using bcrypt
        

//            const apicontract = new student({
//             id: uID,
//             name: req.body.user.name,
//             email: req.body.user.email,
//             /*username: req.body.username,*/
//             password:req.body.user.password,
//             number: req.body.user.number,
//             //dob: req.body.dob,
//             qualification: req.body.user.qualification,
//             specialisation: req.body.user.specialisation,
//             isEnrolled: req.body.user.isEnrolled
            
//         });
//         apicontract
//             .save()
//             .then((data) => {
//                 res.status(200);
//                 res.json({
//                     id: data.id,
//                     name: data.name
//                 });
//             })
//             .catch((err) => {
//                 console.log("Error:", err);
//                 res.status(500);
//                 res.json(err);
//             });
//     }
//     catch (err)
//     {
//         console.log("error", err)
//         res.status(500)
//         res.json(err);
//     }
// });

router.post('/add-student',async (req,res)=>{

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
          
        
           
            const usersign = new student(user);
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




})


router.get('/validate',async(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    console.log("email"+ req.body.email);
    student.find({email:req.body.email})
    .exec()
    .then((result)=>{
           if(result.length<1){
          //return  res.status(200).res.json({success:true,message:'Email  Successfully registered'})
           }
           else {
         //return  res.status(404).res.json({success:false,message:'Email  already exists'})
           }
        })
    })




router.get("/validate-student-details", async function (req, res) {
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
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});

module.exports = router;