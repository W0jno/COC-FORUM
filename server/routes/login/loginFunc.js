const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const user = require("../../models/user");

const login = async (email, password, res) => {
	let User = await user.findOne({
		email: email,
	});

	if (User == null) return res.send("nie ma takiego uzytkownika");

	try {
		if (await bcrypt.compare(password, User.password)) {
			res.json({dupa: "zalogowales sie"});
		} else {
			res.json({dupa: "zle haslo"});
		}
	} catch {
		res.status(500).send("cos sie popsulo");
	}
};

module.exports = { login };
