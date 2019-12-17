const moment = require('moment');
const momenttz = require('moment-timezone');
const timeZone = 'Asia/Calcutta';

let now = () => {
	return moment.utc().format('YYYY-MM-DD hh:mm:ss A');
};

let getLocalTime = () => {
	return moment()
		.tz(timeZone)
		.format('YYYY-MM-DD hh:mm:ss A');
};

let convertToLocalTime = time => {
	return momenttz.tz(time, timeZone).format('LLLL');
};

module.exports = {
	now: now,
	getLocalTime: getLocalTime,
	convertToLocalTime: convertToLocalTime
};
