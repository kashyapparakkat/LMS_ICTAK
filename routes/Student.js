const student = require("../models/createStudent");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");

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
router.post("/add-student", async (req, res) => {
    try {
        console.log("User email -- " + req.body.email);
         res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS')

        let uID = uniqueID();

        const apicontract = new student({
            id: uID,
            name: req.body.user.name,
            email: req.body.user.email,
            /*username: req.body.username,*/
            password: req.body.user.password,
            number: req.body.user.number,
            //dob: req.body.dob,
            qualification: req.body.user.qualification,
            specialisation: req.body.user.specialisation,
            isEnrolled: req.body.user.isEnrolled
            
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