const express = require("express");
const router = express.Router();
const commentFunc = require("../post/commentFunc");
const auth = require("../login/loginFunc");
const jwt_decode = require("jwt-decode");
const user = require("../../models/user.js");

router.post("/api/post/comment", auth.authenticate, async (req, res) => {
	const token = req.cookies.JWT;
	const decoded = jwt_decode(token);
	const currentUser = await user.findById(decoded.id);
	commentFunc(currentUser, req.body.content, req.body.post_id, res);
});

module.exports = router;
