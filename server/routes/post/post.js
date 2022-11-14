const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const path = require("path");
const postFunc = require("../post/postFunc");
const post = require("../../models/post.js");

router.post("/api/post", (req, res) => {
	console.log(req.body);
	postFunc(
		req.body.title,
		req.body.content,
		req.body.category,
		req.body.tags,
		res
	);
});

module.exports = router;
