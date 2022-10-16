const express = require("express");

const router = express.Router();

const studentData = require("./Student");

const tutorData=require("./Tutor");
const adminData=require("./Admin");


router.use(studentData);

router.use(tutorData);
router.use(adminData);

module.exports = router;