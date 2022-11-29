const post = require("../../models/post");
const deletePostFunc = async (currentUser, post_id, res) => {
	const postsToDelete = await post.find({
		createdBy: currentUser.username,
	});

	for (let i = 0; i < postsToDelete.length; i++) {
		if (postsToDelete[i]._id.toString() == post_id) {
			postsToDelete[i].delete();
		} else {
			res.json({ status: "error", msg: "nie dziala cos" });
		}
	}
};

module.exports = deletePostFunc;
