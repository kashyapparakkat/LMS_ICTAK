const addcourse = require("../models/addcourse");
const addbatch = require("../models/addbatch");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");

router.post("/add-course", async (req, res) => {
    try {
        let uID = uniqueID();
//console.log("qwe",req.body.item.coursename);
        const apicontract = new addcourse({
            id: uID,
            coursename: req.body.item.coursename,
            description: req.body.item.description,
            status: req.body.item.status
        });
        apicontract
            .save()
            .then((data) => {
                res.status(200);
                res.json({
                    coursename: data.coursename,
                    description :data.description,
                    status :data.status
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

router.post("/add-batch", async (req, res) => {
    try {
        console.log("error",req.body.item.coursename);
        let uID = uniqueID();        
        const apicontract = new addbatch({
            id: uID,
            batchname: req.body.item.batchname,
            coursename:req.body.item.coursename,
            description: req.body.item.description,
            status: req.body.item.status
        });
        apicontract
            .save()
            .then((data) => {
                res.status(200);
                res.json({
                    id: data.id,
                    batchname: data.batchname,
                    coursename: data.coursename
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

router.get('/courseDetails',function(req,res){
    
    addcourse.find()
                .then(function(addcourse){
                    res.send(addcourse);
                });
});

router.get('/batchDetails',function(req,res){
    
    addbatch.find()
                .then(function(addbatch){
                    res.send(addbatch);
                });
});

module.exports = router;