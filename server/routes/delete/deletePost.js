const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const auth = require("../login/loginFunc");
const jwt_decode = require("jwt-decode");
const user = require("../../models/user.js");

const deletePostFunc = require("../delete/deletePostFunc");

router.delete("/api/delete", auth.authenticate, async (req, res) => {
	const token = req.cookies.JWT;
	const decoded = jwt_decode(token);
	const currentUser = await user.findById(decoded.id);
	deletePostFunc(currentUser, req.body.post_id, res);
});

module.exports = router;
