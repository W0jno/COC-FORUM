const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/login", (req, res) => {
	res.render("Login-page");
});

module.exports = router;
