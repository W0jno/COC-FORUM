const express = require("express");
const router = express.Router();
const path = require("path");
const user = require("../../models/user");
const registerFunc = require("../register/registerFunc.js");

router.post("/api/register", (req, res) => {
	console.log(req.body);
	registerFunc(req.body.username, req.body.email, req.body.password, res);
});

module.exports = router;
