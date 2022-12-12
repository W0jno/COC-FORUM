const post = require("../../models/post")

const showUserPosts = async (currentUser, res) => {
  const posts = await post.find({ createdBy: currentUser.username })

  res.json({ status: "ok", posts })
}

module.exports = showUserPosts
