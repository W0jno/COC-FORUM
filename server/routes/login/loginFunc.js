const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const user = require("../../models/user");

const login = async (email, password, res) => {
	let User = await user.findOne({
		email: email,
	});

	if (User == null) return res.json("nie ma takiego uzytkownika typie");

	try {
		if (await bcrypt.compare(password, User.password)) {
			res.json({ status: "zalogowales sie" });
		} else {
			res.json({ status: "zle HASLO!!!!!!111!" });
		}
	} catch {
		res.status(500).send("cos sie popsulo");
	}
};

module.exports = { login };
