const express = require("express");

const router = express.Router();

const studentData = require("./Student");
const assignmentRoute=require('./assignmentroute');

const tutorData=require("./Tutor");
const adminData=require("./Admin");


router.use(studentData);
router.use(assignmentRoute);

router.use(tutorData);
router.use(adminData);

module.exports = router;