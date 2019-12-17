// importing mongoose module
const mongoose = require('mongoose');
// import schema
const Schema = mongoose.Schema;

let blogSchema = new Schema({
	blogId: {
		type: String,
		unique: true
	},
	title: {
		type: String,
		default: ''
	},
	description: {
		type: String,
		default: ''
	},
	bodyHtml: {
		type: String,
		default: ''
	},
	views: {
		type: Number,
		default: 0
	},
	isPublished: {
		type: Boolean,
		default: false
	},
	category: {
		type: String,
		default: ''
	},
	author: {
		type: String,
		default: ''
	},
	tags: [],

	created: {
		type: String
	},

	lastModified: {
		type: String
	}
});

//whenever i call Blog mongoose will follow above schema
mongoose.model('Blog', blogSchema);
