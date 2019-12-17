const mongoose = require('mongoose');
mongoose.Promise = Promise;
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib');
/* Models */
const BlogModel = mongoose.model('Blog');

/**
 * function to read all blogs.
 */
let getAllBlog = (req, res) => {
	BlogModel.find()
		.select('-__v -_id')
		.lean()
		.exec((err, result) => {
			if (err) {
				logger.error(err.message, 'Blog Controller: getAllBlog');
				let apiResponse = response.generate(
					true,
					'Failed To Find Blog Details',
					500,
					null
				);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.info('No Blog Found', 'Blog Controller: getAllBlog');
				let apiResponse = response.generate(true, 'No Blog Found', 404, null);
				res.send(apiResponse);
			} else {
				let apiResponse = response.generate(
					false,
					'All Blog Details Found',
					200,
					result
				);
				res.send(apiResponse);
			}
		});
}; // end get all blogs

/**
 * function to read single blog.
 */
let viewByBlogId = (req, res) => {
	if (check.isEmpty(req.params.blogId)) {
		logger.error('BlogId should be passed', 'blogController: viewByBlogId');
		let apiResponse = response.generate(true, 'blogId is missing', 403, null);
		res.send(apiResponse);
	} else {
		BlogModel.findOne({ blogId: req.params.blogId })
			.select('-__v -_id')
			.exec((err, result) => {
				if (err) {
					logger.error(
						`Error Occured : ${err}`,
						'blogController: viewByBlogId-->findone{if(err)}'
					);
					let apiResponse = response.generate(
						true,
						'Error Occured.',
						500,
						null
					);
					res.send(apiResponse);
				} else if (check.isEmpty(result)) {
					logger.error(
						'Blog Not Found',
						'blogController: viewByBlogId-->findone{else if(isEmpty)}'
					);
					let apiResponse = response.generate(
						true,
						'Blog Not Found',
						404,
						null
					);
					res.send(apiResponse);
				} else {
					logger.info('Blog found successfully', 'BlogController:ViewBlogById');
					let apiResponse = response.generate(
						false,
						'Blog Found Successfully.',
						200,
						result
					);
					res.send(apiResponse);
				}
			});
	}
}; //end of viewByBlogId

/**
 * function to read blogs by category.
 */
let viewByCategory = (req, res) => {
	if (check.isEmpty(req.params.categoryId)) {
		logger.error(
			'categoryId should be passed',
			'blogController:viewByCategory'
		);
		let apiResponse = response.generate(
			true,
			'CategoryId is missing',
			403,
			null
		);
		res.send(apiResponse);
	} else {
		BlogModel.find({ category: req.params.categoryId })
			.select('-__v -_id')
			.exec((err, result) => {
				if (err) {
					logger.error(
						`Error Occured : ${err}`,
						'blogController: viewByCategory'
					);
					let apiResponse = response.generate(
						true,
						'Error Occured.',
						500,
						null
					);
					res.send(apiResponse);
				} else if (check.isEmpty(result)) {
					logger.error(`Result is empty`, 'blogController: viewByCategory');
					let apiResponse = response.generate(
						true,
						'Blogs Not Found',
						404,
						null
					);
					res.send(apiResponse);
				} else {
					logger.info(
						'Blogs Found Successfully',
						'blogController: viewByCategory'
					);
					let apiResponse = response.generate(
						false,
						'Blogs Found Successfully.',
						200,
						result
					);
					res.send(apiResponse);
				}
			});
	}
}; // end of viewByCategory

/**
 * function to read blogs by author.
 */
let viewByAuthor = (req, res) => {
	if (check.isEmpty(req.params.author)) {
		logger.error(
			'author name should be passed',
			'blogController: viewByAuthor'
		);
		let apiResponse = response.generate(true, 'author is missing', 403, null);
		res.send(apiResponse);
	} else {
		BlogModel.find({ author: req.params.author })
			.select('-__v -_id')
			.exec((err, result) => {
				if (err) {
					logger.error(
						`Error Occured : ${err}`,
						'blogController: viewByAuthor'
					);
					let apiResponse = response.generate(
						true,
						'Error Occured.',
						500,
						null
					);
					res.send(apiResponse);
				} else if (check.isEmpty(result)) {
					logger.error('Result is Empty', 'blogController: viewByAuthor');
					let apiResponse = response.generate(
						true,
						'Blogs Not Found',
						404,
						null
					);
					res.send(apiResponse);
				} else {
					logger.info(
						'Blogs Found Successfully',
						'blogController: viewByAuthor'
					);
					let apiResponse = response.generate(
						false,
						'Blogs Found Successfully.',
						200,
						result
					);
					res.send(apiResponse);
				}
			});
	}
}; //end of viewByAuthor

