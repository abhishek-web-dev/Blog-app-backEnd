const logger = require('pino')();
const moment = require('moment');
const momenttz = require('moment-timezone');
const timeZone = 'Asia/Calcutta';

let captureError = (errorMessage, errorOrigin) => {
	let currentTime = moment()
		.tz(timeZone)
		.format('YYYY-MM-DD hh:mm:ss A');

	let errorResponse = {
		timestamp: currentTime,
		errorMessage: errorMessage,
		errorOrigin: errorOrigin
	};

	logger.error(errorResponse);
}; // end captureError

let captureInfo = (message, origin) => {
	let currentTime = moment()
		.tz(timeZone)
		.format('YYYY-MM-DD hh:mm:ss A');

	let infoMessage = {
		timestamp: currentTime,
		message: message,
		origin: origin
	};

	logger.info(infoMessage);
}; // end infoCapture

module.exports = {
	error: captureError,
	info: captureInfo
};
