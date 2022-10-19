const express = require("express");

const router = express.Router();

const studentData = require("./Student");
const tutorData = require("./Tutor");
const coursedata=require("./courseandbatch");

router.use(studentData);
router.use(tutorData);
router.use(coursedata);


module.exports = router;