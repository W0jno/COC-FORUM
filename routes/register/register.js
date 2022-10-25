const express = require("express");
const router = express.Router();
const path = require("path");
const user = require("../../models/user");
const registerFunc = require("../register/registerFunc.js");

router.get("/register", (req, res) => {
	res.render("Register-page");
});

router.post("/api/register", (req, res) => {
	registerFunc.register(
		req.body.username,
		req.body.email,
		req.body.password,
		res
	);
});

router.get("/api/register/dupa", (req, res) => {
	registerFunc.showUser().then((users) => {
		res.json(users);
	});
});
module.exports = router;