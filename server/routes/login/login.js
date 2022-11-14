const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const path = require("path");
const loginFunc = require("../login/loginFunc");
const user = require("../../models/user.js");

router.post("/api/login", (req, res) => {
	loginFunc.login(req.body.email, req.body.password, res);
});

module.exports = router;
