const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');

let errorHandler = (err, req, res, next) => {
	logger.error(`Error Occured : ${err}`, 'appErrorHandler: errorHandler');

	let apiResponse = response.generate(
		true,
		'Some error occured at global level',
		500,
		null
	);
	res.send(apiResponse);
}; // end request ip logger function

let notFoundHandler = (req, res, next) => {
	logger.error(
		'Global not found handler called',
		'appErrorHandler: errorHandler'
	);
	let apiResponse = response.generate(
		true,
		'Route not found in the application',
		404,
		null
	);
	res.status(404).send(apiResponse);
}; // end not found handler

module.exports = {
	globalErrorHandler: errorHandler,
	globalNotFoundHandler: notFoundHandler
};
