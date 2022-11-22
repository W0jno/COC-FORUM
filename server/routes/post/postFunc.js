const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const post = require("../../models/post");

const createPost = async (title, content, category, currentUser, res) => {
	post.init();
	new post({
		title: title,
		content: content,
		category: category,
		createdBy: currentUser,
	}).save((err) => {
		res.json({ status: "ok", msg: "post dodany" });

		return err;
	});
	//res.json();
};

module.exports = createPost;
