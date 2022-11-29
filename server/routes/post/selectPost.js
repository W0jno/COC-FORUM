const express = require("express");
const router = express.Router();
const Post = require("../../models/post");

//show all posts
router.get("/api/post/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.json({ status: "ok", post });
  } else {
    res.json({ status: "error" });
  }
});

module.exports = router;