/**
 * function to edit blog by admin.
 */
let editBlog = (req, res) => {
	if (check.isEmpty(req.params.blogId)) {
		logger.error('blogId should be passed', 'blogController: editBlog');
		let apiResponse = response.generate(true, 'blogId is missing', 403, null);
		res.send(apiResponse);
	} else {
		let options = req.body;
		options.lastModified = time.getLocalTime();
		BlogModel.update({ blogId: req.params.blogId }, options, {
			multi: true
		}).exec((err, result) => {
			if (err) {
				logger.error(`Error Occured : ${err}`, 'blogController: editBlog');
				let apiResponse = response.generate(true, 'Error Occured.', 500, null);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.error('Blog Not Found', 'blogController: editBlog');
				let apiResponse = response.generate(true, 'Blog Not Found', 404, null);
				res.send(apiResponse);
			} else {
				logger.info('Blog Edited Successfully', 'blogController: editBlog');

				BlogModel.findOne({ blogId: req.params.blogId })
					.select('-__v -_id')
					.exec((err, result) => {
						if (err) {
							logger.error(
								`Error Occured : ${err}`,
								'blogController: editBlog'
							);
							let apiResponse = response.generate(
								true,
								'Error Occured.',
								500,
								null
							);
							res.send(apiResponse);
						} else if (check.isEmpty(result)) {
							logger.error('Blog Not Found', 'blogController: editBlog');
							let apiResponse = response.generate(
								true,
								'Blog Not Found',
								404,
								null
							);
							res.send(apiResponse);
						} else {
							logger.info('Blog found successfully', 'BlogController:editBlog');
							let apiResponse = response.generate(
								false,
								'Blog Edited Successfully.',
								200,
								result
							);
							res.send(apiResponse);
						}
					});
			}
		});
	}
}; //end of editBlog

/**
 * function to find the assignment.
 */
let findBlogToEdit = blogId => {
	if (check.isEmpty(req.params.blogId)) {
		logger.error('blogId should be passed', 'blogController: findBlogToEdit');
		let apiResponse = response.generate(true, 'blogId is missing', 403, null);
		reject(apiResponse);
	} else {
		return new Promise((resolve, reject) => {
			BlogModel.findOne({ blogId: req.params.blogId }, (err, blog) => {
				if (err) {
					logger.error(
						`Error Occured : ${err}`,
						'blogController: findBlogToEdit'
					);
					let apiResponse = response.generate(
						true,
						'Error Occured.',
						500,
						null
					);
					reject(apiResponse);
				} else if (check.isEmpty(blog)) {
					logger.error('Result not found', 'blogController: findBlogToEdit');
					let apiResponse = response.generate(
						true,
						'Blog Not Found',
						404,
						null
					);
					reject(apiResponse);
				} else {
					logger.info(
						'Blog Edited Successfully',
						'blogController: findBlogToEdit'
					);
					resolve(blog);
				}
			});
		});
	}
}; //end of findBlogToEdit

/**
 * function to delete the assignment collection.
 */
let deleteBlog = (req, res) => {
	if (check.isEmpty(req.params.blogId)) {
		logger.error('blogId should be passed', 'blogController: deleteBlog');
		let apiResponse = response.generate(true, 'blogId is missing', 403, null);
		res.send(apiResponse);
	} else {
		BlogModel.remove({ blogId: req.params.blogId }, (err, result) => {
			if (err) {
				logger.error(`Error Occured : ${err}`, 'blogController: deleteBlog');
				let apiResponse = response.generate(true, 'Error Occured.', 500, null);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.error('Result not found', 'blogController: deleteBlog');
				let apiResponse = response.generate(true, 'Blog Not Found.', 404, null);
				res.send(apiResponse);
			} else {
				logger.info('Blog Deletion Success', 'blogController: deleteBlog');
				let apiResponse = response.generate(
					false,
					'Blog Deleted Successfully',
					200,
					[]
				);
				res.send(apiResponse);
			}
		});
	}
}; //end of deleteBlog

