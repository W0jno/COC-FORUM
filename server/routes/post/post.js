const express = require("express");
const router = express.Router();
const postFunc = require("../post/postFunc");
const auth = require("../login/loginFunc");
const jwt_decode = require("jwt-decode");
const user = require("../../models/user.js");

router.post("/api/post", auth.authenticate, async (req, res) => {
	const token = req.cookies.JWT;
	const decoded = jwt_decode(token);
	const currentUser = await user.findById(decoded.id);
	postFunc(
		req.body.title,
		req.body.content,
		currentUser.username,
		res
	);
});

module.exports = router;
