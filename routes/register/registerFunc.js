const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const user = require("../../models/user");
const { nextTick } = require("process");

const register = async (username, email, password, res) => {
	user.init();
	new user({
		name: username,
		email: email,
		password: await bcrypt.hash(password, 5),
	}).save((err) => {
		return err;
	});
};

const showUser = async () => {
	let res = await user.find();
	return res;
};

module.exports = { register, showUser };
