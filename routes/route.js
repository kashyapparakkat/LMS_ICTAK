const express = require("express");

const router = express.Router();

const studentData = require("./Student");

router.use(studentData);

module.exports = router;