/*
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");
const bcrypt=require("bcrypt")

ademail='admin@gmail.com'
adpassword='admin123'


router.post('/login', (req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')


    let adminData=req.body
    if(!ademail){
        res.status(401).send('INVALID admin login')
    }else
    if(password!==adminData.password){
        res.status(401).send('INVALID admin password')
    }
    else{
        res.status(200).send("Successful admin login")
    }
    
})
















module.exports = router;*/
