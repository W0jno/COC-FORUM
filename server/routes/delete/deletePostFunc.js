const post = require("../../models/post");
const deletePostFunc = async (currentUser, post_id, res) => {
	const postToDelete = await post.findOneAndDelete({
		$and: [{ createdBy: currentUser.username }, { _id: post_id }],
	});
	if (postToDelete == "") {
		return res.send("nie twoj post");
	} else {
		return res.send("usunieto");
	}
};

module.exports = deletePostFunc;