/**
 * function to create the blog.
 */
let createBlog = (req, res) => {
	let blogCreationFunction = () => {
		return new Promise((resolve, reject) => {
			if (
				check.isEmpty(req.body.title) ||
				check.isEmpty(req.body.description) ||
				check.isEmpty(req.body.blogBody) ||
				check.isEmpty(req.body.category)
			) {
				logger.info('403, forbidden request', 'blogController: createBlog');
				let apiResponse = response.generate(
					true,
					'required parameters are missing',
					403,
					null
				);
				reject(apiResponse);
			} else {
				var today = time.getLocalTime();
				let blogId = shortid.generate();

				let newBlog = new BlogModel({
					blogId: blogId,
					title: req.body.title,
					description: req.body.description,
					bodyHtml: req.body.blogBody,
					isPublished: true,
					category: req.body.category,
					author: req.user.fullName,
					created: today,
					lastModified: today
				}); // end new blog model

				let tags =
					req.body.tags != undefined &&
					req.body.tags != null &&
					req.body.tags != ''	? req.body.tags.split(',')	: [];
				newBlog.tags = tags;

				newBlog.save((err, result) => {
					if (err) {
						logger.error(`Error Occured : ${err}`, 'Database');
						let apiResponse = response.generate(
							true,
							'Error Occured.',
							500,
							null
						);
						reject(apiResponse);
					} else {
						logger.info(
							'Success in blog creation',
							'blogController: createBlog'
						);
						resolve(result);
					}
				}); // end new blog save
			}
		}); // end new blog promise
	}; // end create blog function

	// making promise call.
	blogCreationFunction()
		.then(result => {
			result = result.toObject();
			delete result.__v;
			delete result._id;
			let apiResponse = response.generate(
				false,
				'Blog Created successfully',
				200,
				result
			);
			res.send(apiResponse);
		})
		.catch(error => {
			res.send(error);
		});
}; //end of createBlog

/**
 * function to increase views of a blog.
 */
let increaseBlogView = (req, res) => {
	if (check.isEmpty(req.params.blogId)) {
		logger.error('blogId should be passed', 'blogController: increaseBlogView');
		let apiResponse = response.generate(true, 'blogId is missing', 403, null);
		res.send(apiResponse);
	} else {
		BlogModel.findOne({ blogId: req.params.blogId }, (err, result) => {
			if (err) {
				logger.error(
					`Error Occured : ${err}`,
					'blogController: increaseBlogView'
				);
				let apiResponse = response.generate(true, 'Error Occured.', 500, null);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.error('Result not found', 'blogController: increaseBlogView');
				let apiResponse = response.generate(true, 'Blog Not Found', 404, null);
				res.send(apiResponse);
			} else {
				result.views += 1;
				result.save(function(err, result) {
					if (err) {
						logger.error(
							`Error Occured : ${err}`,
							'blogController: increaseBlogView'
						);
						let apiResponse = response.generate(
							true,
							'Error Occured While saving blog',
							500,
							null
						);
						res.send(apiResponse);
					} else {
						result = result.toObject();
						delete result.__v;
						delete result._id;
						logger.error(
							'Blog Updated Successfully',
							'blogController: increaseBlogView'
						);
						let apiResponse = response.generate(
							false,
							'Blog Updated Successfully.',
							200,
							result
						);
						res.send(apiResponse);
					}
				}); // end result
			}
		});
	}
}; // end of increaseBlogView

module.exports = {
	getAllBlog: getAllBlog,
	createBlog: createBlog,
	viewByBlogId: viewByBlogId,
	viewByCategory: viewByCategory,
	viewByAuthor: viewByAuthor,
	editBlog: editBlog,
	deleteBlog: deleteBlog,
	increaseBlogView: increaseBlogView
}; // end exports
