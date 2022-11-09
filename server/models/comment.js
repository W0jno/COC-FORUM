const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = User;
