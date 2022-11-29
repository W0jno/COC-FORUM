const express = require("express");
const router = express.Router();

const post = require("../../models/post");

const commentPost = async (currentUser, content, post_id, res) => {
  const postToComment = await post.findOne({ _id: post_id });

  await postToComment
    .updateOne({
      $push: {
        comments: {
          content: content,
          createdBy: currentUser.username,
        },
      },
    })
    .then(() => {
      res.json({ status: "ok", msg: "zrobioned" });
    });
};

module.exports = commentPost;
