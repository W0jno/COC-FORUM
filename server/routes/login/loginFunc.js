//const express = require("express");
//const router = express.Router();
//const path = require("path");
const bcrypt = require("bcrypt");
const user = require("../../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const login = async (email, password, res) => {
	let User = await user.findOne({
		email: email,
	});

	if (User == null) return res.json("nie ma takiego uzytkownika typie");

	try {
		if (await bcrypt.compare(password, User.password)) {
			let accessToken = generateAccessToken(User._id, User.email);
			res.cookie("JWT", accessToken, {
				maxAge: 36000000000,
				httpOnly: false,
			});

			res.json({ status: "zalogowales sie" });
		} else {
			res.json({ status: "zle HASLO!!!!!!111!" });
		}
	} catch {
		res.status(500).send("cos sie popsulo");
	}
};

const generateAccessToken = (id, email) => {
	return jwt.sign(
		{
			id: id,
			email: email,
		},
		process.env.TOKEN_SECRET,
		{
			expiresIn: 360000000000,
		}
	);
};

const authenticate = (req, res, next) => {
	const token = req.cookies.JWT;

	if (token === null) return res.sendStatus(401);

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);

		req.user = user;
		next();
	});
};

module.exports = { login, authenticate };
