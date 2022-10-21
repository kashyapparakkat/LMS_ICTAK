const express = require("express");

const router = express.Router();

const studentData = require("./Student");
const tutorData = require("./Tutor");
const coursedata=require("./courseandbatch");
const assignmentRoute=require('./assignmentroute');


router.use(studentData);
router.use(tutorData);
router.use(coursedata);


/*const tutorData=require("./Tutor");
const adminData=require("./Admin");*/


router.use(studentData);
router.use(assignmentRoute);
/*
router.use(tutorData);
router.use(adminData);*/

module.exports = router;