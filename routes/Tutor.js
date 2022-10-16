const tutor = require("../models/createTutor");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");
const bcrypt=require("bcrypt")


router.get("/get-tutor-details", async function (req, res) {
    try {
        const contract = tutor
            .findOne({email: req.email})
            .then((data) => {
                if (data) {
                    res.status(200);
                    res.json(data);
                } else {
                    res.status(404);
                    res.json({
                        message: ["tutor not found"],
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