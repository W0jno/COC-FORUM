const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const auth = require("../login/loginFunc");
const jwt_decode = require("jwt-decode");
const user = require("../../models/user.js");
const showUserPostsFunc = require("./showUserPostsFunc")

router.get("/api/showUserPosts",auth.authenticate, async (req, res) => {
    const token = req.cookies.JWT;
    const decoded = jwt_decode(token);
    const currentUser = await user.findById(decoded.id);
    showUserPostsFunc(currentUser, res);

    
});

module.exports = router;
