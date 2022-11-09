const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},

	category: {
		type: String,
		required: true,
	},
	tags: {
		type: String,
		required: false,
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
