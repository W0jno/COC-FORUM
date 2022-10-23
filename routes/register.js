const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/register", (req, res) => {
	res.render("Register-page");
});

module.exports = router;
