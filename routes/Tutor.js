const student = require("../models/createTutor");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");

/*router.get("/get-tutor-details", async function (req, res) {
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
*/
module.exports = router;