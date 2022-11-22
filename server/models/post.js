const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	createdBy: {
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
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	comments: [
		{
			content: {
				type: String,
				required: false,
			},

			createdBy: {
				type: String,
				required: false,
			},
		},
	],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
