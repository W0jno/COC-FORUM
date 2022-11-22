const express = require("express");
const router = express.Router();
const post = require("../../models/post");

//show all posts
router.get("/api/showPost", async (req, res) => {
	const dupson = await post.find();

	res.send(dupson);
});

module.exports = router;
