const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const post = require("../../models/post");

const createPost = async (title, content, category, tags, res) => {
	post.init();
	new post({
		title: title,
		content: content,
		category: category,
		tags: tags,
	}).save((err) => {
		res.json({ status: "post dodany" });

		return err;
	});
	//res.json();
};

module.exports = createPost;
