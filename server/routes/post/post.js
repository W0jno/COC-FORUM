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
		req.body.category,
		currentUser.username,
		res
	);
});
/* const getCurrentUsername = async (token) => {
	const decoded = jwt_decode(token);
	if (token) {
		const currentUser = await user.findById(decoded.id);
		return currentUser;
		//console.log(currentUser.username);
	} else {
		console.log("nie dziala ");
	}
}; */

module.exports = router;
