const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const user = require("../../models/user");



const register = async (username, email, password, res) => {
	user.init();
	
	const hashedPasswd = await bcrypt.hash(password, 10)
	//console.log(hashedPasswd)
	new user({
		name: username,
		email: email,
		password: hashedPasswd,
	}).save((err) => {
		return res.send('zarejestrowano')
		return err;
	});
	
};


const showUser = async () => {
	let res = await user.find();
	return res;
};

module.exports = { register, showUser };
