const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const user = require("../../models/user");
const User = require("../../models/user");

const register = async (username, email, password, res) => {
  user.init();
  const hashedPasswd = await bcrypt.hash(password, 10);
  User.findOne(
    { $or: [{ email: email }, { username: username }] },
    (err, existingUser) => {
      if (existingUser == null) {
        new user({
          username: username,
          email: email,
          password: hashedPasswd,
        }).save((err) => {
          res.json({ status: "ok", msg: "zarejestrowano" });
          return err;
        });
      } else {
        res.json({
          status: "error",
          msg: "podany email lub nazwa uzytkownika jest zajente",
        });
      }
    }
  );
};

module.exports = register;
