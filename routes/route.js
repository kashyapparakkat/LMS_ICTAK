const express = require("express");

const router = express.Router();

const studentData = require("./Student");
const assignmentRoute=require('./assignmentroute');

router.use(studentData);
router.use(assignmentRoute);

module.exports = router;